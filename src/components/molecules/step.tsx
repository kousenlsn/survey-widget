import { FC } from "react";
import styled from "styled-components";

import { Flex, Button } from "../atoms";

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 8px;
  max-width: 80vw;
  min-width: 200px;
  min-height: 200px;
  max-height: 80vh;

  padding: 16px;
`;

const CardButton = styled(Button)`
  margin-top: 8px;
`;

export interface StepProps {
  cardButtonLabel?: string;
  onForward?: () => void;
}

export const Step: FC<StepProps> = ({
  cardButtonLabel = 'Next',
  onForward,
  children,
}) => (
  <CardContainer>
    <Flex direction="column">
      {children}
    </Flex>
    <CardButton onClick={onForward}>
      {cardButtonLabel}
    </CardButton>
  </CardContainer>
);
