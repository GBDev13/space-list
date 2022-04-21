import { InputContainer, InputWrapper, Label } from "./styles";
import { InputHTMLAttributes, ReactNode, useState } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: ReactNode;
}

export function Input({
  label,
  icon,
  id,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer isFocused={focused}>
        {icon}
        <input
          {...rest}
          id={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </InputContainer>
    </InputWrapper>
  )
}