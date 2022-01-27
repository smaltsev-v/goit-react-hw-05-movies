import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Appbar from "./components/AppBar/AppBar";
import "./App.css";
import { ToastContainer } from 'react-toastify';

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

      <Suspense fallback={<h1>Loading</h1>}>
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
