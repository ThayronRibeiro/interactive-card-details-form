import { ChangeEvent } from "react";

import "./styles.css";

type Props = {
  label: string;
  placeholder?: string;
  value?: string;
  changeValue: any;
  doubleInput?: boolean;

  secondPlaceholder?: string;
  secondValue?: string;
  secondChangeValue?: any;
};

export const FormItem = ({
  label,
  placeholder,
  value,
  changeValue,
  doubleInput,
  secondPlaceholder,
  secondValue,
  secondChangeValue,
}: Props) => {
  return (
    <div className="Form">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={() => changeValue}
      />
      {doubleInput && (
        <input
          type="text"
          value={secondValue}
          placeholder={secondPlaceholder}
          onChange={() => secondChangeValue}
        />
      )}
    </div>
  );
};
