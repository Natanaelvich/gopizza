/* eslint-disable no-nested-ternary */
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

import * as S from './styles';
import { Request, useRequests } from '@/hooks/useRequests';

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): JSX.Element {
  const { changeRequests, requests } = useRequests();

  useEffect(() => {
    const subscriber = firestore()
      .collection('requests')
      .orderBy('createAt')
      .onSnapshot(documentSnapshot => {
        const requestsFirestore = documentSnapshot.docs.map(p => ({
          id: p.id,
          ...p.data(),
        }));

        changeRequests(requestsFirestore as Request[]);
      });

    return () => subscriber();
  }, [changeRequests]);

  return (
    <S.Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              merge: true,
              params: state.routes,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <S.Button
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
          >
            <S.Title isFocused={isFocused}>{label}</S.Title>
            {route.name === 'Requests' && (
              <S.Badge hasValue={requests.length > 0}>
                <S.BadgeTitle hasValue={requests.length > 0}>
                  {requests.length}
                </S.BadgeTitle>
              </S.Badge>
            )}
          </S.Button>
        );
      })}
    </S.Container>
  );
}
