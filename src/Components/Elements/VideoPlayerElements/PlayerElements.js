import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container = styled.div`
    width:190vh;
    height:calc (auto + 20px);
    margin: 120px auto;
    display: flex;
    justify-content:space-between;
    
`

export const VideoWrapper = styled.div`
    width:60%;
    height:600px;
    position:absolute;
    display:flex;
    flex-direction:column;
    @media (max-width:1024px){
        width: 80%;
    }
    @media (max-width:768px){
        width: 100%;
    }

`

export const UserInfoWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    margin-top:30px;
`   
export const VideoInfoBlock = styled.div`
    width:80%;
    margin:2px;
    color:red !important;

`

export const VideoEventBlock = styled.div`
    width : 20%;
    margin-left:2px;
    margin-top:30px;
    display:flex;
    justify-content:space-evenly
    
`
export const VideoTitle = styled.h3`
    font-size:20px;
    padding:10px;
    color:black;
`

export const VideoViewsNumber = styled.h6`
    font-size:12px;
    padding-left:10px;
    color:#5e6061;
`

export const ProfileBlock = styled.div`
    width:100%;
    height:auto;
    display:flex;
    background-color:#0054ba;
   
`



export const ProfileImgWrapper = styled.div`
    width:70px;
    height:70px;
    border-radius:50%;
    margin:17px;
    display:flex;
    
`

export const ProfileImg = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    background:cover;
    border-radius:50%;

`

export const ProfileBtn = styled.button`
    width:120px;
    height:50px;
    text-align:center;
    margin-top:25px;
    background-color:white;
    position:absolute;
    right:5%;
    border-radius:5px;

    &:hover{
        background-color:white;
    }

`
export const VideoDescription = styled.div`
     width:100%;
    height:auto;
    display:flex;
    padding:30px
`

export const SidebarWrapper = styled.aside`
    width: 30%;
    height:90vh;
    
    margin-left: 20px;
    display:flex;
    flex-direction:column;
    position:absolute;
    right:20px;
    margin-bottom:70px;
    overflow:auto;
    
`
export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:10px
` 

export const Thumb = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    background:cover;
`
export const ThumbWrapper = styled.div`
    width:50%;
    height:120px;
    background:white;
    margin: 20px
`

export const CommentSection = styled.div`
    width:100%;
    height:40px;
    display:flex;
    background-color:blue;
    display:flex
`