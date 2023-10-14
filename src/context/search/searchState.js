import { useState } from "react";
import searchContext from "./searchContext";

const SearchState = (props) => {
    const [globalSearchTerm, setGlobalSearchTerm] = useState("")
    const [searchFromPage, setSearchFromPage] = useState("")
    return (
        <searchContext.Provider value={{ globalSearchTerm, setGlobalSearchTerm, searchFromPage, setSearchFromPage }}>
            {props.children}
        </searchContext.Provider>
    );
};

export default SearchState;
