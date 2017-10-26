import {gql, graphql} from 'react-apollo';

import Repository from './Repository';

const REPOSITORY_QUERY = gql`
  query Repository($organization: String!, $repository: String!) {
    repository(owner: $organization, name: $repository) {
      createdAt
      description
      name
    }
  }
`;

const withData = graphql(REPOSITORY_QUERY, {
  options: ({match: {params: {organization, repository} = {}} = {}}) => ({variables: {organization, repository}})
});

export {Repository};

export default withData(Repository);
