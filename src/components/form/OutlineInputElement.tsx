import { FormControl, FormHelperText, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';

interface MuiProps {
  inputProps?: OutlinedInputProps;
}

const OutlinedInputElement = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  inputProps,
  ...props
}: MuiProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel>{inputProps?.label}</InputLabel>
      <OutlinedInput {...inputProps} {...field} />
      <FormHelperText>{!!error && error.message}</FormHelperText>
    </FormControl>
  );
};

export default OutlinedInputElement;
