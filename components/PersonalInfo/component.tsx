import styled from 'styled-components';

export const Person = ({name, age, gender}) => {

    return <PersonalInfoContainer>
        <PersonalInfo>
            { name }
        </PersonalInfo>
        <PersonalInfo>
            { age }
        </PersonalInfo>
        <PersonalInfo>
            { gender }
        </PersonalInfo>
    </PersonalInfoContainer>
}

const PersonalInfoContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    background-color: ${({name}) => name === 'Bernardus Johannes Visagie Van Schalkwyk Boraine'? 'gold': 'green'}`;

const PersonalInfo = styled.label`
    font-size: 12em,
    color: salmon-pink;