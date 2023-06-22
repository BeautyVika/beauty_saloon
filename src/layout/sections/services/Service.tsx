import React from 'react';
import styled from "styled-components";

type ServicePropsType = {
    title: string
    src: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <StyledImage src={props.src} alt='img'/>
            <Text>{props.title}</Text>
        </StyledService>
    );
};
const StyledService = styled.div``
const StyledImage = styled.img`
  height: 300px;
  width: 396px;
`
const Text = styled.h3`
  margin-top: 30px;
  margin-bottom: 60px;
  color: #FFF;
  font-size: 30px;
  font-family: Garamond;
  line-height: 120%;
`