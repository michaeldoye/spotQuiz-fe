import { LoginFormValidationSchema } from '../../../models/validation.model';

export const validationStateSchema: LoginFormValidationSchema = {
  username: {
    required: true,
    validator: {
      regEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // TODO: enum
      error: 'Invalid email address'
    }
  },
  password: {
    required: true,
    validator: {
      regEx: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      // TODO: enum
      error: 'Min 8 characters, at least 1 letter and 1 number'
    }
  }
};
