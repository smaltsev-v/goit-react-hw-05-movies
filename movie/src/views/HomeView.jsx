import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as MoviesApi from '../services/MoviesApi'

import s from './HomeView.module.css';


export default function HomeView() {

    const [movies, setMovies] = useState(null)

    useEffect(() => {

        MoviesApi.fetchTrends().then(setMovies)

    }, [])
  
    return (
        <main className={s.main}>
            <h1 className={s.title}>Trends</h1>
            <ul className={s.moviesList}>
                {movies && movies.map(movies =>
                    <li className={s.moviesItem} key={movies.id}>
                        <Link to={`/movies/${movies.id}`}>{movies.title || movies.name} </Link>
                    </li>)}

            </ul>
        </main>
    );
}