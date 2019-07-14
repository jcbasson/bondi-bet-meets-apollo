import _ from 'lodash';
import { PersonalInfoTypes } from './types';

export const getIsSpecial: PersonalInfoTypes.Utils.GetIsSpecial = (state, id) => _.get(state, `people.byId.${id}.isSpecial`, false);