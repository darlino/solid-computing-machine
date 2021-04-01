import React from 'react';
import Index from './Card'
import { Wrap , WrapItem,Text} from '@chakra-ui/react';
import {videosAPI} from '../../assets/dummyData'
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'


export const App = (props) => {
    const link = "https://robohash.org/"
    console.log(videosAPI)

    return (
        
        <Wrap spacing={props.s}>
            <Zoom left>
                
            {
                videosAPI.map((e) =>(
                    <Link to={`/profile?owner=${e.owner.username}`}>
                    <WrapItem>
                        <Index img={e.owner.profile_image} username={e.owner.username}/>
                    </WrapItem>
                    </Link>
                ))
            }   
           
            </Zoom>
             
        </Wrap>
    );
};

