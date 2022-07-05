import { SearchProps } from "types";

const SearchBar = (props: SearchProps) => {
  const { handleChangeKey } = props;

  const handleChange = (evt: any) => {
    handleChangeKey(evt.target.value);
  };

  return (
    <>
      <form>
        <input type="search" placeholder="Search" onChange={handleChange} />
      </form>
    </>
  );
};

export default SearchBar;
