import React from "react";
import styled from "styled-components";
import './index.css'

function Index(props) {
  return (
    <Rect>
      <Image2
        src={props.img}
      ></Image2>
      <Darlino>{props.name}</Darlino>
      <Darlino3>{`${props.subs_num} subscribers`}</Darlino3>
    </Rect>
  );
}

const Rect = styled.div`
  width: 319px;
  height: auto;
  background-color: rgba(0,95,206,0.27);
  flex-direction: column;
  display: flex;
`;

const Image2 = styled.img`
  width: 135px;
  height: 100%;
  margin-top: 10px;
  border-radius:50%;
  margin-left: 92px;
  object-fit: contain;
`;

const Darlino = styled.span`
  font-family: 'Alata', sans-serif;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  height: 40px;
  width: 248px;
  text-align: center;
  font-size: 22px;
  margin-top: 1px;
  margin-left: 34px;
`;

const Darlino3 = styled.span`
  font-family: 'Alata', sans-serif;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,9,9,1);
  height: 40px;
  width: 248px;
  text-align: center;
  font-size: 15px;
  margin-top: 12px;
  margin-left: 34px;
`;

export default Index;
