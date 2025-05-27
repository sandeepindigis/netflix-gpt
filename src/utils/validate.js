const checkValidate = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(
    email
  );
  const isPassValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPassValid) return "Password is not valid";

  return null;
};

export default checkValidate;
