import React from 'react';
import staticData from '../constants/staticData';
import TeamDisplay from './TeamDisplay.jsx';
import DropDown from './DropDown.jsx';

const { allData } = staticData;
const teamNameArr = Object.keys(allData);
// USE THIS ^^^ ALSO TO CREATE DROPDOWN MENUS

// console.log('teamNameArr', teamNameArr);

export default function TeamDisplayContainer() {
  return (
    <div>
        <DropDown teams={teamNameArr} />
        <div className="teams">
            {teamNameArr.map((team, i) => {
                if (i < teamNameArr.length -33) return (
                    <TeamDisplay
                        key={`${teamNameArr[i]}Display`}
                        data={allData[teamNameArr[i]]}
                    />
                )
            })}
        </div>
    </div>
  )
};
