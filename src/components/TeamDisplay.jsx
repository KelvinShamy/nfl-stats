import React, { useState } from 'react';

export default function TeamDisplay({data}) {
    const [ showOffense, setShowOffense ] = useState(false);
    const [ showDefense, setShowDefense ] = useState(false);

    return (
        <div>
            <h1>{data.Standings.Tm} ({data.Standings.W}-{data.Standings.L})</h1>
            {/* <div className="flex-row"> */}
            <div className="showButtons">
                <button
                    onClick={() => setShowOffense(!showOffense)}
                >
                    Offense
                </button>
                <button
                    onClick={() => setShowDefense(!showDefense)}
                >
                    Defense
                </button>
            </div>
                {showOffense && <div>
                    <h2>Offense</h2>
                    <div>Pts/Game: {data["Scoring"]["Pts/G"]}</div>
                    <div>Yds/Game: {data["Offense Per Game"].Yds}</div>
                    <h4>Passing Offense</h4>
                    <div>Passing/Game: {data["Offense Per Game"].Passing.Yds}</div>
                    <div>Net Yds/Att: {data["Offense"].Passing["NY/A"]}</div>
                    <h4>Rushing Offense</h4>
                    <div>Rushing/Game: {data["Offense Per Game"].Rushing.Yds}</div>
                    <div>Yds/Att: {data["Offense"].Rushing["Y/A"]}</div>
                </div>}
                {showDefense && <div>
                    <h2>Defense</h2>
                    <div>Pts/Game: {data["Scoring Defense Per Game"].Pts}</div>
                    <div>Yds/Game: {data["Defense Per Game"].Yds}</div>
                    <h4>Passing Defense</h4>
                    <div>Passing/Game: {data["Defense Per Game"].Passing.Yds}</div>
                    <div>Net Yds/Att: {data["Defense"].Passing["NY/A"]}</div>
                    <h4>Passing Defense</h4>
                    <div>Rushing/Game: {data["Defense Per Game"].Rushing.Yds}</div>
                    <div>Net Yds/Att: {data["Defense"].Rushing["Y/A"]}</div>
                </div>}
            {/* </div> */}
        </div>
    )
};
