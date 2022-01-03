/* eslint-disable no-nested-ternary */
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';

import * as S from './styles';

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): JSX.Element {
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
          >
            <S.Title isFocused={isFocused}>{label}</S.Title>
            {route.name === 'Requests' && (
              <S.Badge>
                <S.BadgeTitle>1</S.BadgeTitle>
              </S.Badge>
            )}
          </S.Button>
        );
      })}
    </S.Container>
  );
}
