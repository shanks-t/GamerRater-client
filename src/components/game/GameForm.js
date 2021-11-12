import React, { useEffect, useState } from "react"
import { createGame, getCategories } from "./GameManager.js"
import { useHistory } from "react-router-dom"

export const GameForm = () => {
    const [categories, setCategories] = useState([])
    const [game, setGameState] = useState({})
    const history = useHistory()

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

    const saveGame = (event) => {
        event.preventDefault()

        createGame(game).then(() => {
            history.push('/games')
        })
    }

    return (
        <form>
            <div>
                <label>Title</label>
                <input type="text" name="title"  onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Designer</label>
                <input type="text" name="designer"  onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Year Released</label>
                <input type="number" name="yearReleased"  onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Play Time</label>
                <input type="number" name="playTime"  onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <label>Age Recommendation</label>
                <input type="number" name="ageRecommendation"  onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <label>Categories</label>
                <select type="number" name="categoryId"  onChange={(event) => handleOnChange(event)}>
                    <option value='0'>Select a Category</option>
                    {
                        categories.map(category => <option value={category.id}>{category.label}</option>)
                    }
                </select>
            </div>
            <div>
                <button onClick={(event) => {
                        saveGame(event)
                    }
                }>Save Game</button>
            </div>
        </form>
    )
}
