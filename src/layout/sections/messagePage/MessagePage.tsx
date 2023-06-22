import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";

export const MessagePage = () => {
    return (
        <StyledMessage>
            <Icon iconId='quotes' width='80px' height='64px' viewBox="0 0 80 64"/>

            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet.
                Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit
                elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque
                quam tortor, malesuada iaculis.
                Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra
                rutrum.Fames ultrices condimentum tortor nec penatibus. Velit imperdiet
                sapien fringilla vestibulum sit fames.</div>
        </StyledMessage>
    );
};
const StyledMessage = styled.div`
  width: 856px;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  div{
    margin-top: 60px;
    color: #fff;
    font-size: 27px;
    font-family: Cormorant Garamond;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
  }
`