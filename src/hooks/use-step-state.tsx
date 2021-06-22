import { useCallback, useState } from 'react';

export const useStepState = (
  onNextCb?: () => void,
  onBackCb?: () => void,
  onBackCloseCb?: () => void,
  initialStep: number = 1,
): {
  stepNumber: number;
  nextStep: () => void;
  previousStep: () => void;
  reset: () => void;
} => {
  const [stepNumber, setStepNumber] = useState<number>(initialStep);

  const nextStep = useCallback(() => {
    setStepNumber(stepNumber + 1);
    onNextCb && onNextCb();
  }, [onNextCb, stepNumber]);

  const previousStep = useCallback(() => {
    if (stepNumber === 1) {
      onBackCloseCb && onBackCloseCb();
    } else {
      setStepNumber(stepNumber - 1);
      onBackCb && onBackCb();
    }
  }, [onBackCb, onBackCloseCb, stepNumber]);

  const reset = useCallback(() => {
    setStepNumber(1);
  }, []);

  return { stepNumber, nextStep, previousStep, reset };
};
