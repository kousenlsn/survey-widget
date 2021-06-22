import { FC, useState } from "react";

import { Dialog, surveyTheme } from "../components";
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
  const [showDialog, setDialogShow] = useState<boolean>(true);

  const initialStep =
    (!initialData && 1) ||
    (!initialData?.age && 2) ||
    (!initialData?.book && 3) ||
    4;

  return (
    <ThemeProvider theme={surveyTheme}>
      <StepsContainerProvider<SurveyData>
        initialData={initialData}
        initialStep={initialStep}
        onFinishCb={(data) => {
          onFinishCb && onFinishCb(data);
          setDialogShow(false);
        }}
        onNextCb={(data) => {
          onNextCb && onNextCb(data);
        }}
      >
        <Dialog delay={delay} show={showDialog}>
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
