import React from 'react';
import styled from "styled-components";
import {Menu} from "../menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Menu/>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  padding-top: 30px;
  height: 70px;
`