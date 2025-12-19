import "./ModalWithForm.css";
import closeButton from "../../assets/close-button.svg";

function ModalWithForm({
  children,
  title,
  mainButtonText,
  altButtonText,
  isOpen,
  handleCloseButton,
  onAltButtonClick,
  onSubmit,
  isRegistrationSuccessful,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseButton}
        >
          <img src={closeButton} alt="close button" />
        </button>
        <form
          onSubmit={onSubmit}
          className={`modal__form && ${
            isRegistrationSuccessful && "modal__form-success"
          }`}
        >
          {children}
          {!isRegistrationSuccessful && (
            <button className="modal__submit-button" type="submit">
              {mainButtonText}
            </button>
          )}
          <button
            className={`modal__submit-button-alt ${
              isRegistrationSuccessful && "modal__submit-button-alt-success"
            }`}
            type="button"
            onClick={onAltButtonClick}
          >
            {altButtonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
