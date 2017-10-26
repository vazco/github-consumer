import {ApolloClient, createNetworkInterface} from 'react-apollo';

const networkInterface = createNetworkInterface({uri: 'https://api.github.com/graphql'});

export const setAuthorizationHeader = token => networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    req.options.headers.authorization = `Bearer ${token}`;
    next();
  }
}]);

export const client = new ApolloClient({
  networkInterface
});

export default client;
