import React from "react";

export const SearchBox = ({ placeholder, searchHandelar }) => (
    <input
        className="form-control"
        type="search"
        placeholder={placeholder}
        onChange={searchHandelar}
        name="search"
    />
)