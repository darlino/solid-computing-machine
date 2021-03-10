import React from 'react'
import ReactDOM from 'react-dom'
import {Home} from './Elements/Home/Index'
import {Channels} from './Pages/Channels'
import {DefaultPage} from './Pages/DefautlPage'
import { ChakraProvider } from "@chakra-ui/react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {VideoPlayer} from '../Components/Pages/VideoPlayer/VideoPlayer'
import {ProfilePage} from '../Components/Pages/UserChannel/Index'


function Main () {
    
    return (
        <Router>
            <ChakraProvider>
            <Home/>
                <Switch>
                    <Route exact path="/">
                        <DefaultPage/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/channels">
                        <Channels/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/player">
                        <VideoPlayer/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/profile">
                        <ProfilePage/>
                    </Route>
                </Switch>
            </ChakraProvider>
        </Router>
        
    )
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
