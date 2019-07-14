import gql from 'graphql-tag';

export const PersonalInfoFragment = {
  person: gql`
    fragment PersonalInfo on Person {
      id
      name
      age
      gender
    }
  `,
};