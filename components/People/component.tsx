import * as React from 'react';
import _ from 'Lodash';
import { PeopleTypes } from './types';
import { PersonalInfo }  from '../PersonalInfo';

export const People: React.FC<PeopleTypes.UI.IPeople> = ({ people }) => {

    return _.isEmpty(people)? <div>Zimbabwe</div>: people.map(({id,...rest}) => <PersonalInfo key={id} id={id} />)
}