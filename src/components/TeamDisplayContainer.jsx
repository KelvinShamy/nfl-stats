import React, { useState } from 'react';
import TeamDisplay from './TeamDisplay.jsx';
import DropDown from './DropDown.jsx';
import staticData from '../constants/staticData';

const { allData } = staticData;
const teamNamesArr = [];

for (let i = 0; i < 32; i++) {
    teamNamesArr.push(Object.keys(allData)[i]);
};

teamNamesArr.sort();

export default function TeamDisplayContainer() {
    const [ teamOne, setTeamOne ] = useState(null);
    const [ teamTwo, setTeamTwo ] = useState(null);

    const handleTeamOneChange = (team) => {
        setTeamOne(team);
    };

    const handleTeamTwoChange = (team) => {
        setTeamTwo(team);
    };

    return (
        <div>
            <div className="teams">
                <div>
                    <DropDown 
                        teams={teamNamesArr}
                        value={teamOne}
                        handleChange={handleTeamOneChange}
                    />
                    {teamOne && <TeamDisplay
                        data={allData[teamOne]}
                    />}
                </div>
                <div>
                    <DropDown 
                        teams={teamNamesArr}
                        value={teamTwo}
                        handleChange={handleTeamTwoChange}
                    />
                    {teamTwo && <TeamDisplay
                        data={allData[teamTwo]}
                    />}
                </div>
            </div>
        </div>
    )
};
