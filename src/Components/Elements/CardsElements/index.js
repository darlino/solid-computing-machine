import React from "react";
import styled from "styled-components";
import './index.css'


function CardE(props) {
  return (
    <Container width={props.w} height={props.h}>
      <ImageStackStack>
        <ImageStack>
          <Image main_image={props.img}>
            <Group2>
              <Rect>
                <Group>
                  <Group3>
                    <Live>LIVE</Live>
                  </Group3>
                </Group>
              </Rect>
            </Group2>
            <Rect2Stack>
              <Rect2></Rect2>
              <LoremIpsum>{`${props.spectators} spectators`} </LoremIpsum>
            </Rect2Stack>
          </Image>
          <Image2
            src={props.profile_image}
          ></Image2>
        </ImageStack>
        <LoremIpsum2Stack>
          <LoremIpsum2>{props.title}</LoremIpsum2>
          <Rect4>
            <Darlino>{props.name}</Darlino>
          </Rect4>
        </LoremIpsum2Stack>
      </ImageStackStack>
      <Rect5Stack>
        <Rect5></Rect5>
        <Franccais>{props.language}</Franccais>
      </Rect5Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  flex-direction: column;
`;

const Image = styled.div`
  top: 0px;
  left: 0px;
  width: 375px;
  height: 256px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${props => props.main_image});
  background-size: cover;
  transition: transform .1s;


  &:hover{
    webkit-filter: blur(2px); /* Chrome, Safari, Opera */
    filter: blur(2px);
    transform:scale(1.05)
  }
  
`;

const Group2 = styled.div`
  width: 57px;
  height: 26px;
  flex-direction: column;
  display: flex;
  margin-top: 44px;
  margin-left: 9px;
`;

const Rect = styled.div`
  width: 57px;
  height: 26px;
  background-color: rgba(255,0,0,1);
  border-width: 1px;
  border-color: rgba(255,255,255,1);
  border-radius: 13px;
  border-style: solid;
  border:none;
  margin-bottom:30px;
  position:relative;
  bottom:30px;
  flex-direction: column;
  display: flex;
`;

const Group = styled.div`
  width: 26px;
  height: 19px;
  flex-direction: column;
  display: flex;
  margin-top: 3px;
  margin-left: 15px;
`;

const Group3 = styled.div`
  width: 26px;
  height: 19px;
  flex-direction: column;
  display: flex;
  font-size:11px;
  border:none
`;

const Live = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
`;

const Rect2 = styled.div`
  top: 0px;
  left: 0px;
  width: 140px;
  height: 32px;
  position: absolute;
  background-color: rgba(0,0,0,1);
  opacity: 0.69;
`;

const LoremIpsum = styled.span`
  font-family: Alata;
  top: 6px;
  left: 24px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 20px;
  width: 140px;
  text-align: left;
`;

const Rect2Stack = styled.div`
  width: 164px;
  height: 32px;
  margin-top: 129px;
  margin-left: 5px;
  position: relative;
`;

const Image2 = styled.img`
  top: 260px;
  left: 9px;
  width: 51px;
  height: 55px;
  position: absolute;
  border-radius: 50px;
  object-fit: cover;
`;

const ImageStack = styled.div`
  top: 0px;
  left: 0px;
  width: 375px;
  height: 305px;
  position: absolute;
`;

const LoremIpsum2 = styled.span`
  font-family: Alata;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 49px;
  width: 276px;
  font-size: 20px;
`;

const Rect4 = styled.div`
  top: 33px;
  left: 0px;
  width: 215px;
  height: 31px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
`;

const Darlino = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 700;
  color: rgba(74,144,226,1);
  height: 31px;
  width: 197px;
  font-size: 16px;
`;

const LoremIpsum2Stack = styled.div`
  top: 256px;
  left: 89px;
  width: 276px;
  height: 64px;
  position: absolute;
`;

const ImageStackStack = styled.div`
  width: 375px;
  height: 320px;
  position: relative;
`;

const Rect5 = styled.div`
  top: 0px;
  left: 0px;
  width: 91px;
  height: 26px;
  position: absolute;
  background-color: rgba(74,144,226,1);
  border-radius: 33px;
`;

const Franccais = styled.span`
  font-family: Alata;
  top: 0.7px;
  position: absolute;
  left:20px;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 18px;
  width: 115px;
`;

const Rect5Stack = styled.div`
  width: 127px;
  height: 26px;
  margin-top: 7px;
  margin-left: 82px;
  position: relative;
`;

export default CardE;
