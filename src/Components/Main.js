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
import {Player} from '../Components/Pages/VideoPlayer/Player'
import {ProfilePage} from '../Components/Pages/UserChannel/Index'
import { Login } from './Elements/Auth/Login'
import { Register } from './Elements/Auth/Register'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

function Main () {
   
    
    return (
        <Router>
            <ChakraProvider>
            <Home/>
                <Switch>
                    <Route exact path="/">
                        <DefaultPage />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/channels">
                        <Channels/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/player">
                        <Player />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/profile">
                        <ProfilePage/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/register">
                        <Register/>
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
