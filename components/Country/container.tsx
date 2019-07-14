import { compose, graphql, withApollo } from 'react-apollo';
import { PersonalInfoFragment } from '../PersonalInfo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { CountryInfo } from './component';
import _ from 'lodash';


export const COUNTRY_QUERY = gql`
query CountryQuery($name: String!) {
  country(name: $name) {
    name
    flagPicUrl
    YearsOfExistence
    people {
      ...PersonalInfo
    }
  }
}
${PersonalInfoFragment.person}
`;


export const CountryGraphql = graphql(
    COUNTRY_QUERY    
  ,{
  options: (props) => ({
    variables: {
      name: props.name,
      pollInterval: 10000,
    },
  }),
});

const mapStateToProps = (state, ownProps) => {

    //Mix and match data from graphql requqest and what's in the store
    const country = _.get(ownProps, 'data.country');
   
    return {
       ...country
    }
  }
  

export const Country = compose(
    withApollo,
    CountryGraphql,
    connect(mapStateToProps),
  )(CountryInfo);