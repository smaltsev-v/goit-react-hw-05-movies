import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as MoviesApi from '../../services/MoviesApi';
import {  toast } from 'react-toastify';


export default function Cast() {
  const [reviews, setReviews] = useState(null)
  const { movieId } = useParams()
  useEffect(() => {
    MoviesApi.fetchReviews(movieId).then(setReviews)
    
  }, [movieId])
  
  return (
    <>
      <ul>
        {reviews && reviews.map(review => <li key={review.id}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </li>)}

      </ul>

      {reviews && reviews.length <1 && toast.error("No any reviews about this movie")}
    
    </>

    
  );
}