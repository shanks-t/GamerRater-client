import React, { useEffect, useState } from "react"
import {  useParams } from 'react-router-dom'
import { getReview, getPlayer } from "./ReviewManager.js"

export const Review = (props) => {
    const [ review, setReview ] = useState({})
    const [ player, setPlayer ] = useState({})
    const { reviewId } = useParams()
    
    
    useEffect(() => {
        getReview(reviewId).then(data => setReview(data))
        getPlayer(review.player_id).then(data => setPlayer(data))
    }, []);

    useEffect(() => {
        console.log('review', review)
        console.log('id', reviewId)
        getPlayer(review.player_id).then(data => setPlayer(data))
    }, [review]);
    return (
    <>
        
        <article className="games">
            <h3>{review.title}</h3>
            <p>{review.game_review}</p>
            <p>{player.name}</p>
            
        </article>

    </>
    )
    }