import { useContext,  } from "react";
import { AppContext } from "../context/AppContext";

const SearchForm = () => {
  const { setSearch, search } = useContext(AppContext);
 

  return (
    <div className="flex items-center gap-2  p-2 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search name/location"
        className="w-full p-2 outline-none rounded-md "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
     
    </div>
  );
};

export default SearchForm;
