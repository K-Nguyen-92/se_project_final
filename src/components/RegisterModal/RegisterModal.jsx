import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { use } from "react";

const RegisterModal = ({
  isOpen,
  handleRegistration,
  handleCloseButton,
  isLoading,
  onAltButtonClick,
}) => {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    handleRegistration(values);
    setIsRegistrationSuccessful(true);
  }
  useEffect(() => {
    if (isOpen) {
      resetForm();
      setIsRegistrationSuccessful(false);
    }
  }, [isOpen]);
  const registrationForm = (
    <>
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="register-email"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="register-password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label htmlFor="username" className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="register-username"
          placeholder="Enter your username"
          name="username"
          value={values.username}
          onChange={handleChange}
          required={true}
        />
      </label>
    </>
  );
  return (
    <ModalWithForm
      title={
        isRegistrationSuccessful
          ? "Registration successfully completed!"
          : "Sign Up"
      }
      mainButtonText={isLoading ? "Signing Up..." : "Sign Up"}
      altButtonText={isRegistrationSuccessful ? "Sign in" : "or Sign In"}
      handleCloseButton={handleCloseButton}
      handleRegistration={handleRegistration}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onAltButtonClick={onAltButtonClick}
      isRegistrationSuccessful={isRegistrationSuccessful}
    >
      {!isRegistrationSuccessful && registrationForm}
      {/* <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="text"
          className="modal__input"
          id="register-email"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="register-password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label htmlFor="username" className="modal__label">
        Username{" "}
        <input
          type="text"
          className="modal__input"
          id="register-username"
          placeholder="Enter your username"
          name="username"
          value={values.username}
          onChange={handleChange}
          required={true}
        />
      </label> */}
    </ModalWithForm>
  );
};

export default RegisterModal;
