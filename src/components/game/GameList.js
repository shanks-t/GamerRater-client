import React, { useEffect, useState } from "react"
import { getGames, deleteGame } from "./GameManager.js"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])

    const gameFetcher = () => {
        getGames(). then(gameData => setGames(gameData))
    }
    
    useEffect(() => {
        gameFetcher()
    }, []);

    useEffect(() => {
        console.log('games', games)
    }, [games]);
    return (
        <>
        
        <article className="games">
        
        {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <h3 className="game__title">{game.title} by {game.designer}</h3>
                        <ul>
                        <li className="game__players">released: {game.year_released}</li>
                        <li className="game__skillLevel">age recommendation: {game.age_recommendation}</li>
                        <li className="game__skillLevel">play time: {game.play_time}</li>
                        </ul>
                </section>
            })
        }
    </article>

    </>
    )
    }