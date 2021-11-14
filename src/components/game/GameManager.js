export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const updateGameFetch = (game) => {
    return fetch(`http://localhost:8000/games/${game.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })

}

export const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })

}

export const addRating = (gameId, rating) => {
    return fetch(`http://localhost:8000/games/${gameId}/rate_game`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rating)
    })

}

export const deleteGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${ gameId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
}