# GraphQL Basics

## References

- <https://www.apollographql.com/>
- <https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce5>
- <https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6>

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

In addition to types within GraphQL, there is also the concept of queries and mutations. Queries can be thought of as exposed "methods" provided by your GraphQL schema for retrieving data, while mutations are more or less the same except they can be used to modify data. An example of both are provided below:

```graphql
type Query {
  cat(name: String): Cat
}

# An example of calling the above query
query myCat {
  cat("simon") {
    name
    color
    weight
  }
}

# A complex input type for mutations
input UpdateCatInput {
  name: String
  color: String
  weight: Float
}

type Mutation {
  cat(input: UpdateCatInput): Cat
}

# An example of calling the above mutation
mutation updateCat {
  updateCat(input: {name: "Garfield"}) {
    name
    color
    weight
  }
}
```

## resolvers

Resolvers can almost be thought of as a controller in a REST API, but they are different in certain respects. Similar to the classic controller construct, they are responsible for retrieving data, or "resolving" requests. Resolvers can pull data from just about any data source, as long as it matches the GraphQL schema. Every resolver returns a specified type, given the strongly typed nature of GraphQL. For every mutation/query in your schema, you need to have a resolver, though types sometimes need resolvers too. 

Some additional notes about resolvers:

- You can write resolvers for queries/mutations, or you can also write resolvers for fields on a type and then delegate to those resolvers from withing the query/mutation resolver(s)
- The query/mutation determines the order that resolvers run
