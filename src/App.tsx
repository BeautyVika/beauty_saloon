import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import styled from "styled-components";
import backImg from './assets/img/background.webp'
import {Icon} from "components/icon/Icon";
import React from "react";
import {MessagePage} from "layout/sections/messagePage/MessagePage";
import {FlexWrapper} from "styles/FlexWrapper";

function App() {
    return (
        <div>
            <MainContainer>
                <FlexWrapper direction='column'>
                    <Header/>
                    <Main/>

                    <StyledIcon>
                        <Icon iconId='group'/>
                        <StyledText>Прокрутите вниз</StyledText>
                    </StyledIcon>
                </FlexWrapper>
            </MainContainer>


            <SecondaryContainer>
                <FlexWrapper direction='column' justify='center' align='center'>
                    <MessagePage/>
                </FlexWrapper>

            </SecondaryContainer>

        </div>
    );
}

export default App;

const MainContainer = styled.div`
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
const SecondaryContainer = styled.div`
  background-color: #111;
  width: 100%;
  height: 4955px;
`