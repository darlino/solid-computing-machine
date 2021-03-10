import React, { Component } from "react";
import styled, { css } from "styled-components";
import {AiFillHeart} from "react-icons/ai";
import {FaShare} from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import profileV from './assets/images/Max-R_Headshot_(1).jpg'
import profileC from "./assets/images/images.jfif"
import miniature from './assets/images/4f36902b811695e8b10a649fc2f8af28.jpg'

export const VideoPlayer = (props) => {
  return (
    <Box p={20} mt={8}>
    <RectColumnRow>
      <RectColumn>
        <Rect></Rect>
        <Rect3>
          <LoremIpsumStackStackStack>
            <LoremIpsumStackStack>
              <LoremIpsumStack>
                <LoremIpsum>How to get away with murder</LoremIpsum>
                <AiFillHeart
                  name="heart"
                  style={{
                    top: 14,
                    left: 742,
                    position: "absolute",
                    color: "rgba(255,0,0,1)",
                    fontSize: 40,
                    height: 44,
                    width: 40
                  }}
                ></AiFillHeart>
                <FaShare
                  name="share-google"
                  style={{
                    top: 14,
                    left: 805,
                    position: "absolute",
                    color: "rgba(0,0,0,1)",
                    fontSize: 40,
                    height: 44,
                    width: 37
                  }}
                ></FaShare>
              </LoremIpsumStack>
              <LoremIpsum2Stack>
                <LoremIpsum2>24 0000 views</LoremIpsum2>
                <LoremIpsum3></LoremIpsum3>
              </LoremIpsum2Stack>
            </LoremIpsumStackStack>
            <LoremIpsum4>1k</LoremIpsum4>
          </LoremIpsumStackStackStack>
        </Rect3>
        <Rect2>
          <ImageRow>
            <Image
              src={profileV}
            ></Image>
            <JohnDoeColumn>
              <JohnDoe>John Doe</JohnDoe>
              <LoremIpsum5>8000 subs</LoremIpsum5>
            </JohnDoeColumn>
            <Rect4>
              <Subscribe>Subscribe</Subscribe>
            </Rect4>
          </ImageRow>
        </Rect2>
        <Rect5>
          <Rect6>
            <Image2Row>
              <Image2 src={profileC}></Image2>
              <JaneDoeColumn>
                <JaneDoe>Jane Doe</JaneDoe>
                <NotCool>Not Cool, Lorem ipsum bla bla bla.😒😒😒</NotCool>
              </JaneDoeColumn>
            </Image2Row>
          </Rect6>
        </Rect5>
      </RectColumn>
      <Rect8Stack>
        <Rect8></Rect8>
        <Rect7>
          <Image3Row>
            <Image3
              src={miniature}
            ></Image3>
            <StephaneColumn>
              <Stephane>Stéphane</Stephane>
              <LoremIpsum6>16M Views</LoremIpsum6>
            </StephaneColumn>
          </Image3Row>
        </Rect7>
        <KillKill>Kill Kill le match suprême</KillKill>
      </Rect8Stack>
    </RectColumnRow>
    </Box>
  );
}

const Rect = styled.div`
  width: 890px;
  height: 476px;
  background-image: radial-gradient(circle at 50% 50%,#E70B0B 0%, #EEEEEE 151%);
`;

const Rect3 = styled.div`
  width: 890px;
  height: 106px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-top: 26px;
`;

const LoremIpsum = styled.span`
  font-family: Alata;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  height: 36px;
  width: 845px;
  font-size: 20px;
`;

const LoremIpsumStack = styled.div`
  top: 0px;
  left: 0px;
  width: 845px;
  height: 58px;
  position: absolute;
`;

const LoremIpsum2 = styled.span`
  font-family: Alata;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(41,41,41,1);
  height: 28px;
  width: 229px;
  font-size: 15px;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  top: 9px;
  left: 114px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 12px;
  width: 281px;
`;

const LoremIpsum2Stack = styled.div`
  top: 54px;
  left: 0px;
  width: 395px;
  height: 28px;
  position: absolute;
`;

const LoremIpsumStackStack = styled.div`
  top: 0px;
  left: 0px;
  width: 845px;
  height: 82px;
  position: absolute;
`;

const LoremIpsum4 = styled.span`
  font-family: Alata;
  top: 58px;
  left: 734px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 14px;
  width: 55px;
  text-align: center;
`;

const LoremIpsumStackStackStack = styled.div`
  width: 845px;
  height: 82px;
  margin-top: 17px;
  margin-left: 11px;
  position: relative;
`;

const Rect2 = styled.div`
  width: 890px;
  height: 101px;
  background-color: rgba(255,255,255,1);
  border-width: 1px;
  border-color: #000000;
  flex-direction: column;
  display: flex;
  margin-top: 40px;
  border-style: solid;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const JohnDoe = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  height: 26px;
  width: 174px;
  font-size: 18px;
`;

const LoremIpsum5 = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(208,2,2,1);
  height: 22px;
  width: 180px;
  margin-top: 15px;
`;

const JohnDoeColumn = styled.div`
  width: 180px;
  flex-direction: column;
  display: flex;
  margin-left: 11px;
  margin-bottom: 7px;
`;

const Rect4 = styled.div`
  width: 189px;
  height: 35px;
  background-color: rgba(74,144,226,1);
  flex-direction: column;
  display: flex;
  margin-left: 379px;
  margin-top: 24px;
`;

const Subscribe = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 29px;
  width: 172px;
  text-align: center;
  font-size: 18px;
  margin-top: 3px;
  margin-left: 9px;
`;

const ImageRow = styled.div`
  height: 70px;
  flex-direction: row;
  display: flex;
  margin-top: 15px;
  margin-left: 27px;
  margin-right: 34px;
`;

const Rect5 = styled.div`
  width: 890px;
  height: 245px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-top: 32px;
`;

const Rect6 = styled.div`
  width: 867px;
  height: 196px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-top: 3px;
  margin-left: 11px;
`;

const Image2 = styled.img`
  width: 100%;
  height: 50px;
  border-radius: 100px;
  object-fit: contain;
`;

const JaneDoe = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 25px;
  width: 312px;
  font-size: 16px;
`;

const NotCool = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(49,49,49,1);
  height: 118px;
  width: 583px;
`;

const JaneDoeColumn = styled.div`
  width: 583px;
  flex-direction: column;
  display: flex;
  margin-left: 15px;
`;

const Image2Row = styled.div`
  height: 143px;
  flex-direction: row;
  display: flex;
  margin-top: 9px;
  margin-left: 8px;
  margin-right: 211px;
`;

const RectColumn = styled.div`
  width: 890px;
  flex-direction: column;
  display: flex;
`;

const Rect8 = styled.div`
  top: 11px;
  left: 7px;
  width: 444px;
  height: 207px;
  position: absolute;
  background-color: #E6E6E6;
`;

const Rect7 = styled.div`
  top: 0px;
  left: 0px;
  width: 458px;
  height: 1025px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
`;

const Image3 = styled.img`
  width: 100%;
  height: 146px;
  object-fit: contain;
`;

const Stephane = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 171px;
  margin-left:4px
`;

const LoremIpsum6 = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 24px;
  width: 144px;
  margin-top: 11px;
  margin-left:4px
`;

const StephaneColumn = styled.div`
  width: 171px;
  flex-direction: column;
  display: flex;
  margin-left: 13px;
  margin-top: 77px;
  margin-bottom: 7px;
  margin-left:4px
`;

const Image3Row = styled.div`
  height: 146px;
  flex-direction: row;
  display: flex;
  margin-top: 11px;
  margin-left: 7px;
  margin-right: 21px;
`;

const KillKill = styled.span`
  font-family: Alata;
  top: 11px;
  left: 266px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 77px;
  width: 194px;
  font-size: 18px;
  margin-left:4px
`;

const Rect8Stack = styled.div`
  width: 460px;
  height: 1025px;
  margin-left: 10px;
  position: relative;
`;

const RectColumnRow = styled.div`
  height: 1026px;
  flex-direction: row;
  display: flex;
  margin-right: -1px;
`;

export default VideoPlayer;
