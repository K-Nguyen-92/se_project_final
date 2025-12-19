import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

const LoginModal = ({
  isOpen,
  handleLogin,
  handleCloseButton,
  isLoading,
  onAltButtonClick,
  errorMessage,
}) => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);
  return (
    <ModalWithForm
      title="Sign In"
      mainButtonText={isLoading ? "Signing In..." : "Sign In"}
      altButtonText="or Sign Up"
      handleCloseButton={handleCloseButton}
      handleLogin={handleLogin}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onAltButtonClick={onAltButtonClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="login-password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required={true}
        />
      </label>
      {errorMessage && <p className="modal__error-message">{errorMessage}</p>}
    </ModalWithForm>
  );
};

export default LoginModal;
