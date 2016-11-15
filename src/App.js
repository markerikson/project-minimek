import React, { Component } from 'react';
import {Header} from "semantic-ui-react";


import './App.css';

import SampleComponent from "./SampleComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header inverted as="h1">Project Mini-Mek</Header>
                </div>
                <SampleComponent />
            </div>
        );
    }
}

export default App;
