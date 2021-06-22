import { FC, ReactElement } from "react";
import styled, { Keyframes } from "styled-components";

import { usePreviousState } from "hooks";
import { useStepsContext } from "components/organisms/steps-container.context";
import { leftToRight, rightToLeft, GhostButton, Flex, P } from "../atoms";

const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

const StepItemContainer = styled(Flex)<{ animation: Keyframes }>`
  flex-direction: column;
  animation: ${({ animation }) => animation} 250ms ease-in-out;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  align-items: baseline;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px;
  border-radius: 8px 8px 0px 0px;
`;

const StepCount = styled(P)`
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export interface StepsContainerProps { 
  children: Array<ReactElement | false>;
}

export const StepsContainer: FC<StepsContainerProps> = ({ children }) => {
  const { stepNumber, previousStep } = useStepsContext();
  const lastStepNumber = usePreviousState(stepNumber) || 0;

  const nextChildren = children[stepNumber - 1];

  return (
    <Container>
      <Header>
        <GhostButton onClick={previousStep} disabled={stepNumber === 1} > &lsaquo; </GhostButton>

        <StepCount>{stepNumber} / {children.length}</StepCount>

        <span/>
      </Header>

      <StepItemContainer
        animation={lastStepNumber <= stepNumber ? rightToLeft : leftToRight}
        key={stepNumber}
      >
        <div>
          {nextChildren}
        </div>
      </StepItemContainer>
    </Container>
  );
};
