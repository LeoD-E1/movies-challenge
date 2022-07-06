import { SearchProps } from "types";
import "./styles/searchBar.css";

const SearchBar = (props: SearchProps) => {
  const { handleChangeKey } = props;

  const handleChange = (evt: any) => {
    handleChangeKey(evt.target.value);
  };

  return (
    <>
      <input
        onChange={handleChange}
        type="search"
        className="input-search"
        placeholder="Type to Search..."
      />
    </>
  );
};

export default SearchBar;
