import React, { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'
import { getGames, deleteGame } from "./GameManager.js"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])
    const history = useHistory()
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
        <button onClick={()=>history.push('games/create')}>Register New Game</button>
        <ul>
        {
                games.map(game => {
                    return <li key={`game--${game.id}`} className="game">
                        <Link to={`games/${game.id}`}>{game.title}</Link>
                </li>
            })
        }
        </ul>
    </article>

    </>
    )
    }