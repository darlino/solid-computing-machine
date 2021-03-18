import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


export const Button  = styled(Link)`
    width: 150px;
    height: 40px;
    background-color:${props => props.bg};
    margin-top:10px;
    text-align: center;
    border-radius:5px;
    margin-top:3px;
    margin-left:50px;
    border: 1px solid ${props => props.border};
    color: ${props => props.color};
    
    &:hover{
        background-color:${props => props.bghover};
        color:${props => props.colorhover}
    }

`