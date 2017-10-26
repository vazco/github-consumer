import React from 'react';

import Failure from '../Failure';
import Loading from '../Loading';
import OrganizationHeader from '../OrganizationHeader';
import OrganizationRepositories from '../OrganizationRepositories';

export const Organization = ({data: {error, loading, organization}}) => {
  if (loading) return <Loading />;
  if (error) return <Failure />;

  return (
    <div>
      <OrganizationHeader organization={organization} />
      <OrganizationRepositories organization={organization} />
    </div>
  );
};

export default Organization;

