import "./SearchForm.css";
import { useForm } from "../../hooks/useForm";
import { defaultUser } from "../../utils/constant";

const SearchForm = ({ handleQuery }) => {
  const { values, handleChange, resetForm } = useForm({
    query: "",
  });
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  function handleSubmit(e) {
    e.preventDefault();
    handleQuery(values.query);
    defaultUser.keyword.push(capitalizeFirstLetter(values.query));
    resetForm();
  }
  return (
    <section className="search-form">
      <h2 className="search-form__title">What's going on in the world?</h2>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-form__input"
          placeholder="Enter topic"
          id="search-query"
          name="query"
          value={values.query}
          onChange={handleChange}
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
