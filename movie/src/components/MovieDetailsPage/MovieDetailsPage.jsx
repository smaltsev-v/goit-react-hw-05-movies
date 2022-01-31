import { useState, useEffect, lazy, Suspense } from "react";
import {
    useParams,
    useRouteMatch,
    Route,
    NavLink,
    useHistory,
    useLocation,
} from "react-router-dom";
import * as MoviesApi from '../../services/MoviesApi';
import Loading from '../Loader';
import defaultimg from '../../img/default.jpg';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        MoviesApi.fetchFilmInfo(movieId).then(setMovie)
    }, [movieId]);

    const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };
    

  
    return (
        <>
            <button onClick={handleGoBack} type="button" className={s.btn}>
         Go back
      </button>
            {movie && (<>
                <h2>{movie.title}</h2>
                <img src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultimg
                        }
                    alt="movie.title" />
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