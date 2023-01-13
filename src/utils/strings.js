import moment from "moment";

export const CONTACT_US = "Contact Us";
export const FULL_NAME = "Full Name";
export const EMAIL = "Email";
export const DOB = "Date Of Birth";
export const SUBMIT = "Submit";
export const FIELD_ERROR = "Fill all fields";
export const EMAIL_ERROR = "Enter valid email address";
export const NAME_EXAMPLE = "eg. John";
export const EMAIL_EXAMPLE = "example@gamil.com";
export const MIN_DATE = "1960-01-01";
export const MAX_DATE = moment().format("YYYY-MM-DD");
export const DOB_TITLE = "Select your Date of birth";
export const CANCEL = "Cancel";
export const DOB_EXAMPLE = "00-00-0000";
export const CLOSE = "Close";
export const USER_TITLE = "User Details";

//Validations
export const ALPHABET_ONLY = /^[a-zA-Z]+$/
export const EMAIL_VALIDATION = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/