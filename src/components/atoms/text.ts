import styled from "styled-components";

interface textProps {
  scheme?: 'light' | 'dark';
}

export const P = styled.p<textProps>`
  color: ${({ scheme, theme }) => scheme === 'light' ? theme.colors.light : theme.colors.dark };
  margin: 4px 0;
  font-family: ${({ theme }) => theme.fonts.family };
  font-size: ${({ theme }) => theme.fonts.p };
  color: ${({ theme }) => theme.colors.dark };
`;

export const Heading = styled(P)`
  font-size: ${({ theme }) => theme.fonts.h };
  font-weight: bold;
  margin: 8px 0;
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.family };
  font-size: ${({ theme }) => theme.fonts.p };
  color: ${({ theme }) => theme.colors.dark };
  margin-right: 4px;
`;
