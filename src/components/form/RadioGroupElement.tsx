import { Fragment } from 'react';
import { styled } from '@mui/material/styles';

import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';

const RadioWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  'input + label:first-of-type': {
    borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
  },
  'input + label:last-of-type': {
    borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
    borderRight: `1px solid rgba(${theme.palette.customColors.main}, .22)`,
  },
}));

const Input = styled('input')(({ theme }) => ({
  width: 0,
  height: 0,
  position: 'absolute',
  left: '-9999px',
  '& + label': {
    margin: 0,
    flex: 1,
    textAlign: 'center',
    padding: theme.spacing(2.2, 1),
    border: `1px solid rgba(${theme.palette.customColors.main}, .22)`,
    borderRight: 0,
    position: 'relative',
    fontSize: '.875rem',
    cursor: 'pointer',
    display: 'inline-block',
    boxSizing: 'border-box',
    transition: 'color 0.25s ease-out, background-color 0.15s ease-out, box-shadow 0.15s ease-out',
  },
  '&:hover + label': {
    backgroundColor: theme.palette.background.default,
  },
  '&:checked + label': {
    backgroundColor: theme.palette.background.default,
  },
}));

interface IProps {
  radioProps: {
    options: {
      label: string;
      value: string;
      default?: boolean;
    }[];
  };
}

const RadioGroupElement = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  radioProps,
  ...props
}: IProps & UseControllerProps<TFieldValues, TName>) => {
  const { field } = useController(props);

  return (
    <RadioWrapper>
      {radioProps.options.map((option) => (
        <Fragment key={option.value}>
          <Input
            {...props}
            {...field}
            type="radio"
            value={option.value}
            id={option.value}
            defaultChecked={option.default}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </Fragment>
      ))}
    </RadioWrapper>
  );
};

export default RadioGroupElement;
