import React, { useEffect, useState } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { getGame } from "./GameManager.js"

export const GameDetails = (props) => {
    const [ cats, setCats ] = useState([])
    const [game, setGameState] = useState({})
    const  { gameId } = useParams()

    useEffect(() => {
        getGame(gameId).then(data => setGameState(data))
    }, [])

    useEffect(() => {
        console.log('game', game)
        getGame(gameId).then(data => setCats(data.categories))
    }, [game]);

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
                            game?.reviews?.map(item => (
                                <div className='review'>reviews: <Link>{item.title}</Link></div>
                            ))
                        }
                        <Link to={`${game.id}/review`}>Review Game</Link> <br></br>
                        <Link to={`games/edit/${game.id}`}>Edit Game</Link>
                    </section>
            }
        </article>
    )
}