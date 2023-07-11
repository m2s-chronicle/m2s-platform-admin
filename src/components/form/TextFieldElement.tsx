import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { ReactNode } from 'react';

interface MuiProps {
  textFieldProps?: TextFieldProps;
  children?: ReactNode;
}

const TextFieldElement = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  textFieldProps,
  ...props
}: MuiProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return <TextField {...textFieldProps} {...field} error={!!error} helperText={!!error && error.message} />;
};

export default TextFieldElement;
