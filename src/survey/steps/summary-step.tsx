import { FC } from "react";
import styled from "styled-components";

import { Heading, P, Flex } from "components/atoms";
import { Step } from "components/molecules";
import { useStepsContext } from "components/organisms";
import { SurveyData } from "survey/survey.model";

const Label = styled(P)`
  flex: 1;
  margin-right: 16px;
`;

const Display = styled(P)<{ capitalize?: boolean }>`
  font-weight: bold;
  color: darkblue;
  text-transform: ${({ capitalize }) =>
    capitalize ? "capitalize" : "lowercase"};
`;

const SummaryLine: FC<{ label: string; value: string; capitalize?: boolean }> =
  ({ label, value, capitalize }) => (
    <Flex flexWrap>
      <Label>{label}:</Label>
      <Display capitalize={capitalize}>{value}</Display>
    </Flex>
  );

export const SummaryStep: FC = () => {
  const { finish, data } = useStepsContext<SurveyData>();

  return (
    <Step cardButtonLabel="Submit" onForward={finish}>
      <Heading>Are those correct? ☺</Heading>

      <SummaryLine label="Name" value={data.name} capitalize />
      <SummaryLine label="Email" value={data.email} />
      <SummaryLine label="Age" value={`about ${data.age} years old`} />
      <SummaryLine label="Gender" value={data.gender} capitalize />

      <SummaryLine label="Favorite book" value={data.book} capitalize />
      <SummaryLine
        label="Favorite colors"
        value={data.colors.join(", ")}
        capitalize
      />
    </Step>
  );
};
