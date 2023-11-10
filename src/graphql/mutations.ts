/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserData = /* GraphQL */ `mutation CreateUserData(
  $input: CreateUserDataInput!
  $condition: ModelUserDataConditionInput
) {
  createUserData(input: $input, condition: $condition) {
    userId
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserDataMutationVariables,
  APITypes.CreateUserDataMutation
>;
export const updateUserData = /* GraphQL */ `mutation UpdateUserData(
  $input: UpdateUserDataInput!
  $condition: ModelUserDataConditionInput
) {
  updateUserData(input: $input, condition: $condition) {
    userId
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserDataMutationVariables,
  APITypes.UpdateUserDataMutation
>;
export const deleteUserData = /* GraphQL */ `mutation DeleteUserData(
  $input: DeleteUserDataInput!
  $condition: ModelUserDataConditionInput
) {
  deleteUserData(input: $input, condition: $condition) {
    userId
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserDataMutationVariables,
  APITypes.DeleteUserDataMutation
>;
export const createPrice = /* GraphQL */ `mutation CreatePrice(
  $input: CreatePriceInput!
  $condition: ModelPriceConditionInput
) {
  createPrice(input: $input, condition: $condition) {
    code
    rate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePriceMutationVariables,
  APITypes.CreatePriceMutation
>;
export const updatePrice = /* GraphQL */ `mutation UpdatePrice(
  $input: UpdatePriceInput!
  $condition: ModelPriceConditionInput
) {
  updatePrice(input: $input, condition: $condition) {
    code
    rate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePriceMutationVariables,
  APITypes.UpdatePriceMutation
>;
export const deletePrice = /* GraphQL */ `mutation DeletePrice(
  $input: DeletePriceInput!
  $condition: ModelPriceConditionInput
) {
  deletePrice(input: $input, condition: $condition) {
    code
    rate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePriceMutationVariables,
  APITypes.DeletePriceMutation
>;
export const createGuess = /* GraphQL */ `mutation CreateGuess(
  $input: CreateGuessInput!
  $condition: ModelGuessConditionInput
) {
  createGuess(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGuessMutationVariables,
  APITypes.CreateGuessMutation
>;
export const updateGuess = /* GraphQL */ `mutation UpdateGuess(
  $input: UpdateGuessInput!
  $condition: ModelGuessConditionInput
) {
  updateGuess(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGuessMutationVariables,
  APITypes.UpdateGuessMutation
>;
export const deleteGuess = /* GraphQL */ `mutation DeleteGuess(
  $input: DeleteGuessInput!
  $condition: ModelGuessConditionInput
) {
  deleteGuess(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGuessMutationVariables,
  APITypes.DeleteGuessMutation
>;
export const createGuessResult = /* GraphQL */ `mutation CreateGuessResult(
  $input: CreateGuessResultInput!
  $condition: ModelGuessResultConditionInput
) {
  createGuessResult(input: $input, condition: $condition) {
    guessId
    result
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGuessResultMutationVariables,
  APITypes.CreateGuessResultMutation
>;
export const updateGuessResult = /* GraphQL */ `mutation UpdateGuessResult(
  $input: UpdateGuessResultInput!
  $condition: ModelGuessResultConditionInput
) {
  updateGuessResult(input: $input, condition: $condition) {
    guessId
    result
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGuessResultMutationVariables,
  APITypes.UpdateGuessResultMutation
>;
export const deleteGuessResult = /* GraphQL */ `mutation DeleteGuessResult(
  $input: DeleteGuessResultInput!
  $condition: ModelGuessResultConditionInput
) {
  deleteGuessResult(input: $input, condition: $condition) {
    guessId
    result
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGuessResultMutationVariables,
  APITypes.DeleteGuessResultMutation
>;
