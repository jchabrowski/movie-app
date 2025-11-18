import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import { useId } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// This is a base-ui NumberField boilerplate implementation.

export default function NumberField({
  id: idProp,
  label,
  error,
  size = 'medium',
  ...other
}: BaseNumberField.Root.Props & {
  label?: React.ReactNode;
  size?: 'small' | 'medium';
  error?: boolean;
}) {
  let id = useId();
  if (idProp) {
    id = idProp;
  }
  return (
    <BaseNumberField.Root
      allowWheelScrub
      {...other}
      render={(props, state) => (
        <FormControl
          size={size}
          ref={props.ref}
          disabled={state.disabled}
          required={state.required}
          error={error}
          variant='outlined'
        >
          {props.children}
        </FormControl>
      )}
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>

      <BaseNumberField.Input
        id={id}
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
