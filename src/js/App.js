import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../public/normalize.css';
import '../../public/style.css';

import Landing from './Landing';
import Search from './Search';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path="/" component={Landing} />
                    <Route path="/search" component={Search} />
                </div>
            </BrowserRouter>
        );
    }
}

render(<App />, document.getElementById('app'));
