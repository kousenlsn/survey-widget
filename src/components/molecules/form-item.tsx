import { FC } from "react";
import styled from "styled-components";

import { fadeIn, P, Flex } from "components/atoms";

const Container = styled(Flex)`
  flex-direction: column;

  position: relative;
  margin-top: 8px;
  margin-bottom: 4px;
  padding-bottom: 16px;

  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.family};

  & > input, select {
    padding: 8px;
    border-radius: 4px;
    border: none;
  }
`;

const Label = styled(P)`
  margin: 0;
  margin-bottom: 4px;
`;

const Error = styled(P)`
  position: absolute;
  bottom: 0;
  
  margin: 0;
  color: red;
  animation: ${fadeIn} 100ms ease-in;
  font-size: 13px;
`;

interface FormItemProps {
  label: string;
  error?: string | undefined;
}

export const FormItem: FC<FormItemProps> = ({ label, error, children }) => (
  <Container>
    <Label>{label}</Label>
    
    {children}

    {error && <Error>{error}</Error>}
  </Container>
);
