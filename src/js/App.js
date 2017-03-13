import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import '../../public/normalize.css';
import '../../public/style.css';

import Landing from './Landing';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="app">
                    <Route exactly pattern="/" component={Landing} />
                </div>
            </HashRouter>
        );
    }
}

render(<App />, document.getElementById('app'));
