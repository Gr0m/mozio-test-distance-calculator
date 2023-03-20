import {
  ComboBoxContainer,
  PositionedClearButton,
  PositionedCrossButton,
  PositionedErrorMessage
} from '@components/ComboBox/ComboBox.styles';
import React, { ChangeEvent, useCallback, useId, useRef, useState } from 'react';
import Input from '@components/UI/Input/Input';
import Label from '@components/UI/Label/Label';
import Dropdown from '@components/UI/Dropdown/Dropdown';
import DropdownSkeleton from '@components/UI/Dropdown/DropdownSkeleton';
import DropdownOption from '@components/UI/Dropdown/DropdownOption';
import endpoints from '@data/endpoints';
import axios from 'axios';
import debounce from '../../utilitites/debounce';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  error?: string;
  onError?: (error: string) => void;
  removable?: boolean;
  onRemove?: () => void;
  autocomplete?: boolean;
}

const ComboBox = ({
  label,
  value,
  onChange,
  onClear,
  error,
  onError,
  removable,
  onRemove,
  autocomplete
}: Props) => {
  const id = useId();
  const comboBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const shouldFetchRef = useRef(false);
  const [dropdownVisible, setDropdownVisibility] = useState(false);
  const [autocompleteLoading, setAutocompleteLoading] = useState(true);
  const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);
  const [autocompleteOptionSelected, setAutocompleteOptionSelected] = useState(false);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);

    onChange(value);
    setAutocompleteOptionSelected(false);

    if (autocomplete) {
      if (value) {
        shouldFetchRef.current = true;
        optimizedLoadAutocomplete(value);
      } else {
        shouldFetchRef.current = false;
        setDropdownVisibility(false);
      }
    }
  };

  const onClearHandler = () => {
    if (onClear) {
      onClear();
    }

    setDropdownVisibility(false);
    setAutocompleteOptionSelected(false);
  };

  const clickOutsideHandler = () => {
    if (inputRef.current?.value && !autocompleteOptionSelected) {
      setDropdownVisibility(false);
      onChange('');
    }
  };

  useOnClickOutside(comboBoxRef, clickOutsideHandler);

  const loadAutocomplete = (query: string) => {
    if (!shouldFetchRef.current) {
      return;
    }
    
    setDropdownVisibility(true);
    setAutocompleteLoading(true);
    setAutocompleteOptions([]);

    axios
      .post(endpoints.autocomplete, {
        params: {
          query
        }
      })
      .then((response) => {
        const { data } = response;
        setAutocompleteOptions(data);
      })
      .catch((error) => {
        onError && onError(error.message);
        setDropdownVisibility(false);
      })
      .finally(() => {
        setAutocompleteLoading(false);
      });
  };

  const optimizedLoadAutocomplete = useCallback(debounce(loadAutocomplete, 333), []);

  const optionClickHandler = (value: string) => {
    onChange(value);
    setDropdownVisibility(false);
    setAutocompleteOptionSelected(true);
  };

  let autocompleteOptionsRender = <DropdownOption disabled>No results</DropdownOption>;

  if (autocompleteOptions.length > 0) {
    autocompleteOptionsRender = (
      <>
        {autocompleteOptions.map((option) => (
          <DropdownOption key={option[0]} onClick={() => optionClickHandler(option[0])}>
            {option[0]}
          </DropdownOption>
        ))}
      </>
    );
  }

  if (autocompleteLoading) {
    autocompleteOptionsRender = (
      <>
        <DropdownSkeleton />
        <DropdownSkeleton />
        <DropdownSkeleton />
        <DropdownSkeleton />
        <DropdownSkeleton />
      </>
    );
  }

  return (
    <ComboBoxContainer ref={comboBoxRef}>
      <Label htmlFor={`input-${id}`}>{label}</Label>
      <Input
        ref={inputRef}
        value={value}
        onChange={inputChangeHandler}
        id={`input-${id}`}
        $error={error}
        aria-required="true"
        aria-invalid={!!error}
        autoComplete="off"
      />
      {value && onClear && (
        <PositionedClearButton onClick={onClearHandler}>Clear</PositionedClearButton>
      )}
      {error && <PositionedErrorMessage>{error}</PositionedErrorMessage>}
      {removable && <PositionedCrossButton $x onClick={onRemove} />}
      {dropdownVisible && <Dropdown>{autocompleteOptionsRender}</Dropdown>}
    </ComboBoxContainer>
  );
};

export default ComboBox;
