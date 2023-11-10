/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserData = /* GraphQL */ `query GetUserData($userId: String!) {
  getUserData(userId: $userId) {
    userId
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserDataQueryVariables,
  APITypes.GetUserDataQuery
>;
export const listUserData = /* GraphQL */ `query ListUserData(
  $userId: String
  $filter: ModelUserDataFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserData(
    userId: $userId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      userId
      score
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserDataQueryVariables,
  APITypes.ListUserDataQuery
>;
export const getPrice = /* GraphQL */ `query GetPrice($code: String!) {
  getPrice(code: $code) {
    code
    rate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPriceQueryVariables, APITypes.GetPriceQuery>;
export const listPrices = /* GraphQL */ `query ListPrices(
  $code: String
  $filter: ModelPriceFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPrices(
    code: $code
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      code
      rate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPricesQueryVariables,
  APITypes.ListPricesQuery
>;
export const getGuess = /* GraphQL */ `query GetGuess($id: ID!) {
  getGuess(id: $id) {
    userId
    code
    rate
    createdAt
    choice
    id
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGuessQueryVariables, APITypes.GetGuessQuery>;
export const listGuesses = /* GraphQL */ `query ListGuesses(
  $filter: ModelGuessFilterInput
  $limit: Int
  $nextToken: String
) {
  listGuesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      code
      rate
      createdAt
      choice
      id
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGuessesQueryVariables,
  APITypes.ListGuessesQuery
>;
export const guessesByUserIdAndCreatedAt = /* GraphQL */ `query GuessesByUserIdAndCreatedAt(
  $userId: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGuessFilterInput
  $limit: Int
  $nextToken: String
) {
  guessesByUserIdAndCreatedAt(
    userId: $userId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      userId
      code
      rate
      createdAt
      choice
      id
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GuessesByUserIdAndCreatedAtQueryVariables,
  APITypes.GuessesByUserIdAndCreatedAtQuery
>;
export const guessesByCodeAndCreatedAt = /* GraphQL */ `query GuessesByCodeAndCreatedAt(
  $code: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGuessFilterInput
  $limit: Int
  $nextToken: String
) {
  guessesByCodeAndCreatedAt(
    code: $code
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      userId
      code
      rate
      createdAt
      choice
      id
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GuessesByCodeAndCreatedAtQueryVariables,
  APITypes.GuessesByCodeAndCreatedAtQuery
>;
export const getGuessResult = /* GraphQL */ `query GetGuessResult($id: ID!) {
  getGuessResult(id: $id) {
    guessId
    result
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGuessResultQueryVariables,
  APITypes.GetGuessResultQuery
>;
export const listGuessResults = /* GraphQL */ `query ListGuessResults(
  $filter: ModelGuessResultFilterInput
  $limit: Int
  $nextToken: String
) {
  listGuessResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      guessId
      result
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGuessResultsQueryVariables,
  APITypes.ListGuessResultsQuery
>;
export const guessResultsByGuessId = /* GraphQL */ `query GuessResultsByGuessId(
  $guessId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelGuessResultFilterInput
  $limit: Int
  $nextToken: String
) {
  guessResultsByGuessId(
    guessId: $guessId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      guessId
      result
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GuessResultsByGuessIdQueryVariables,
  APITypes.GuessResultsByGuessIdQuery
>;
