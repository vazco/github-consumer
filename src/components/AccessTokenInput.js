import React from 'react';

const INSTRUCTIONS_HREF = 'https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/';

export const AccessTokenInput = ({onAccessToken}) => (
  <div>
    <p>It is not possible to query Github GraphQL API v4 anonymously so this app requires an access token.</p>
    <p>Follow official <a href={INSTRUCTIONS_HREF}>instructions</a> to generate your own one, then put the token in the field below and press Enter.</p>
    <p>Required scopes are: read:org</p>
    <label>
      Access token:
      <input type="text" onKeyPress={(event) => {if (event.key === 'Enter') onAccessToken(event.target.value)}} />
    </label>
  </div>
);

export default AccessTokenInput;
