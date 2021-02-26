import React,{useState} from 'react'
import {Navbar} from './UI/Navigation/Index'
import {MainSideBar} from './UI/Sidebar/Index'
import {Sidebar,MinimalSideBar} from './UI/Sidebar/Index'
import {Carrousel} from './UI/Carrousel/Index'


export const Main = () => {
    let Button_is_opened ;
    const [isOpen, setIsOpen] = useState(false)

    const toogler = () =>{
        setIsOpen(!isOpen)
    }

    if(!isOpen){
        Button_is_opened = <Sidebar/>
    }
    else{
        Button_is_opened = <MinimalSideBar/>
    }
    return (
        <div>
            <Navbar toogle={toogler}/>
            <MainSideBar component ={Button_is_opened}/>
            <Carrousel/>
        </div>
    )
}
