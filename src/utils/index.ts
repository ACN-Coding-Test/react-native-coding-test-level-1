const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.com$/;
const nameRegex = /^[A-Za-z ]+$/; // /[a-zA-Z ]+/g; ///[A-Za-z ]/g;

const isNameValid = (value: string) => {
  let valid = nameRegex.test(value);

  return valid;
};

const isEmailValid = (value: string) => {
  let valid = emailRegex.test(value);

  return valid;
};

export {isEmailValid, isNameValid};
