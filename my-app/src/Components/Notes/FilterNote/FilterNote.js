import React from 'react';

const FilterNote = (props) => {
    return (
        <select className='form-control' 
            onChange={(e) => props.onYearSelect(e.target.value)}
            value={props.initialYear}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2019">2019</option>
            <option value="2022">2022</option>
        </select>
    );
}

export default FilterNote;
