import { Container } from "./styles";
import { Controller } from 'react-hook-form';
import { Input, InputProps } from "../Input";
import { BiErrorCircle } from 'react-icons/bi';

type Props = InputProps & {
  id: string;
  control: any;
  error?: string;
}

export function HookFormInput({ id, control, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChange={onChange} value={value} id={id} />
        )}
        name={id}
      />
      {error && <p><BiErrorCircle /> {error}</p>}
    </Container>
  )
}