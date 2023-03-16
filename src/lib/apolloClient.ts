import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({uri: "https://ca-central-1.cdn.hygraph.com/content/clex3jpua041w01t909jb3iu7/master", cache: new InMemoryCache });
// console.log(client + "onliine");

export default client;
