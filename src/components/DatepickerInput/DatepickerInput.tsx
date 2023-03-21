import { DatepickerInputContainer } from '@components/DatepickerInput/DatepickerInput.styles';
import Text from '@components/UI/Texts/Texts';
import Input from '@components/UI/Input/Input';
import React, { useEffect, useId, useRef, useState } from 'react';
import Dropdown from '@components/UI/Dropdown/Dropdown';
import Datepicker from '@components/UI/Datepicker/Datepicker';
import theme from '@themes/default';
import dayjs from 'dayjs';

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
    const newDate = dayjs(date, theme.dateFormat).format(theme.dateFormat);
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
      <Text $as="label" htmlFor={`datepicker-input-${id}`}>{label}</Text>
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
        <Dropdown $centerOnMobile>
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
