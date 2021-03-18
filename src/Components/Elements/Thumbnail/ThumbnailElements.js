import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width:90%;
    height:auto;
    padding-bottom:40px;
    margin-left:50px;
    margin-top:50px;
    display:flex;
    flex-wrap:wrap;
`
export const VideoThumbImg = styled.img`
    width:100%;
    height:100%;
    object-fit:stretch;
    background:stretch,
`

export const MainVideoThumb = styled.div`
    width:65%;
    height:500px;
    margin:40px;

`

export const ProfileImg = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    background:cover;
    border-radius:50%;

`

export const Button = styled.button`
    width:200px;
    height: 40px;
    background-color:#0560b5;
    border-radius:5px;
    color:white;
    text-align:center;
    margin:30px auto;

    &:hover{
        background-color:#056;
    }
`

export const SideInfo = styled.div`
    width:26%;
    height:500px;
    background-color:#295f78;
    margin-top:40px;
    margin-left:20px;
    justify-content:center;
    display:flex;
    flex-direction:column;
    padding:20px;
    color:white
`



export const VideoThumb = styled.div`
    width:30%;
    height:300px;
    margin-top:120px;
    margin-left:20px;
    background-image:url(${props => props.background})
    
`

export const ProfileBlock = styled.div`
    width:100%;
    height:100px;
    margin-bottom:14px;
    display:flex;
    padding-bottom:0px;
    

`

export const ProfileImage = styled.div`
    width:60px;
    height:60px;
    border-radius:50%;
    background:red;
    margin-left:5px;
    
`

export const VideoInfo = styled.div`
    width:70%;
    height:80px;
    
    margin-left:30px;
    padding-left:10px;
    padding-right:10px
`
export const VideoTitle = styled.h3`
    font-size:18px;
    color:black
`
export const ViewerCount = styled.div`
    width:120px;
    height: 30px;
    background:black;
    opacity:0.7;
    position:relative;
    padding-top:2px;
    letter-spacing:1px;
    bottom:40px;
    float:right;
    color:white;
    text-align:center;
    margin-right:20px;
`
export const VideoOwner = styled.h6`
    color:black;
    font-size:15px;
    font-weight:bold
`

export const VideoViews = styled.p`
    color:black;
    font-size:12px;
`
