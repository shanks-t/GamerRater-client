import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameForm } from "./game/GameForm"
import { GameDetails } from "./game/GameDetails"
import { ReviewForm } from "./review/ReviewForm"
import { Review } from "./review/Review"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <Route exact path="/games">
                <GameList />
            </Route>
            <Route exact path="/games/:gameId(\d+)">
                <GameDetails/>
            </Route>
            <Route exact path="/games/create">
                <GameForm/>
            </Route>
            <Route exact path="/games/:gameId(\d+)/review">
                <ReviewForm/>
            </Route>
            <Route exact path="/games/reviews/:reviewId(\d+)">
                <Review />
            </Route>
        </main>
    </>
}
