import React from "react";
import Select from "react-select";
import { style, getBootstrapStyles } from "./utils";

const options = [
  {
    value: "Abe",
    label: "Abe",
    customAbbreviation: (
      <span>
        <svg><circle cx="50" cy="50" r="5" fill="blue" /></svg>
      </span>
    ),
  },
  {
    value: "John",
    label: "John",
    customAbbreviation: (
      <span>
        <svg> <circle cx="50" cy="50" r="5" fill="red" /></svg>
      </span>
    ),
  },
  {
    value: "Dustin",
    label: "Dustin",
    customAbbreviation: (
       <span><svg><circle cx="50" cy="50" r="5" fill="green" /></svg></span> 
    ),
  },
];

const formatOptionLabel = ({ value, label, customAbbreviation }) => (
  <div style={{ display: "grid", gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: '25px' }}>
    <div>{label}</div>
    <div
      style={{
        marginLeft: "10px",
        color: "#ccc"
      }}
    >
      {customAbbreviation}
    </div>
  </div>
);

const SingleSelect = () => {
  return (
    <div style={style}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isSearchable={true}
        name="color"
        formatOptionLabel={formatOptionLabel}
        options={options}
        onChange={data => {
          console.log(data);
        }}
        isMulti
        styles={getBootstrapStyles()}
      />
    </div>
  );
};

export default SingleSelect;
