import React from 'react'
import { PlayerScore } from './PlayerScore'

export const HighScoreTable = ({name, scores, descending, descendingOrder, ascendingOrder}) => {
    
    return (
        <div className="highScoreTable" key={name}>
            <h2>High Scores: {name}</h2>
            <div className="playerScores">
                {
                    scores.sort(descending ? descendingOrder : ascendingOrder).map(score => {
                        const {n,s} = score

                        return <PlayerScore n={n} s={s} />
                    })
                }
            </div>
      </div>
    )
}
