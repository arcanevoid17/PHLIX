import React, { useEffect } from 'react'

function Movie() {

    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=03f09f74c9042133e59d51b62b339ac8")
        .then(res => res.json())
        .then(json => console.log(json))
    }

    useEffect(()=>{
     getMovie()
    },[])

    return (
        <div>
       <Movie/>
        </div>
    )
}

export default Movie