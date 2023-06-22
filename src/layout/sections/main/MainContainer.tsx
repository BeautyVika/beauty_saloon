import React from 'react';
import {FlexWrapper} from "styles/FlexWrapper";
import {Header} from "layout/header/Header";
import {MainTitle} from "layout/sections/main/MainTitle";
import {Icon} from "components/icon/Icon";
import styled from "styled-components";
import backImg from "assets/img/background.webp";

export const MainContainer = () => {
    return (
        <StyledMainContainer>
            <FlexWrapper direction='column'>
                <Header/>
                <MainTitle/>

                <StyledIcon>
                    <Icon iconId='group'/>
                    <StyledText>Прокрутите вниз</StyledText>
                </StyledIcon>

            </FlexWrapper>
        </StyledMainContainer>
    );
};

const StyledMainContainer = styled.div`
  width: 100%;
  height: 1038px;
  background-image: url(${backImg});
`
const StyledIcon = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledText = styled.span`
  color: #fff;
  font-size: 18px;
  font-family: Cormorant Garamond, serif;
  font-weight: 700;
  line-height: 140%;
`
