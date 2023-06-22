import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href=''>Главная</a></li>
                <li><a href=''>Мастера</a></li>
                <li><a href=''>Косметика</a></li>
                <Logo />
                <li><a href=''>Наши работы</a></li>
                <li><a href=''>Цены</a></li>
                <li><a href=''>Контакты</a></li>
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
  ul{
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    list-style-type: none;
  }
  a{
    font-size: 18px;
    font-family: Cormorant Garamond;
    font-weight: 600;
    line-height: 130%;
    color: #fff;
    text-decoration: none;
  }
`
