import React from 'react';
import Index from './Card'
import { Wrap , WrapItem} from '@chakra-ui/react';
import {users} from '../../assets/gistfile1'
import {Link} from 'react-router-dom'



export const App = () => {
    
    console.log(users)
    return (
        
        <Wrap spacing="100px">
            {
                users.map((e) =>(
                    <Link to="/profile">
                    <WrapItem>
                        <Index img={e.actor.avatar_url} username={e.repo.name} subs={e.id}/>
                    </WrapItem>
                    </Link>
                ))
            }    
        </Wrap>
    );
};

