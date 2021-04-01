import React,{useState} from 'react'
import {Container,VideoWrapper,UserInfoWrapper,VideoTitle,VideoViewsNumber,VideoInfoBlock
    ,VideoEventBlock,ProfileBlock,ProfileImgWrapper,ProfileImg,ProfileBtn,VideoDescription,
    SidebarWrapper,ThumbWrapper,Wrapper,Thumb,CommentSection
} from '../../Elements/VideoPlayerElements/PlayerElements'
import mvideo from './video.mp4'
import poster from './t.jpg'
import deku1 from './deku1.jpg'
import jj from './jj.jpg'
import {VideoPlayer} from '../../UI/VideoPlayerComponent/Index'
import deku from './deku.jpg'
import { VStack, Icon,Text,Heading,Box, HStack } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"
import { HiShare } from 'react-icons/hi'
import {Link} from 'react-router-dom'
export const Player = (props) => {

    const {mouf} = (props.location && props.location.state) || {}
    console.log(mouf)
    return (
        <Container style={{paddingLeft:"20px"}}>
            <VideoWrapper>
                <VideoPlayer src={mvideo} 
                poster={poster}/>
                <UserInfoWrapper>
                    <VideoInfoBlock>
                        <VideoTitle> Lorem papapapapa</VideoTitle>
                        <VideoViewsNumber> {` 1 views `} </VideoViewsNumber>
                    </VideoInfoBlock>
                    <VideoEventBlock>
                        <VStack spacing={0}>
                            <Icon as={AiFillHeart} color="#136991" style = {{ color:"#136991" ,fontSize:"30px"}}/>
                            <Text mb={12}> yo</Text>
                        </VStack>
                        <VStack spacing={0}>
                            <Icon as={HiShare} color="#136991" style = {{ color:"#136991" ,fontSize:"30px" }}/>
                            <Text mb={12}> yo</Text>
                        </VStack>
                    </VideoEventBlock>
                </UserInfoWrapper>

                <ProfileBlock>
                    <ProfileImgWrapper >
                        <ProfileImg src={deku}/>
                    </ProfileImgWrapper>
                    <VStack m={5} spacing={2}>
                        <Link to="/profile">
                            <Heading fontSize="20px" color="#fff"> Darlino </Heading>
                        </Link>
                        <Text color="#c3c5c7"> { `45k subscribers`} </Text>
                    </VStack>
                    <ProfileBtn float="right">Subscribe</ProfileBtn>
                </ProfileBlock>
                <VideoDescription>
                    <Wrapper spacing={4}>
                        <Heading fontSize="20px"> Description</Heading>
                        <Box w="100%" m={10}>
                            <Text>
                            You can also pass a function for the theme prop. This function will receive the parent theme, that is from another higher up the tree. This way themes themselves can be made contextual.
This example renders our above themed Button and a second one that uses a second ThemeProvider to invert the background and foreground colors. The function invertTheme receives the upper theme and creates a new one.
Y
                            </Text>
                        </Box>
                    </Wrapper>
                </VideoDescription>
                <CommentSection>
                    Yo tout le monde
                </CommentSection>
            </VideoWrapper>
            <SidebarWrapper>
            <Wrapper spacing={4} >
                <Link to='/player'>
                    <HStack spacing={2} >
                            <ThumbWrapper>
                                <Thumb src={jj}/>
                            </ThumbWrapper>
                            <Wrapper >
                                    <Box mb={5} w="170px">
                                        <Heading fontSize="18px"> Darling ithe franxx</Heading>
                                        <Text>Darlino</Text>
                                        <Text color="#292c2e">43k views</Text>
                                    </Box>
                            </Wrapper>
                    </HStack>
                </Link>
                <Link to='/player'>
                    <HStack spacing={2} >
                            <ThumbWrapper>
                                <Thumb src={jj}/>
                            </ThumbWrapper>
                            <Wrapper >
                                    <Box mb={5} w="170px">
                                        <Heading fontSize="18px"> Darling ithe franxx</Heading>
                                        <Text>Darlino</Text>
                                        <Text color="#292c2e">43k views</Text>
                                    </Box>
                            </Wrapper>
                    </HStack>
                </Link>
                <Link to='/player'>
                    <HStack spacing={2} >
                            <ThumbWrapper>
                                <Thumb src={jj}/>
                            </ThumbWrapper>
                            <Wrapper >
                                    <Box mb={5} w="170px">
                                        <Heading fontSize="18px"> Darling ithe franxx</Heading>
                                        <Text>Darlino</Text>
                                        <Text color="#292c2e">43k views</Text>
                                    </Box>
                            </Wrapper>
                    </HStack>
                </Link>
                <Link to='/player'>
                    <HStack spacing={2} >
                            <ThumbWrapper>
                                <Thumb src={jj}/>
                            </ThumbWrapper>
                            <Wrapper >
                                    <Box mb={5} w="170px">
                                        <Heading fontSize="18px"> Darling ithe franxx</Heading>
                                        <Text>Darlino</Text>
                                        <Text color="#292c2e">43k views</Text>
                                    </Box>
                            </Wrapper>
                    </HStack>
                </Link>
                <Link to='/player'>
                    <HStack spacing={2} >
                            <ThumbWrapper>
                                <Thumb src={jj}/>
                            </ThumbWrapper>
                            <Wrapper >
                                    <Box mb={5} w="170px">
                                        <Heading fontSize="18px"> Darling ithe franxx</Heading>
                                        <Text>Darlino</Text>
                                        <Text color="#292c2e">43k views</Text>
                                    </Box>
                            </Wrapper>
                    </HStack>
                </Link>
                <Link to='/player'>
                    <HStack spacing={2} >
                            <ThumbWrapper>
                                <Thumb src={jj}/>
                            </ThumbWrapper>
                            <Wrapper >
                                    <Box mb={5} w="170px">
                                        <Heading fontSize="18px"> Darling ithe franxx</Heading>
                                        <Text>Darlino</Text>
                                        <Text color="#292c2e">43k views</Text>
                                    </Box>
                            </Wrapper>
                    </HStack>
                </Link>
                
                    
                
            </Wrapper>
                
            </SidebarWrapper>
        </Container>
    )
}
