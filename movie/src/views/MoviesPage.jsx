import { useState, useEffect, useRef } from 'react';
import { ImSearch } from 'react-icons/im';
import { Link, useRouteMatch } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import propTypes from 'prop-types'; 
import * as MoviesApi from '../services/MoviesApi'
import s from './MoviesPage.module.css';

function SearchBar() {
    const { url } = useRouteMatch()
    
    const [inputText, setInputText] = useState('');
    
    const [query, setQuery] = useState('')
    
    const [movies, setMovies] = useState(null)
    
    const isFirstRender = useRef(true);
    
  
    useEffect(() => {
        if (isFirstRender) {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
        }
    
        MoviesApi.fetchFilmByQuery(query).then(setMovies)
    }, [query])
  
  
    const handleQuerySearch = e => {
        setInputText(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
      toast.error('Введите запрос.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      
      return;
    }

        setQuery(inputText)

        setInputText('');
    };

    return (
        <>
            <form className={s.form} onSubmit={handleSubmit}>
                <button onClick={handleSubmit} type="submit"  className={s.btn} >
                    <span className={s.label}>Search</span>
                    <ImSearch />
                </button>

                <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies..."
                    value={inputText}
                    onChange={handleQuerySearch}
                />
            </form>
            {movies && movies.map(movies => <li key={movies.id}>
                <Link to={`${url}/${movies.id}`}>{movies.title || movies.name} </Link>
            </li>)}
        </>
    );
}



export default SearchBar;
