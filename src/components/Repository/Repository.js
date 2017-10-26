import React from 'react';

import Failure from '../Failure';
import Loading from '../Loading';

export const Repository = (
  {data: {error, loading, repository: {createdAt, description, name} = {}}}
) => {
  if (loading) return <Loading />;
  if (error) return <Failure />;

  return (
    <div>
      <h1>{name}</h1>
      <p>Created at: <time dateTime={createdAt}>{createdAt}</time></p>
      <h4>Description:</h4>
      <p>{description}</p>
    </div>
  );
};

export default Repository;
