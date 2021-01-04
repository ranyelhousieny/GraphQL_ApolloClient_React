https://ranyel.medium.com/graphql-apollo-client-in-react-build-an-app-step-by-step-2461574f16c8

GraphQL Apollo Client in React
In this short article, I will explain how to interact with GraphQL API from React using Apollo Client. I will build a very simple app (final code can be found at https://github.com/ranyelhousieny/GraphQL_ApolloClient_React).

Since this is more focused on Front-End, I will use a public GraphQL API to fetch data (https://countries.trevorblades.com/). I will not explain GraphQL server side, GraphQL basics, or React basics. I assume you know GraphQL and React basics and know how to create an app using create-react-app. This article will show how can you fetch data from a GraphQL API using Apollo Client.

Before we start with the code, let's understand how React interacts with GraphQL and Apollo. Apollo client where we can get from apollo-client is not aware of React. The job of Apollo Client is to interact with a GraphQL server and store data in Apollo Store (similar to Redux store :)). However, we link React to Apollo client with ApolloProvider from react-apollo. ApolloProvider will wrap our React App and allow all children Apps to interact with the store. If you worked with Redux, before, you will find this familiar.

Here is index.js so far:

…or create a new repository on the command line
echo "# GraphQL_ApolloClient_React" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ranyelhousieny/GraphQL_ApolloClient_React.git
git push -u origin main
                
…or push an existing repository from the command line
git remote add origin https://github.com/ranyelhousieny/GraphQL_ApolloClient_React.git
git branch -M main
git push -u origin main
