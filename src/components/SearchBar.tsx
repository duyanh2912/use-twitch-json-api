import * as React from "react";
import {ChangeEvent} from "react";

interface SearchBarProps {
    onTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const SearchBar: React.SFC<SearchBarProps> = (props) => {
    return (
        <form>
            <input type="text" onChange={props.onTextChange} placeholder={props.placeholder}/>
        </form>
    );
};

export default SearchBar;