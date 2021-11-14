import React, { useEffect, useState } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { getGame, addRating, deleteGame} from "./GameManager.js"

export const GameDetails = (props) => {
    const [game, setGameState] = useState({})
    const [ ratingObj, setRatingObj ] = useState({
        "rating": 0
    })
    const  { gameId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getGame(gameId).then(data => setGameState(data))
    }, [])

    useEffect(() => {
        console.log('game', game)
        console.log('id', gameId)
        console.log('rating', ratingObj)
        console.log('line', doLineBreaks)
    }, [game, ratingObj]);

    const getRatingsState = (event) => {
        const copyRating = { ...ratingObj }
        copyRating['rating'] = event.target.value
        setRatingObj(copyRating)
    }
    
    const submitRating = (event) => {
        event.preventDefault()
        
        addRating(gameId, ratingObj)
    }
    const handleDelete = (event) => {
        event.preventDefault()
        
        deleteGame(gameId).then(()=> {
            history.push('/games')})
    }

    const doLineBreaks = (num) => {
        let tag = <br></br>
        let tagArr = []
        while(num > 0) {
            tagArr.push(tag)
            num--
        }
        return tagArr
    }
    return (
        <article className="games">
            {
                    <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.designer}</div>
                        <div className="game__year">released in {game.year_released}</div>
                        <div className="game__payTime">play time {game.play_time} hours</div>
                        <div className="game__age">age recommendation {game.age_recommendation} years old</div>
                        <div className="game__rating">Metascore: {game.average_rating}</div>
                        {
                            game?.categories?.map(cat => (
                                <div className='categories'>categories: {cat.label}</div>
                            ))
                        }
                        <div>Reviews:</div>
                        {
                            game?.reviews?.map(review => (
                                <div className='review'> <Link to={`reviews/${review.id}`}>{review.title}</Link></div>
                            ))
                        }
                        <br></br>
                        <Link to={`${game.id}/review`}>Review Game</Link> <br></br>
                        <Link to={`edit/${game.id}`}>Edit Game</Link>
                        <div>
                            <input type='range' min='1' max='10' defaultValue='10' onChange={(event) => getRatingsState(event)}></input>
                            {ratingObj.rating ?
                                <p>Rating: {ratingObj.rating}</p>
                                : <p>Rating: Rate this game</p>
                            }
                            <button onClick={(event) => {
                                submitRating(event)
                            }}>Submit Rating for {game.title}</button>
                            {doLineBreaks(2)}
                            <button onClick={(event) => {
                                handleDelete(event)
                            }}>Delete Game</button>
                        </div>
                    </section>
            }
        </article>
    )
}