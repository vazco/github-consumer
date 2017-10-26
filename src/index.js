import {ApolloProvider} from 'react-apollo';
import React from 'react';

import {render} from 'react-dom';

import App from './components/App';
import client from './imports/api/apollo';

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
