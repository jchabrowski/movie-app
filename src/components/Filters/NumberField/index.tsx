import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import { useId, type ReactNode } from 'react';

// This is a base-ui NumberField boilerplate implementation
export default function NumberField({
  label,
  value,
  onValueChange,
  ...other
}: BaseNumberField.Root.Props & {
  label?: ReactNode;
  value?: number;
  onValueChange?: (value: number) => void;
}) {
  const id = useId();

  // TODO - right now there is a bug in mui - some locales insert separators (like , and .) and input number does not have built in formatter to romve those values.
  // const strCleanup = (value: string | number): string => {
  //   let str = String(value);

  //   str = str.replace(/[,.+\-]/g, '');

  //   return str;
  // };

  return (
    <BaseNumberField.Root
      allowWheelScrub
      value={value}
      onValueChange={onValueChange}
      {...other}
      render={(props) => (
        <FormControl ref={props.ref} variant='outlined'>
          {props.children}
        </FormControl>
      )}
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>

      <BaseNumberField.Input
        render={(props) => {
          return (
            <OutlinedInput
              label={label}
              inputRef={props.ref}
              value={value}
              onBlur={props.onBlur}
              onChange={props.onChange}
              onKeyUp={props.onKeyUp}
              onKeyDown={props.onKeyDown}
              onFocus={props.onFocus}
              slotProps={{
                input: props,
              }}
            />
          );
        }}
      />
    </BaseNumberField.Root>
  );
}
