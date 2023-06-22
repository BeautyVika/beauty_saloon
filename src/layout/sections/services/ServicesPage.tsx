import React from 'react'
import hairdresser from '../../../assets/img/hairdresser.webp'
import nails from '../../../assets/img/nails.webp'
import pedicure from '../../../assets/img/pedicure.webp'
import cosmetology from '../../../assets/img/cosmetology.webp'
import body from '../../../assets/img/body.webp'
import make_up from '../../../assets/img/make_up.webp'
import styled from "styled-components"
import {Service} from "layout/sections/services/Service"

export const ServicesPage = () => {

    const services = [
        {id: '1', title: 'Парикмахерские услуги', src: hairdresser},
        {id: '2', title: 'Маникюр', src: nails},
        {id: '3', title: 'Педикюр', src: pedicure},
        {id: '4', title: 'Косметология', src: cosmetology},
        {id: '5', title: 'Эстетист по телу', src: body},
        {id: '6', title: 'Визаж', src: make_up},
    ]

    return (
        <StyledServicesPage>
            {services.map(s => {
                return <Service key={s.id} title={s.title} src={s.src}/>
            })}
        </StyledServicesPage>
    );
};
const StyledServicesPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 95px 100px 0;
`
