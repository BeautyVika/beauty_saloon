import React from 'react';
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <StyledTitle>Салон красоты «Delote-Beauty» на Крестовском</StyledTitle>
        </StyledMain>

    );
};
const StyledMain = styled.div`
  height: 268px;
  width: 599px;
  margin-top: 360px;
  margin-left: 480px;
`
const StyledTitle = styled.h1`
  font-size: 72px;
  color: #fff;
  font-weight: 700;
  font-family: Garamond;
  text-align: center;
  line-height: 120%;
`
