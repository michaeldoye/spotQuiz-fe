export interface LoginFormValidationSchema {
  username: LoginFormFieldValidator;
  password: LoginFormFieldValidator;
}

interface LoginFormFieldValidator {
  required: boolean;
  validator: LoginValidator;
}

interface LoginValidator {
  regEx: RegExp;
  error: string;
}
