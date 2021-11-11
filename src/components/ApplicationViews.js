import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameForm } from "./game/GameForm"
import { GameDetails } from "./game/GameDetails"

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
        </main>
    </>
}
