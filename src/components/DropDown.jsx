import React from 'react'

export default function DropDown({teams, handleChange}) {

    return (
        <select
            className="font"
            onChange={(e) => handleChange(e.target.value)}
        >
            <option value={null}>select</option>
            {teams.map((name) => {
            return <option value={name} key={`${name}DropdownKey`}>{name}</option>
            })}
        </select>
    );
};
