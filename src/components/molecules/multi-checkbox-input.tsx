import { forwardRef } from "react";
import { Control, useController } from "react-hook-form";

import { Label } from "components/atoms";

interface CheckboxOpt {
  value: string;
  label?: string;
}

interface MultiCheckboxInputProps {
  opts: CheckboxOpt[];
  name: string;
  control: Control<any>;
  defaultValue?: string[];
  rules?: any;
}

export const MultiCheckboxInput = forwardRef<any, MultiCheckboxInputProps>(
  ({ opts, name, control, rules }, ref) => {
    const {
      field: { onChange, value: inputValue, ...inputProps },
    } = useController({
      name,
      control,
      rules,
    });

    const onCheckboxChange = ({ target: { value, checked } }) => {
      const nextValue = !checked
        ? inputValue.filter((v) => v !== value)
        : [...inputValue, value];
      onChange(nextValue);
    };

    return (
      <div ref={ref}>
        {opts.map(({ value, label }) => (
          <Label key={value}>
            <input
              type="checkbox"
              {...inputProps}
              value={value}
              onChange={onCheckboxChange}
              defaultChecked={inputValue.indexOf(value) >= 0}
            />
            {label || value}
          </Label>
        ))}
      </div>
    );
  }
);
