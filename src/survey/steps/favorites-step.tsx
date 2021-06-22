import { FC } from "react";
import { useForm } from "react-hook-form";

import { FormItem, Step, MultiCheckboxInput } from "components/molecules";
import { useStepsContext } from "components/organisms";
import { Heading } from "components/atoms";
import { FavoritesData } from "survey/survey.model";

export const FavoritesStep: FC = () => {
  const { nextStep, data } = useStepsContext<FavoritesData>();

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<FavoritesData>({
    defaultValues: data,
  });

  return (
    <Step onForward={handleSubmit(nextStep)}>
      <Heading>So, what moves you? ☺</Heading>

      <FormItem label="Favorite book" error={errors.book?.message}>
        <input {...register("book", { required: "Required field." })} />
      </FormItem>

      <FormItem label="Favorite color" error={(errors.colors as any)?.message}>
        <MultiCheckboxInput
          control={control}
          name="colors"
          rules={{ required: "At least one option is required." }}
          opts={[
            { value: "red", label: "Red" },
            { value: "green", label: "Green" },
            { value: "blue", label: "Blue" },
          ]}
        />
      </FormItem>
    </Step>
  );
};
