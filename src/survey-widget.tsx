import ReactDOM from "react-dom";
import { StrictMode } from "react";

import { Survey, SurveyProps } from "survey";
import { SurveyData } from "survey/survey.model";

const DATA_KEY = "survey-widget/data";
const COMPLETE_KEY = "survey-widget/completed";

const defaultOnFinishCb = () => localStorage.setItem(COMPLETE_KEY, "true");
const defaultOnNextCb = (data: SurveyData) =>
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
const getInitialData = () => {
  const dataJson = localStorage.getItem(DATA_KEY);
  return !!dataJson ? (JSON.parse(dataJson) as SurveyData) : undefined;
};

export const surveyWidget = (el?: HTMLElement, config: SurveyProps = {}) => {
  const isCompleted = localStorage.getItem(COMPLETE_KEY) === "true";

  if (isCompleted) return;

  if (!el) {
    const div = document.createElement('div');
    div.id = "survey"
    document.body.appendChild(div);
  }

  let nextConfig: SurveyProps = {
    initialData: config.initialData || getInitialData(),
    onFinishCb: config.onFinishCb || defaultOnFinishCb,
    onNextCb: config.onNextCb || defaultOnNextCb,
  };

  ReactDOM.render(
    <StrictMode>
      <Survey {...nextConfig} />
    </StrictMode>,
    el || document.getElementById("survey")
  );
};
