import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import * as MoviesApi from '../../services/MoviesApi';
import Loading from './components/Loader';
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));


export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null)
  const { movieId } = useParams()
  const {url, path} = useRouteMatch()
  useEffect(() => {
    MoviesApi.fetchFilmInfo(movieId).then(setMovie)
  }, [movieId])
  
    return (
        <>
            {movie && (<>
                <h2>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie.title" />
                <p>{movie.overview}</p>
            </>)
            }

            <h3>Additional information</h3>
            <ul>
                <li>
                    {<NavLink to={`${url}/cast`}>Cast</NavLink>}
                </li>
       
                <li>
                    {<NavLink to={`${url}/reviews`}>Reviews</NavLink>}
                </li>
          
            </ul>
            <Suspense fallback={<Loading/>}>
                <Route exact path={`${path}/cast`}>
                    <Cast />
                </Route>
                <Route exact path={`${path}/reviews`}>
                    <Reviews />
                </Route>
            </Suspense>
        </>
    );
 }