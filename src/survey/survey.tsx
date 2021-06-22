import { FC, useState } from "react";

import { Dialog, theme } from "../components";
import { DetailsStep, FavoritesStep, IdentityStep, SummaryStep } from "./steps";
import {
  StepsContainer,
  StepsContainerProvider,
} from "../components/organisms";
import { SurveyData } from "./survey.model";
import { ThemeProvider } from "styled-components";

export interface SurveyProps {
  delay?: number;
  onNextCb?: (data: SurveyData) => void;
  onFinishCb?: (data: SurveyData) => void;
  initialData?: SurveyData;
}

export const Survey: FC<SurveyProps> = ({
  delay,
  onFinishCb,
  onNextCb,
  initialData,
}) => {
  const [show, setShow] = useState<boolean>(true);

  const initialStep =
    (!initialData && 1) ||
    (!initialData?.age && 2) ||
    (!initialData?.book && 3) ||
    4;

  return (
    <ThemeProvider theme={theme}>
      <StepsContainerProvider<SurveyData>
        initialData={initialData}
        initialStep={initialStep}
        onFinishCb={(d) => {
          onFinishCb && onFinishCb(d);
          setShow(false);
        }}
        onNextCb={(d) => {
          onNextCb && onNextCb(d);
        }}
      >
        <Dialog delay={delay} show={show}>
          <StepsContainer>
            <IdentityStep />
            <DetailsStep />
            <FavoritesStep />
            <SummaryStep />
          </StepsContainer>
        </Dialog>
      </StepsContainerProvider>
    </ThemeProvider>
  );
};
