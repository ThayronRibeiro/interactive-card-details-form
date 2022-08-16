import "./styles.css";

import InputMask from "react-input-mask";
import { kMaxLength } from "buffer";

const NumberMask = (props: any) => {
  return (
    <InputMask
      mask={props.mask}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

type Props = {
  label: string;
  placeholder?: string;
  value?: string | number;
  changeValue?: any;
  doubleInput?: boolean;

  secondPlaceholder?: string;
  secondValue?: string | number;
  secondChangeValue?: any;

  mask?: string;
  maxLength?: number;
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

  mask,
  maxLength,
}: Props) => {
  return (
    <div className="Form">
      <label>{label}</label>
      {!mask && (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={changeValue}
          maxLength={28}
        />
      )}
      {mask && (
        <NumberMask
          mask={mask}
          placeholder={placeholder}
          value={value}
          onChange={changeValue}
        />
      )}
      {mask && doubleInput && (
        <NumberMask
          mask={mask}
          value={secondValue}
          placeholder={secondPlaceholder}
          onChange={secondChangeValue}
        />
      )}
      {!mask && doubleInput && (
        <input
          type="text"
          value={secondValue}
          placeholder={secondPlaceholder}
          onChange={secondChangeValue}
        />
      )}
    </div>
  );
};
