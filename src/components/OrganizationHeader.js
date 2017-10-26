import React from 'react';
import {gql} from 'react-apollo';

const styles = {
  img: {
    height: 'auto',
    marginRight: 16,
    verticalAlign: 'middle',
    width: 64
  }
};

export const OrganizationHeader = ({organization: {avatarUrl, description, name} = {}}) => (
  <div>
    <h1><img alt={`${name}-logo`} src={avatarUrl} style={styles.img} />{name}</h1>
    <p>{description}</p>
  </div>
);

OrganizationHeader.fragments = {
  organizationHeader: gql`
    fragment OrganizationHeader on Organization {
      avatarUrl
      description
      name
    }
  `
};

export default OrganizationHeader;
