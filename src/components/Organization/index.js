import {gql, graphql} from 'react-apollo';

import Organization from './Organization';
import OrganizationHeader from '../OrganizationHeader';
import OrganizationRepositories from '../OrganizationRepositories';

const ORGANIZATION_QUERY = gql`
  query Organization($organization: String!) {
    organization(login: $organization) {
        login
      ...OrganizationHeader
      ...OrganizationRepositories
    }
  }
  ${OrganizationHeader.fragments.organizationHeader}
  ${OrganizationRepositories.fragments.repositories}
`;

const withData = graphql(ORGANIZATION_QUERY, {
  options: ({match: {params: {organization} = {}} = {}}) => ({variables: {organization}})
});

export {Organization};

export default withData(Organization);
