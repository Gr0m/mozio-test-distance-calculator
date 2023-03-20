import MainContainer from '@components/UI/MainContainer/MainContainer';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import ComboBox from '@components/ComboBox/ComboBox';
import Grid from '@components/UI/Grid/Grid';
import Row from '@components/UI/Grid/Row';
import Column from '@components/UI/Grid/Column';
import Route from '@components/Route/Route';
import Button from '@components/UI/Button/Button';
import CounterInput from '@components/CounterInput/CounterInput';
import DatepickerInput from '@components/DatepickerInput/DatepickerInput';
import { formatDate } from 'baseui/datepicker';
import theme from '@themes/default';
import CrossButton from '@components/UI/CrossButton/CrossButton';
import TextButton from '@components/UI/TextButton/TextButton';

interface InputsData<T = string> {
  label: string;
  value: T;
  touched: boolean;
  error?: string;
}

export default function Page() {
  // State. Immer is used here to simplify state management.

  const [formValid, setFormValidity] = useState<boolean>(false);

  const [inputsData, setInputsData] = useImmer<InputsData[]>([
    {
      label: 'City of origin',
      value: '',
      touched: false
    },
    {
      label: 'City of destination',
      value: '',
      touched: false
    }
  ]);

  const [passengers, setPassengers] = useImmer<InputsData<number>>({
    label: 'Passengers',
    value: 1,
    touched: false
  });

  const today = formatDate(new Date(), theme.dateFormat) as string;
  const [date, setDate] = useImmer<InputsData>({
    label: 'Date',
    value: today,
    touched: false
  });

  // Destination inputs

  const inputChangeHandler = (index: number, value: string) => {
    setInputsData((draft) => {
      const target = draft[index];
      target.value = value;
      target.touched = true;

      delete target.error;
    });
  };

  const inputClearHandler = (index: number) => {
    inputChangeHandler(index, '');
  };

  const inputErrorHandler = (index: number, error: string) => {
    setInputsData((draft) => {
      const target = draft[index];
      target.error = error;
    });
  };

  const addDestinationHandler = () => {
    setInputsData((draft) => {
      draft.push({ label: 'City of destination', value: '', touched: false });
    });
  };

  const removeDestinationHandler = (index: number) => {
    setInputsData((draft) => {
      draft.splice(index, 1);
    });
  };

  // Counter inputs

  const counterInputChangeHandler = (value: number) => {
    setPassengers((draft) => {
      draft.value = value;
      draft.touched = true;

      delete draft.error;
    });
  };

  // Datepicker inputs

  const datepickerInputChangeHandler = (value: string) => {
    setDate((draft) => {
      draft.value = value;
      draft.touched = true;

      delete draft.error;
    });
  };

  // Simple form validation

  useEffect(() => {
    let valid = true;

    inputsData.forEach((data, index) => {
      if (!data.value) {
        valid = false;

        if (data.touched) {
          setInputsData((draft) => {
            draft[index].error = `You must choose the ${data.label.toLowerCase()}`;
          });
        }
      }
    });

    if (!passengers.value) {
      valid = false;

      if (passengers.touched) {
        setPassengers((draft) => {
          draft.error = 'Select passengers';
        });
      }
    }

    if (!date.value) {
      valid = false;

      if (date.touched) {
        setDate((draft) => {
          draft.error = 'Select date';
        });
      }
    }

    setFormValidity(valid);
  }, [inputsData, passengers, date]);

  // Submit handler

  const submitHandler = () => {
    console.log('submit');
  };

  return (
    <MainContainer>
      <Grid>
        <Row>
          <Column>
            <Route length={inputsData.length} />
          </Column>
          <Column $grow $extraMarginRight>
            {inputsData.map((data, index) => (
              <Row key={index}>
                <ComboBox
                  label={data.label}
                  value={data.value}
                  onChange={(value) => inputChangeHandler(index, value)}
                  onClear={() => inputClearHandler(index)}
                  error={data.error}
                  onError={(error) => inputErrorHandler(index, error)}
                  removable={index > 1}
                  onRemove={() => removeDestinationHandler(index)}
                  autocomplete
                />
              </Row>
            ))}
          </Column>
          <Column>
            <Row>
              <CounterInput
                label={passengers.label}
                value={passengers.value}
                onChange={counterInputChangeHandler}
                max={16}
                error={passengers.error}
              />
            </Row>
            <Row>
              <DatepickerInput
                label={date.label}
                value={date.value}
                onChange={datepickerInputChangeHandler}
                error={date.error}
              />
            </Row>
          </Column>
        </Row>
        <Row>
          <Column>
            <CrossButton onClick={addDestinationHandler}>Add destination</CrossButton>
          </Column>
          <Column $grow>
            <TextButton onClick={addDestinationHandler}>Add destination</TextButton>
          </Column>
        </Row>
        <Row $extraMargin>
          <Button disabled={!formValid} onClick={submitHandler}>
            Submit
          </Button>
        </Row>
      </Grid>
    </MainContainer>
  );
}
