import React from 'react';
import styles from '../App.scss'

export default function TeamDisplay({data}) {
    return (
        <div>
            <h2>{data.Standings.Tm}</h2>
            <div className={styles.flexRow}>
                <div>W: {data.Standings.W}</div>
                <div>L: {data.Standings.L}</div>
            </div>
        </div>
    )
};
