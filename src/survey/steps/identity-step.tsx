import { FC } from "react";
import { useForm } from "react-hook-form";

import { FormItem, Step } from "components/molecules";
import { useStepsContext } from "components/organisms/steps-container.context";
import { IdentityData } from "survey/survey.model";
import { Heading } from "components/atoms";

const validateEmail = (value: string): boolean =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

const emailValidator = (input: string) =>
  !input || validateEmail(input) || "Invalid email.";

export const IdentityStep: FC = () => {
  const { nextStep, data } = useStepsContext<IdentityData>();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IdentityData>({
    defaultValues: data,
  });

  return (
    <Step onForward={handleSubmit((data) => nextStep(data))}>
      <Heading>Mind taking a quick survey? ☺</Heading>

      <FormItem label="Name">
        <input {...register("name")} />
      </FormItem>

      <FormItem label="Email" error={errors.email?.message}>
        <input {...register("email", { validate: emailValidator })} />
      </FormItem>
    </Step>
  );
};
