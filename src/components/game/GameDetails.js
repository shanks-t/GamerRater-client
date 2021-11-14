import React, { useEffect, useState } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { getGame, addRating } from "./GameManager.js"

export const GameDetails = (props) => {
    const [game, setGameState] = useState({})
    const [ rating, setRating ] = useState(0)
    const  { gameId } = useParams()

    useEffect(() => {
        getGame(gameId).then(data => setGameState(data))
    }, [])

    useEffect(() => {
        console.log('game', game)
        console.log('id', gameId)
    }, [game]);

    const getRatingsState = (event) => {
        const newRating = event.target.value
        setRating(newRating)
    }

    const submitRating = (event) => {
        event.preventDefault()
        
        addRating(gameId, rating)
    }
    return (
        <article className="games">
            {
                    <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.designer}</div>
                        <div className="game__year">released in {game.year_released}</div>
                        <div className="game__payTime">play time {game.play_time} hours</div>
                        <div className="game__age">age recommendation {game.age_recommendation} years old</div>
                        {
                            game?.categories?.map(cat => (
                                <div className='categories'>categories: {cat.label}</div>
                            ))
                        }
                        {
                            game?.reviews?.map(review => (
                                <div className='review'>reviews: <Link to={`reviews/${review.id}`}>{review.title}</Link></div>
                            ))
                        }
                        <Link to={`${game.id}/review`}>Review Game</Link> <br></br>
                        <Link to={`games/edit/${game.id}`}>Edit Game</Link>
                        <div>
                            <input type='range' min='1' max='10' onChange={(event) => getRatingsState(event)}></input>
                            <p>Rating: {rating}</p>
                            <button onClick={(event) => {
                                submitRating(event)
                            }}>Submit Rating for {game.title}</button>
                        </div>
                    </section>
            }
        </article>
    )
}