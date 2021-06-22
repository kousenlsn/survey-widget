import { FC } from "react";
import { useForm } from "react-hook-form";

import { FormItem, Step, RadioPicker } from "components/molecules";
import { useStepsContext } from "components/organisms";
import { Heading } from "components/atoms";
import { DetailsData } from "survey/survey.model";

const validateSelect = (value: string) => +value > 0 || "Required field.";

export const DetailsStep: FC = () => {
  const { nextStep, data } = useStepsContext<DetailsData>();

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<DetailsData>({
    defaultValues: data,
  });

  return (
    <Step onForward={handleSubmit((data) => nextStep(data))}>
      <Heading>Can you tell us more about yourself? ☺</Heading>

      <FormItem label="Age*" error={errors.age?.message}>
        <select {...register("age", { validate: validateSelect })}>
          <option value={-1}>Select a range</option>
          <option value={10}>Between 10 to 19</option>
          <option value={20}>Between 20 to 29</option>
          <option value={30}>Between 30 to 39</option>
          <option value={40}>Between 40 to 49</option>
        </select>
      </FormItem>

      <FormItem label="Gender*" error={errors.gender?.message}>
        <RadioPicker
          control={control}
          name="gender"
          rules={{ required: true }}
          opts={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "non-binary", label: "Non-binary" },
          ]}
        />
      </FormItem>
    </Step>
  );
};
