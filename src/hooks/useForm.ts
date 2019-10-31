import { useCallback, useEffect, useState } from 'react';
import { isObject, isRegExp } from '../helpers';

export function useForm(
  stateSchema: any = {},
  validationSchema: any = {},
  callback: Function
) {
  const [state, setState] = useState(stateSchema);
  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setDisable(true);
  }, []);

  const validateState = useCallback(() => {
    return Object.keys(validationSchema).some((key: any) => {
      const isInputFieldRequired: boolean = validationSchema[key].required;
      const stateValue = state[key].value;
      const stateError = state[key].error;

      return (isInputFieldRequired && !stateValue) || stateError;
    });
  }, [state, validationSchema]);

  useEffect(() => {
    if (isDirty) {
      setDisable(validateState());
    }
  }, [state, isDirty, validateState]);

  const handleOnChange = useCallback(
    event => {
      setIsDirty(true);

      const name = event.target.name;
      const value = event.target.value;

      let error = '';
      if (validationSchema[name] && validationSchema[name].required) {
        if (!value) {
          error = 'This is required field.';
        }
      }

      if (validationSchema[name] && isObject(validationSchema[name].validator)) {
        if (!isRegExp(validationSchema[name].validator.regEx)) {
          throw new Error("Your RegExp value isn't a valid RegExp Object");
        }

        if (value && !validationSchema[name].validator.regEx.test(value)) {
          error = validationSchema[name].validator.error;
        }
      }

      setState((prevState: any) => ({
        ...prevState,
        [name]: { value, error }
      }));
    },
    [validationSchema]
  );

  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault();

      if (!validateState()) {
        callback(state);
      }
    },
    [callback, state, validateState]
  );

  return { handleOnChange, handleOnSubmit, state, disable };
}
