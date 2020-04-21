# GraphQL Basics

## References

- <https://www.apollographql.com/>
- <https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce5>

## GraphQL Overview

Below is a quick overview of some of the major high level takeaways about GraphQL:

- GraphQL can be thought of as a query language for your API. It offers a range of benefits including solving the overfetching/underfetching problem, type validation, and some of the inherent issues with REST APIs
- "A strongly typed query language and runtime for your data"
- Has exceptional developer tooling and enables frontend developers
- GraphQL can be used with REST APIs, other GraphQL APIs, 3rd party APIs, Redis, etc. Basically anywhere that returns data and in the format that your GraphQL schema expects
- All requests to a GraphQL server are done with a POST request to a single endpoint on the server. This request is then handled by resolvers
- GraphQL constructs include schemas, resolvers, scalar/object types, queries/mutations, etc

## Schemas

A GraphQL schema defines the resources available, how they relate, and how a client interacts with and consumes them. The defacto standard for writing a GraphQL schema is to use the SDL (Schema Definition Language). A GraphQL schema contains both scalar and object types. Object types include any of the following:

- String
- Int
- Float
- Boolean
- ID

On the other hand, and object type in GraphQL can be thought of as a custom, complex type created by the user. An example of this is shown below (notice that the object type is composed of scalar types):

```graphql
type Cat {
  name: String!
  color: String
  weight: Float
}
```
