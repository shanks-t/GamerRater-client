export const saveReview = (review) => {
    return fetch("http://localhost:8000/reviews", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
}

export const getReview = (reviewId) => {
    return fetch(`http://localhost:8000/reviews/${reviewId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getPlayer = (playerId) => {
    return fetch(`http://localhost:8000/players/${playerId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

