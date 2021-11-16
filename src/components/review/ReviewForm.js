import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { saveReview } from "./ReviewManager"
import { getGame } from "../game/GameManager"


export const ReviewForm = () => {
    const [review, setReview] = useState({})
    const [ game, setGameState] = useState({})
    const history = useHistory()
    const { gameId } = useParams()
    const playerId = localStorage.getItem('lu_token')

    useEffect(() => {
        getGame(gameId).then(data => setGameState(data))
    }, [])

    const handleOnChange = (event) => {
        const copyReview = { ...review }
        copyReview[event.target.name] = event.target.value
        copyReview['gameId'] = parseInt(gameId)
        setReview(copyReview)
    }

    const submitReview = (event) => {
        event.preventDefault()

        saveReview(review).then(() => {
            history.push('/games')
        })
    }

    useEffect(() => {
        console.log('gameId', gameId)
        console.log('game', game)
        console.log('playerId', playerId)
    }, [game]);

    return (
        <>
        <h2>Review for {game.title}</h2>
        <form>
            <div>
                <label>Title</label><br></br>
                <input type="text" name="title"  onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Review</label><br></br>
                <textarea type="textarea" rows="5" cols="80" name="gameReview"  onChange={(event) => handleOnChange(event)}></textarea>
            </div>

            {/* <div>
                <label>Rating</label>
                <input type="number" name="gameRating"  onChange={(event) => handleOnChange(event)}></input>
            </div> */}

            <div>
                <button onClick={(event) => {
                        submitReview(event)
                        history.push(`games/${gameId}`)
                    }
                }>Save Game</button>
            </div>
        </form>
        </>
    )
}
