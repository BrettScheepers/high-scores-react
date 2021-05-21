import React from 'react'

export const PlayerScore = ({n,s}) => {
    return (
        <div className="playerScore" key={n}>
            <div className="name">
                <h4>{n}</h4>
            </div>
            <div className="score">
                <h3>{s}</h3>
            </div>
        </div>
    )
}
