import React, { Component } from 'react';
import {
    Header,
    Container,
} from "semantic-ui-react";

import TabBar from "./components/TabBar";


import './App.css';

class App extends Component {
    render() {
        const tabs = [
            {name : "unitInfo", label : "Unit Info (test)"},
            {name : "pilots", label : "Pilots"},
            {name : "mechs", label : "Mechs"},
            {name : "unitOrganization", label : "Unit Organization"}
        ];

        return (
            <div className="App">
                <div className="App-header">
                    <Header inverted as="h1">Project Mini-Mek</Header>
                </div>
                <Container>
                    <TabBar tabs={tabs} />
                </Container>
            </div>
        );
    }
}

export default App;
