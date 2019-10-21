import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MoviesCategory from './views/MoviesCategory.view';
import MovieDetail from './views/MovieDetail.view';
import Navigation from './components/Navigation';
import NotFound from './views/NotFound.view';

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route
                        path='/category/:categoryName'
                        exact
                        component={MoviesCategory}
                    />
                    <Route path='/movie/:id' exact component={MovieDetail} />
                    <Redirect path='/' exact to='category/upcoming' />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;