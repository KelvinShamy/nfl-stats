import React from 'react';

export default function TeamDisplay({data}) {
    return (
        <div>
            <h2>{data.Standings.Tm}</h2>
            <div>
                <h3>Record: {data.Standings.W}-{data.Standings.L}</h3>
                <h4>Offense</h4>
                <div>Yds/Game: {data["Offense Per Game"].Yds}</div>
                <div>Passing/Game: {data["Offense Per Game"].Passing.Yds}</div>
                <div>Rushing/Game: {data["Offense Per Game"].Rushing.Yds}</div>
                <h4>Defense</h4>
                <div>Yds/Game: {data["Defense Per Game"].Yds}</div>
                <div>Passing/Game: {data["Defense Per Game"].Passing.Yds}</div>
                <div>Rushing/Game: {data["Defense Per Game"].Rushing.Yds}</div>
            </div>
        </div>
    )
};
