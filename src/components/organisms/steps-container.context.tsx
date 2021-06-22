import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useRef,
} from "react";

import { useStateCallback, useStepState } from "../../hooks";

export interface GenericData {
  [key: string]: any;
}

interface StepsContainerContextData<T extends GenericData = GenericData> {
  stepNumber: number;
  nextStep(data: Partial<T>): void;
  previousStep(): void;
  finish(): void;
  data: T;
  setData: (data: T) => void;
}

const StepContainerContext = createContext<StepsContainerContextData>(
  {} as StepsContainerContextData
);

interface StepsContainerProviderProps<T> {
  onNextCb?: (data: T) => void;
  onFinishCb?: (data: T) => void;
  onCloseCb?: (data: T) => void;
  children: any;
  initialData: T | undefined;
  initialStep?: number;
}

export function StepsContainerProvider<T = GenericData>({
  onFinishCb,
  onCloseCb,
  onNextCb,
  children,
  initialData = {} as T,
  initialStep,
}: StepsContainerProviderProps<T>): ReactElement {
  const [data, setData] = useStateCallback<T>(initialData);
  const updatedDataRef = useRef<T>(data);

  const { stepNumber, nextStep, previousStep } = useStepState(
    () => onNextCb && onNextCb(updatedDataRef.current),
    undefined,
    () => onCloseCb && onCloseCb(updatedDataRef.current),
    initialStep
  );

  const goToNextStep = useCallback(
    (nextData: Partial<GenericData> = {}): void => {
      updatedDataRef.current = { ...data, ...nextData };
      setData(updatedDataRef.current, nextStep);
    },
    [setData, data, nextStep]
  );

  const finish = (): void => {
    onCloseCb && onCloseCb(data);
    onFinishCb && onFinishCb(data);
  };

  return (
    <StepContainerContext.Provider
      value={{
        previousStep,
        nextStep: goToNextStep,
        finish,
        stepNumber,
        data,
        setData,
      }}
    >
      {children}
    </StepContainerContext.Provider>
  );
}

export function useStepsContext<
  T = GenericData
>(): StepsContainerContextData<T> {
  const context = useContext(
    StepContainerContext
  ) as StepsContainerContextData<T>;

  if (!context) {
    throw new Error(
      "useStepsContext must be used within an StepsContainerProvider"
    );
  }

  return context;
}
