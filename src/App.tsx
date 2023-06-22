import './App.css';
import styled from "styled-components";
import React from "react";
import {MessagePage} from "layout/sections/messagePage/MessagePage";
import {FlexWrapper} from "styles/FlexWrapper";
import {MainContainer} from "layout/sections/main/MainContainer";
import {ServicesPage} from "layout/sections/services/ServicesPage";

function App() {
    return (
        <div>
            <MainContainer />

            <SecondaryContainer>
                <FlexWrapper direction='column' justify='center' align='center'>
                    <MessagePage/>
                    <ServicesPage/>
                </FlexWrapper>


            </SecondaryContainer>

        </div>
    );
}

export default App;

const SecondaryContainer = styled.div`
  background-color: #111;
  width: 100%;
  //width: 1920px;
  height: 4955px;
`