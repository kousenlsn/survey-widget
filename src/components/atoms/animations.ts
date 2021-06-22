import { keyframes } from "styled-components";

export const rightToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
    }
  80% {
    transform: translateX(-1rem);
    }
  100% {
    opacity: 1;
    transform: translate(0);
    }
`;

export const leftToRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
    }
  80% {
    transform: translateX(1rem);
    }
  100% {
    opacity: 1;
    transform: translate(0);
    }
`;

export const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
