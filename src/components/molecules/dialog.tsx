import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { fadeIn, fadeOut, GhostButton, Flex } from "../atoms";

const Backdrop = styled(Flex)<{ show: boolean }>`
  z-index: auto;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  transition: all 250ms ease-in-out;

  background: rgba(0, 0, 0, 0.5);
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 250ms ease-in-out;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
`;

const CloseButton = styled(GhostButton)`
  position: absolute;
  right: -20px;
  top: -20px;

  &:before {
    content: "×";
  }
`;

export interface DialogProps {
  delay?: number;
  show?: boolean;
}

export const Dialog: FC<DialogProps> = ({
  show = true,
  delay = 2000,
  children,
}) => {
  const [shouldShow, setShow] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setDisplay(true);
        setShow(true);
      }, delay);
    } else {
      setShow(false);
    }
  }, [show]);

  return display ? (
    <Backdrop onAnimationEnd={() => setDisplay(shouldShow)} show={shouldShow}>
      <Container>
        <CloseButton onClick={() => setShow(false)} />

        {children}
      </Container>
    </Backdrop>
  ) : (
    <div />
  );
};
