/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserData = /* GraphQL */ `subscription OnCreateUserData($filter: ModelSubscriptionUserDataFilterInput) {
  onCreateUserData(filter: $filter) {
    userId
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserDataSubscriptionVariables,
  APITypes.OnCreateUserDataSubscription
>;
export const onUpdateUserData = /* GraphQL */ `subscription OnUpdateUserData($filter: ModelSubscriptionUserDataFilterInput) {
  onUpdateUserData(filter: $filter) {
    userId
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserDataSubscriptionVariables,
  APITypes.OnUpdateUserDataSubscription
>;
export const onDeleteUserData = /* GraphQL */ `subscription OnDeleteUserData($filter: ModelSubscriptionUserDataFilterInput) {
  onDeleteUserData(filter: $filter) {
    userId
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserDataSubscriptionVariables,
  APITypes.OnDeleteUserDataSubscription
>;
export const onCreatePrice = /* GraphQL */ `subscription OnCreatePrice($filter: ModelSubscriptionPriceFilterInput) {
  onCreatePrice(filter: $filter) {
    code
    rate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePriceSubscriptionVariables,
  APITypes.OnCreatePriceSubscription
>;
export const onUpdatePrice = /* GraphQL */ `subscription OnUpdatePrice($filter: ModelSubscriptionPriceFilterInput) {
  onUpdatePrice(filter: $filter) {
    code
    rate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePriceSubscriptionVariables,
  APITypes.OnUpdatePriceSubscription
>;
export const onDeletePrice = /* GraphQL */ `subscription OnDeletePrice($filter: ModelSubscriptionPriceFilterInput) {
  onDeletePrice(filter: $filter) {
    code
    rate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePriceSubscriptionVariables,
  APITypes.OnDeletePriceSubscription
>;
export const onCreateGuess = /* GraphQL */ `subscription OnCreateGuess(
  $filter: ModelSubscriptionGuessFilterInput
  $owner: String
) {
  onCreateGuess(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGuessSubscriptionVariables,
  APITypes.OnCreateGuessSubscription
>;
export const onUpdateGuess = /* GraphQL */ `subscription OnUpdateGuess(
  $filter: ModelSubscriptionGuessFilterInput
  $owner: String
) {
  onUpdateGuess(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGuessSubscriptionVariables,
  APITypes.OnUpdateGuessSubscription
>;
export const onDeleteGuess = /* GraphQL */ `subscription OnDeleteGuess(
  $filter: ModelSubscriptionGuessFilterInput
  $owner: String
) {
  onDeleteGuess(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGuessSubscriptionVariables,
  APITypes.OnDeleteGuessSubscription
>;
export const onCreateGuessResult = /* GraphQL */ `subscription OnCreateGuessResult(
  $filter: ModelSubscriptionGuessResultFilterInput
) {
  onCreateGuessResult(filter: $filter) {
    guessId
    result
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGuessResultSubscriptionVariables,
  APITypes.OnCreateGuessResultSubscription
>;
export const onUpdateGuessResult = /* GraphQL */ `subscription OnUpdateGuessResult(
  $filter: ModelSubscriptionGuessResultFilterInput
) {
  onUpdateGuessResult(filter: $filter) {
    guessId
    result
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGuessResultSubscriptionVariables,
  APITypes.OnUpdateGuessResultSubscription
>;
export const onDeleteGuessResult = /* GraphQL */ `subscription OnDeleteGuessResult(
  $filter: ModelSubscriptionGuessResultFilterInput
) {
  onDeleteGuessResult(filter: $filter) {
    guessId
    result
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGuessResultSubscriptionVariables,
  APITypes.OnDeleteGuessResultSubscription
>;
