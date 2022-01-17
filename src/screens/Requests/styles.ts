import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { ScrollViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled(LinearGradient).attrs(
  ({ theme }) =>
    ({
      colors: theme.COLORS.GRADIENT,
      end: { x: 0, y: 0 },
      start: { x: 1, y: 1 },
    } as LinearGradientProps),
)`
  align-items: center;
  justify-content: center;
  padding: 64px 0 32px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const RequestsList = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
} as ScrollViewProps)`
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Request = styled.TouchableOpacity<{
  borderRight: boolean;
  borderBottom: boolean;
}>`
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  ${({ theme, borderRight, borderBottom }) => css`
    border-right-width: ${borderRight ? 1 : 0}px;
    border-right-color: ${borderRight ? theme.COLORS.SHAPE : 'transparent'};
    border-bottom-width: ${borderBottom ? 1 : 0}px;
    border-bottom-color: ${borderBottom ? theme.COLORS.SHAPE : 'transparent'};
  `}
`;

export const RequesTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 20px;

  color: #572d31;
  margin: 21px 0 11px;
`;

export const RequestDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;

  color: #7a6769;
`;

export const StatusBadge = styled.View<{ status: string }>`
  padding: 4px 16px;

  height: 28px;

  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  ${({ theme, status }) => {
    if (status === 'PRONTO') {
      return css`
        background: ${theme.COLORS.SUCCESS_900};
      `;
    }
    if (status === 'PREPARANDO') {
      return css`
        background: rgba(197, 148, 26, 0.08);
        border: 1px solid rgba(178, 127, 0, 0.64);
      `;
    }

    return css`
      background: ${theme.COLORS.SECONDARY_900};
    `;
  }}
`;

export const StatusBadgeLabel = styled.Text<{ status: string }>`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 12px;

  ${({ theme, status }) => {
    if (status === 'PRONTO' || status === 'ENTREGUE') {
      return css`
        color: ${theme.COLORS.TITLE};
      `;
    }

    return css`
      color: ${theme.COLORS.ALERT_900};
    `;
  }}
`;
