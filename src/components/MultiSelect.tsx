import React from 'react';
import Select from 'react-select';
import { styles } from 'react-select-bootstrap3';
import { style } from "./utils";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MultiSelect = () => {

    return (
      <div style={style}>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          isDisabled={false}
        isLoading={true}
        isClearable={true}
        isSearchable={true}
          name="color"
          options={options}
          isMulti
          styles={styles}
          onChange={(data)=> {console.log(data)}}
        />
        
      </div>
    );
  
}

export default MultiSelect;