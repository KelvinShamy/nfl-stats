import React from 'react'

export default function DropDown({teams}) {
  return (
    <select>
        {teams.map((name) => {
            return <option value={name} key={`${name}OptionKey`}>{name}</option>
        })}
    </select>
  )
};
