import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import { useId } from 'react';

// This is a base-ui NumberField boilerplate implementation

export default function NumberField({
  label,
  ...other
}: BaseNumberField.Root.Props & {
  label?: React.ReactNode;
}) {
  const id = useId();

  return (
    <BaseNumberField.Root
      allowWheelScrub
      {...other}
      render={(props, state) => (
        <FormControl
          ref={props.ref}
          disabled={state.disabled}
          required={state.required}
          variant='outlined'
        >
          {props.children}
        </FormControl>
      )}
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>

      <BaseNumberField.Input
        render={(props, state) => (
          <OutlinedInput
            label={label}
            inputRef={props.ref}
            value={state.inputValue}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onKeyUp={props.onKeyUp}
            onKeyDown={props.onKeyDown}
            onFocus={props.onFocus}
            slotProps={{
              input: props,
            }}
          />
        )}
      />
    </BaseNumberField.Root>
  );
}
