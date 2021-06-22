import { forwardRef } from "react";
import { Control, useController } from "react-hook-form";

import { Label } from "components/atoms";

interface RadioOpt {
  value: string;
  label?: string;
}

interface MultiCheckboxInputProps {
  opts: RadioOpt[];
  name: string;
  control: Control<any>;
  defaultValue?: string;
  rules?: any;
}

export const RadioPicker = forwardRef<any, MultiCheckboxInputProps>(
  ({ opts, name, control, rules, defaultValue }, ref) => {
    const {
      field: { onChange, value: inputValue, ...inputProps },
    } = useController({
      name,
      control,
      rules,
      defaultValue: defaultValue,
    });

    return (
      <div ref={ref}>
        {opts.map(({ value, label }) => (
          <Label key={value}>
            <input
              type="radio"
              {...inputProps}
              value={value}
              onChange={onChange}
              defaultChecked={inputValue === value}
            />
            {label || value}
          </Label>
        ))}
      </div>
    );
  }
);
