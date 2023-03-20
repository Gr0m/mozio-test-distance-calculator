import { DatepickerInputContainer } from '@components/DatepickerInput/DatepickerInput.styles';
import Label from '@components/UI/Label/Label';
import Input from '@components/UI/Input/Input';
import React, { useEffect, useId, useRef, useState } from 'react';
import Dropdown from '@components/UI/Dropdown/Dropdown';
import Datepicker from '@components/UI/Datepicker/Datepicker';
import { formatDate } from 'baseui/datepicker';
import theme from '@themes/default';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const DatepickerInput = ({ label, value, onChange }: Props) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [datepickerVisible, setDatepickerVisibility] = useState<boolean>(false);
  const datepickerChangeHandler = (date: Date) => {
    const newDate = formatDate(date, theme.dateFormat) as string;
    onChange(newDate);

    setDatepickerVisibility(false);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const showDatepicker = () => {
    setDatepickerVisibility(true);
  };

  const hideDatepicker = () => {
    setDatepickerVisibility(false);
  };

  const inputClickHandler = () => {
    showDatepicker();
  };

  const onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      showDatepicker();
    }
  };

  const handleEscapeKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      hideDatepicker();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <DatepickerInputContainer>
      <Label htmlFor={`datepicker-input-${id}`}>{label}</Label>
      <Input
        ref={inputRef}
        value={value}
        id={`datepicker-input-${id}`}
        $limitedWidth
        onClick={inputClickHandler}
        onKeyPress={onKeyPressHandler}
        readOnly
      />
      {datepickerVisible && (
        <Dropdown>
          <Datepicker
            onChange={({ date }) => datepickerChangeHandler(date as Date)}
            initialState={{ value: new Date(value) }}
          />
        </Dropdown>
      )}
    </DatepickerInputContainer>
  );
};

export default DatepickerInput;
