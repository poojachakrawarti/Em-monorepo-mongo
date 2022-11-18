export function titleCase(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
export const Roles = {
  SUPER_ADMIN: `Super Admin`,
  ADMIN: `Admin`,
  EMPLOYEE: `Employee`
};
export const RegEx = {
  EMAIL_REGEX: /[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+/,
  PWD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^.&*-]).{8,}$/,
  IN_PHONE_NUMBER: /^(?:91)[0-9]{9}$/ /* 911234567890 */,
  NAME_REGEX: /^[a-zA-Z. ]*$/
};
export const ResponseMessage = {
  LOGGED_IN: `Welcome! You're logged in`,
  NO_RECORDS_FOUND: `No record found`,
  ACCESS_TOKEN_GENERATED: `Access token generated`,
  LOG_OUT_SUCCESS: `Logged out successfully`,
  QUERY_SUCCESS: `Query success`,
  COMPANY_UPDATE: `Company details updated successfully`,
  USER_UPDATE: `User details updated successfully`,
  API_KEY: 'API key is updated successfully',
  COMPANY: `Company created`,
  USER: `User added`,
  PWD_UPDATE: `Password updated successfully`
};
export const ErrorMessage = {
  VALID_FIELD_REQUIRED: (field: string) =>
    `Please enter valid ${field.toLowerCase()}`,
  COMPANY_UPDATE_FAILED: `Failed to update company details`,
  USER_UPDATE_FAILED: `Failed to update user details`,
  STATUS_UPDATE_FAILED: `Failed to update status`,
  DOMAIN_SELECTED: `Domain is already selected`,
  NO_RECORD_FOUND: `No records found`,
  SMS_SEND_FAILED: `Failed to send SMS`,
  ENTER_VALID_NAME: `Please enter valid name`,
  ACCESS_DENIED: `Access denied! Please contact admin`,
  PASSWORD_NOT_MATCHED: `Password didn't match! Please try again.`,
  ERROR_SENDING_OTP: `Error while sending OTP`,
  CREDENTIALS_NOT_MATCHED: `Your credentials doesn't match our records. Please contact admin for more details`,
  COMPANY_NOT_MATCHED: `Invalid Company`,
  TOKEN_EXPIRE: `Token expired`,
  LINK_EXPIRED: `This link is expired!`,
  TOKEN_EXIST: `Token exists`,
  TOKEN_NOT_EXIST: `Token not exist`,
  SOMETHING_WENT_WRONG: `Something went wrong`,
  TOO_MANY_REQUESTS: `Too Many Requests. Please try after a minute!`,
  RECORD_ALREADY_EXIST: `Record already exist`,
  UNAUTHORIZED_ACCESS: `Unauthorized Access`,
  PWD_RESET: `Password reset successful`,
  ANOTHER_EMAIL: `Email already exists. Please try with other!`,
  INVALID_EMAIL: `Invalid email`,
  EXISTING_EMAIL: `User with same email already exists!`,
  EXISTING_IMISID: `User with same IMIS ID already exists!`,
  EXISTING_COMPANY: `Company with same domain already exists. Please use different domain!`,
  COMPANY_DEACTIVE: `User with given details company is not active`,
  USER_NOT_ACTIVE: `User with given details is not active`,
  USER_SAME_DETAILS: `User with given details not found`,
  PWD_RESET_LINK: `Password reset link sent to your registered mail`,
  NOT_ALLOWED_TO_LOGIN: 'You are not allowed to login to this company',
  EXISTING_DOMAIN: `Company with same domain already exists. Please use different domain!`,
  COMPANY_STATUS: `Company is deactivated`,
  COMPANY_DEACTIVATE:
    'Your company is deactivated. Please contact admin and try again later.',
  ACCOUNT_DEACTIVATE:
    'Your account is deactivated. Please contact admin and try again later.',
  SET_PWD:
    'Please set your password using the link shared over email and try again.'
};
export const DtoMessage = {
  MIN_LENGTH: (field: string, value: number | string) =>
    `${titleCase(field)} must be at least ${value} characters`,
  MAX_LENGTH: (field: string, value: number | string) =>
    `${titleCase(field)} must not exceed ${value} characters`,
  FIELD_REQUIRED: (field: string) => `${titleCase(field)} is required`
};
