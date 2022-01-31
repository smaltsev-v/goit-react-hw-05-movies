import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Appbar from "./components/AppBar/AppBar";
import Loading from './components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";


const HomeView = lazy(() =>
  import("./views/HomeView" )
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage" 
  )
);

function App() {
  return (
    <div className="App">
      <Appbar />

      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3700} position="bottom-center" />
    </div>
  );
}

export default App;
