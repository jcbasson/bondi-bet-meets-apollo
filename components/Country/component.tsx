import * as React from 'react';
import styled from 'styled-components';
import { People } from '../People';

export const CountryInfo: React.FC<any> = ({name, flagPicUrl, YearsOfExistence, people}) => {

    return <CountryInfoContainer>
        <label>{name}</label>
        <People people={people}></People>
    </CountryInfoContainer>
}

const CountryInfoContainer = styled.div`
    display: flex;
    widht: 100%;
`