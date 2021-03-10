import React from "react";
import styled from "styled-components";

function Index(props) {
  return (
    <Rect>
      <EllipseStack>
        <svg
          viewBox="0 0 131.43 133.44"
          style={{
            top: 14,
            left: 15,
            width: 131,
            height: 133,
            position: "absolute"
          }}
        >
          <ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={66}
            cy={67}
            rx={66}
            ry={67}
          ></ellipse>
        </svg>
        <Image src={props.img}></Image>
      </EllipseStack>
      <DarlinoStack>
        <Darlino>{props.username}</Darlino>
        <LoremIpsum>{`${props.subs} Subscribers`}</LoremIpsum>
      </DarlinoStack>
      <Rect4>
        <Rect3>View</Rect3>
      </Rect4>
    </Rect>
  );
}

const Rect = styled.div`
  width: 281px;
  height: 384px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  transition: transform .2s;
  box-shadow:1px 1px 10px black;

  &:hover {
    transform:scale(1.1)
  }
`;

const Image = styled.img`
  top: 0px;
  width: 162px;
  height: 161px;
  position: absolute;
  border-radius: 100px;
  left: 0px;
  object-fit: cover;
`;

const EllipseStack = styled.div`
  width: 162px;
  height: 161px;
  margin-top: 14px;
  margin-left: 60px;
  position: relative;
`;

const Darlino = styled.span`
  font-family: Alata;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 59px;
  width: 251px;
  text-align: center;
  font-size: 25px;
`;

const LoremIpsum = styled.span`
  font-family: Alata;
  top: 50px;
  left: 31px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,0,0,1);
  height: 30px;
  width: 177px;
  text-align: center;
  font-size: 16px;
`;

const DarlinoStack = styled.div`
  width: 251px;
  height: 80px;
  margin-top: 42px;
  margin-left: 21px;
  position: relative;
`;

const Rect4 = styled.div`
  width: 168px;
  height: 34px;
  background-color: rgba(74,144,226,1);
  border-radius: 8px;
  flex-direction: column;
  margin-top: 23px;
  margin-left: 56px;
  display: flex;
  
`;

const Rect3 = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,246,246,1);
  height: 12px;
  width: 147px;
  text-align: center;
  font-size: 15px;
  margin-top: 5px;
  margin-left: 11px;
`;

export default Index;
