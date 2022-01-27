import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as MoviesApi from '../../services/MoviesApi';
import s from './Cast.module.css';


export default function Cast() {
    const { movieId } = useParams()

  const [cast, setCast] = useState(null)
  
  useEffect(() => {
      MoviesApi.fetchCredits(movieId).then(setCast)   
    
  }, [movieId])

  
    return (
        <>
            <ul className={s.cast}>
                {cast && cast.map(actor =>
                    <li key={actor.id} className={s.item}>
                        <h4 className={s.name}> {actor.name}</h4>
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} className={s.photo} />
                        <p>Role: {actor.character}</p>
                    </li>)}

            </ul>
        </>
    );
 }