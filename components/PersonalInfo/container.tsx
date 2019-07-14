import { compose, graphql, withApollo } from 'react-apollo';
import { PersonalInfoFragment } from './fragments';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { Person } from './component';
import _ from 'lodash';
import { getIsSpecial } from './utils';


export const PERSONAL_INFO_QUERY = gql`
  query PersonalInfo($id: String!) {
    person(id: $id) {
        ...PersonalInfo
    }
  }
  ${PersonalInfoFragment.person}
`;

/*Here I set the query to be used to fetch the data either from the server or from cache if it already exists for the given id
  I provide the id of the of person I want to fetch, and the id is provided by props
  I also ask Apollo to poll for this person every 10 seconds
*/
export const PersonalInfoGraphql = graphql(
    PERSONAL_INFO_QUERY    
,{
  options: (props) => ({
    variables: {
      id: props.id,
      pollInterval: 10000,
    },
  }),
});


const mapStateToProps = (state, ownProps) => {
    /* 
        const state = {
            people{
                byId: {
                    ['SomePersonsId']: { isSpecial: true},
                    ['SomeOtherPersonsId']: {isSpecial: false}
                }
            }
        }
    */
    const id = _.get(ownProps, 'id');
    const personalInfo = _.get(ownProps, 'data.person');
    const isSpecial = getIsSpecial(state, id);
    return {
        isSpecial,
        ...personalInfo
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: (isSpecial) => {
        dispatch(/*setIsPersonSpecial(_.get(ownProps,'id'), isSpecial))*/)
      }
    }
  }


export const PersonalInfo = compose(
    withApollo,
    PersonalInfoGraphql,
    connect(mapStateToProps, mapDispatchToProps),
  )(Person);