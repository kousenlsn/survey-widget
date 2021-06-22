import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px;

  font-weight: bold;
  box-shadow: 0px 2.32703px 4.5px rgba(105, 112, 117, 0.2);

  user-select: none;

  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.family };
  font-size: ${({ theme }) => theme.fonts.p };
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.secondary};

  transition: all 200ms;
  
  &:hover {
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.2;
  }
`;

export const GhostButton = styled(Button)`
  padding: inherit;
  background: none;
  font-size: 24px;
`;
