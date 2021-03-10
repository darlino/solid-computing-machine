import React, { Component } from "react";
import styled, { css } from "styled-components";
import {Box} from '@chakra-ui/react'
import logo from "../assets/images/59-595914_facebook-cover-photos-retro.jpg"
import luffy from "../assets/images/luffy-lavez-vous-les-mains.jpg"
import thumb from "../assets/images/nba-live-mobile-17651-2.jpg"
function Profile(props) {
  return (
    <Box w="100vh" p={20} mt={4}>
      <RectStackStack>
        <RectStack>
          <Rect>
            <Image
              src={logo}
            ></Image>
          </Rect>
          <Image2
            src={luffy}
          ></Image2>
        </RectStack>
        <Rect2>
          <Subscribe>Subscribe</Subscribe>
        </Rect2>
        <LuffyDeWano>Luffy De Wano</LuffyDeWano>
        <LoremIpsum>2k Subcribers</LoremIpsum>
      </RectStackStack>
      <Rect3>
        <Videos>Videos</Videos>
        <Rect4Stack>
          <Rect4>
            <LoremIpsum3>NBA Live will come out soon</LoremIpsum3>
            <LoremIpsum4>8k views</LoremIpsum4>
          </Rect4>
          <Image3>
            <Rect5Stack>
              <Rect5></Rect5>
              <LoremIpsum2>5 : 30</LoremIpsum2>
            </Rect5Stack>
          </Image3>
        </Rect4Stack>
      </Rect3>
    </Box>
  );
}

const Rect = styled.div`
  top: 0px;
  left: 0px;
  width: 1478px;
  height: 333px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
`;

const Image = styled.img`
  width: 1478px;
  height: 100%;
  object-fit: cover;
`;

const Image2 = styled.img`
  top: 247px;
  left: 38px;
  width: 200px;
  height: 200px;
  position: absolute;
  object-fit: cover;
`;

const RectStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1478px;
  height: 447px;
  position: absolute;
`;

const Rect2 = styled.div`
  top: 355px;
  left: 1201px;
  width: 177px;
  height: 42px;
  position: absolute;
  background-color: rgba(5,61,126,1);
  border-radius: 1px;
  flex-direction: column;
  display: flex;
`;

const Subscribe = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 35px;
  width: 138px;
  text-align: center;
  font-size: 18px;
  margin-top: 7px;
  margin-left: 19px;
`;

const LuffyDeWano = styled.span`
  font-family: Alata;
  top: 347px;
  left: 263px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  height: 44px;
  width: 314px;
  font-size: 20px;
`;

const LoremIpsum = styled.span`
  font-family: Alata;
  top: 391px;
  left: 263px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 36px;
  width: 321px;
`;

const RectStackStack = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Rect3 = styled.div`
  width: 1340px;
  height: 514px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  margin-top: 31px;
  margin-left: 38px;
  position: absolute;
  top:500px
`;

const Videos = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 46px;
  width: 303px;
  font-size: 25px;
  margin-top: 12px;
  margin-left: 47px;
`;

const Rect4 = styled.div`
  top: 0px;
  left: 0px;
  width: 376px;
  height: 286px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum3 = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 33px;
  width: 364px;
  font-size: 18px;
  margin-top: 206px;
  margin-left: 6px;
`;

const LoremIpsum4 = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,6,6,1);
  height: 36px;
  width: 263px;
  font-size: 16px;
  margin-left: 6px;
`;

const Image3 = styled.div`
  top: 0px;
  left: 6px;
  width: 374px;
  height: 200px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${thumb});
  background-size: cover;
`;

const Rect5 = styled.div`
  top: 0px;
  left: 0px;
  width: 73px;
  height: 29px;
  position: absolute;
  background-color: rgba(0,0,0,1);
  opacity: 0.63;
`;

const LoremIpsum2 = styled.span`
  font-family: Alata;
  top: 6px;
  left: 19px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 23px;
  width: 69px;
`;

const Rect5Stack = styled.div`
  width: 88px;
  height: 29px;
  margin-top: 160px;
  margin-left: 264px;
  position: relative;
`;

const Rect4Stack = styled.div`
  width: 380px;
  height: 286px;
  margin-top: 10px;
  margin-left: 27px;
  position: relative;
`;

export default Profile;
