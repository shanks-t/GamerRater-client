import React, { useEffect, useState } from "react"
import { createGame, getCategories, updateGameFetch, getGame } from "./GameManager.js"
import { useHistory, useParams } from "react-router-dom"

export const GameForm = () => {
    const [categories, setCategories] = useState([])
    const [game, setGameState] = useState({})
    const history = useHistory()
    const { gameId } = useParams()

    useEffect(() => {
        getCategories().then(categoryData => setCategories(categoryData))
    }, []);

    useEffect(() => {
        console.log('categories', categories)
    }, [categories]);

    const handleOnChange = (event) => {
        const copyGame = { ...game }
        copyGame[event.target.name] = event.target.value
        setGameState(copyGame)
    }

    useEffect(() => {
        if (gameId) {
            getGame(gameId).then((gameData) => setGameState({
            ...gameData,
            title: gameData.title,
            designer: gameData.designer,
            yearReleased: gameData.year_released,
            playTime: gameData.play_time,
            ageRecommendation: gameData.age_recommendation,
            categoryId: gameData.category_id
            }))
        }
    }, [gameId])

    const saveGame = (event) => {
        event.preventDefault()

        createGame(game).then(() => {
            history.push('/games')
        })
    }

    const updateGame = (event) => {
        event.preventDefault()

        updateGameFetch(game).then(() => {
            history.push('/games')
        })
    }

    return (
        <form>
            <div>
                <label>Title</label>
                <input type="text" name="title"  value={game.title} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Designer</label>
                <input type="text" name="designer" value={game.designer} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Year Released</label>
                <input type="number" name="yearReleased" value={game.yearReleased} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Play Time</label>
                <input type="number" name="playTime" value={game.playTime} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <label>Age Recommendation</label>
                <input type="number" name="ageRecommendation" value={game.ageRecommendation} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <label>Categories</label>
                <select type="number" name="categoryId" value={game.categoryId} onChange={(event) => handleOnChange(event)}>
                    <option value='0'>Select a Category</option>
                    {
                        categories.map(category => <option value={category.id}>{category.label}</option>)
                    }
                </select>
            </div>
            <div>
                <button onClick={(event) => {
                    if (gameId) {
                        updateGame(event)
                    } else {
                        saveGame(event)
                    }}
                }>Save Game</button>
            </div>
        </form>
    )
}
