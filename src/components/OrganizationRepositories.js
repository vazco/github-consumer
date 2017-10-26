import React from 'react';
import {gql} from 'react-apollo';
import {Link} from 'react-router-dom'

export const OrganizationRepositories = ({
  organization: {login, repositories: {edges: repositories = []} = {}} = {}
}) => (
  <ul>
    {repositories.map(({node: {id, description, name, primaryLanguage, updatedAt} = {}}) => (
      <li key={id}>
        <Link to={`/${login}/${name}`}>{name}</Link>
        <p>{description}</p>
        <p>Last updated at: <time dateTime={updatedAt}>{updatedAt}</time></p>
        {primaryLanguage && <p>Primary language: {primaryLanguage.name}</p>}
      </li>
    ))}
  </ul>
);

OrganizationRepositories.fragments = {
  repositories: gql`
    fragment OrganizationRepositories on Organization {
      repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
        edges {
          node {
            id
            description
            name
            primaryLanguage {
              name
            }
            updatedAt
          }
        }
      }
    }
  `
};

export default OrganizationRepositories;
