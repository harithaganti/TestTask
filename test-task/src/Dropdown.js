import React, { useState } from "react";
import data from "../src/api/countries.json";
import CreatableSelect from "react-select/creatable";
function Dropdown(props) {
  const [countries, setCountries] = useState(data);
  const options = countries
    .slice(0, props.noOfItems)
    .map((i) => ({ value: i.label, label: i.value }));

  const addAndSelectHandler = (inputValue) => {
    let check = options.filter((i) => i.label === inputValue);
    console.log(check.length);
  };

  const handleChange = (newValue) => {
    console.log("Haritha");
  };

  return (
    <div>
      <CreatableSelect
        isSearchable
        options={options}
        onChange={handleChange}
        allowCreateWhileLoading={props.Privilege}
        onInputChange={addAndSelectHandler}
        formatCreateLabel={() => {
          if (props.Privilege === true) {
            return "Add New";
          }
        }}
      />
    </div>
  );
}

export default Dropdown;
