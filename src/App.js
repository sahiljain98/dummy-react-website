import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/style.css';

import NavBar from './components/navbar';
import Home from './components/home';
// import Portfolio from './components/portfolio';
import Support from './components/support';

import PortfolioContainer from './components/portfolioContainer';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar title={"NavBar"} />
                    <Route exact path="/" render={() => <Home title={"Oscars Winners"} />} />
                    <Route path="/portfolio" render={() => <PortfolioContainer title={"Portfolio"} />} />
                    <Route path="/support" render={() => <Support title={"support"} />} />
                </div>
            </BrowserRouter>
        )
    }
}