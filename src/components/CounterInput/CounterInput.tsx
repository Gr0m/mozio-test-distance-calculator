import Label from '@components/UI/Label/Label';
import { PositionedErrorMessage } from '@components/ComboBox/ComboBox.styles';
import {
  AdjustedInput,
  CounterInputContainer,
  CounterInputMinus,
  CounterInputPlus
} from '@components/CounterInput/CounterInput.styles';
import { ChangeEvent, useId, useRef } from 'react';
import parseCounterInputValue from '../../utilitites/parseCounterInputValue';

interface Props {
  label: string;
  value: number;
  max?: number;
  onChange: (value: number) => void;
  error?: string;
}

const CounterInput = ({ label, value = 0, max, onChange, error }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let value = parseCounterInputValue(event.target.value);

    if (max && value > max) {
      value = max;
    }

    if (inputRef.current) {
      inputRef.current.value = value.toString();
    }

    onChange(value);
  };

  const buttonClickHandler = (down: boolean = false) => {
    if (inputRef.current) {
      if (down) {
        inputRef.current.stepDown();
      } else {
        inputRef.current.stepUp();
      }

      inputRef.current.dispatchEvent(new Event('change', { bubbles: true }));

      inputRef.current.focus();
    }
  };

  return (
    <CounterInputContainer>
      <Label htmlFor={`counter-input-${id}`}>{label}</Label>
      <AdjustedInput
        ref={inputRef}
        type="number"
        id={`counter-input-${id}`}
        defaultValue={value}
        onChange={inputChangeHandler}
        $error={error}
        aria-required="true"
        aria-invalid={!!error}
        $limitedWidth
      />
      <CounterInputMinus onClick={() => buttonClickHandler(true)} />
      <CounterInputPlus onClick={() => buttonClickHandler()} />
      {error && <PositionedErrorMessage>{error}</PositionedErrorMessage>}
    </CounterInputContainer>
  );
};

export default CounterInput;
