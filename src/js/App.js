import React from 'react';
import { render } from 'react-dom';
import '../../public/normalize.css';
import '../../public/style.css';

class App extends React.Component {
    render() {
        return (
            <div>test</div>
        );
    }
}

render(<App />, document.getElementById('app'));
