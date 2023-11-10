/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserDataInput = {
  userId: string,
  score: number,
};

export type ModelUserDataConditionInput = {
  score?: ModelIntInput | null,
  and?: Array< ModelUserDataConditionInput | null > | null,
  or?: Array< ModelUserDataConditionInput | null > | null,
  not?: ModelUserDataConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type UserData = {
  __typename: "UserData",
  userId: string,
  score: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserDataInput = {
  userId: string,
  score?: number | null,
};

export type DeleteUserDataInput = {
  userId: string,
};

export type CreatePriceInput = {
  code: string,
  rate: number,
};

export type ModelPriceConditionInput = {
  rate?: ModelFloatInput | null,
  and?: Array< ModelPriceConditionInput | null > | null,
  or?: Array< ModelPriceConditionInput | null > | null,
  not?: ModelPriceConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Price = {
  __typename: "Price",
  code: string,
  rate: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePriceInput = {
  code: string,
  rate?: number | null,
};

export type DeletePriceInput = {
  code: string,
};

export type CreateGuessInput = {
  userId: string,
  code: string,
  rate: number,
  createdAt?: string | null,
  choice: GuessChoice,
  id?: string | null,
};

export enum GuessChoice {
  UP = "UP",
  DOWN = "DOWN",
}


export type ModelGuessConditionInput = {
  userId?: ModelStringInput | null,
  code?: ModelStringInput | null,
  rate?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  choice?: ModelGuessChoiceInput | null,
  and?: Array< ModelGuessConditionInput | null > | null,
  or?: Array< ModelGuessConditionInput | null > | null,
  not?: ModelGuessConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelGuessChoiceInput = {
  eq?: GuessChoice | null,
  ne?: GuessChoice | null,
};

export type Guess = {
  __typename: "Guess",
  userId: string,
  code: string,
  rate: number,
  createdAt: string,
  choice: GuessChoice,
  id: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateGuessInput = {
  userId?: string | null,
  code?: string | null,
  rate?: number | null,
  createdAt?: string | null,
  choice?: GuessChoice | null,
  id: string,
};

export type DeleteGuessInput = {
  id: string,
};

export type CreateGuessResultInput = {
  guessId: string,
  result: ResultType,
  id?: string | null,
};

export enum ResultType {
  WIN = "WIN",
  LOSE = "LOSE",
}


export type ModelGuessResultConditionInput = {
  guessId?: ModelStringInput | null,
  result?: ModelResultTypeInput | null,
  and?: Array< ModelGuessResultConditionInput | null > | null,
  or?: Array< ModelGuessResultConditionInput | null > | null,
  not?: ModelGuessResultConditionInput | null,
};

export type ModelResultTypeInput = {
  eq?: ResultType | null,
  ne?: ResultType | null,
};

export type GuessResult = {
  __typename: "GuessResult",
  guessId: string,
  result: ResultType,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGuessResultInput = {
  guessId?: string | null,
  result?: ResultType | null,
  id: string,
};

export type DeleteGuessResultInput = {
  id: string,
};

export type ModelUserDataFilterInput = {
  userId?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelUserDataFilterInput | null > | null,
  or?: Array< ModelUserDataFilterInput | null > | null,
  not?: ModelUserDataFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserDataConnection = {
  __typename: "ModelUserDataConnection",
  items:  Array<UserData | null >,
  nextToken?: string | null,
};

export type ModelPriceFilterInput = {
  code?: ModelStringInput | null,
  rate?: ModelFloatInput | null,
  and?: Array< ModelPriceFilterInput | null > | null,
  or?: Array< ModelPriceFilterInput | null > | null,
  not?: ModelPriceFilterInput | null,
};

export type ModelPriceConnection = {
  __typename: "ModelPriceConnection",
  items:  Array<Price | null >,
  nextToken?: string | null,
};

export type ModelGuessFilterInput = {
  userId?: ModelStringInput | null,
  code?: ModelStringInput | null,
  rate?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  choice?: ModelGuessChoiceInput | null,
  and?: Array< ModelGuessFilterInput | null > | null,
  or?: Array< ModelGuessFilterInput | null > | null,
  not?: ModelGuessFilterInput | null,
};

export type ModelGuessConnection = {
  __typename: "ModelGuessConnection",
  items:  Array<Guess | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGuessResultFilterInput = {
  guessId?: ModelStringInput | null,
  result?: ModelResultTypeInput | null,
  and?: Array< ModelGuessResultFilterInput | null > | null,
  or?: Array< ModelGuessResultFilterInput | null > | null,
  not?: ModelGuessResultFilterInput | null,
};

export type ModelGuessResultConnection = {
  __typename: "ModelGuessResultConnection",
  items:  Array<GuessResult | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserDataFilterInput = {
  userId?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserDataFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPriceFilterInput = {
  code?: ModelSubscriptionStringInput | null,
  rate?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionPriceFilterInput | null > | null,
  or?: Array< ModelSubscriptionPriceFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionGuessFilterInput = {
  code?: ModelSubscriptionStringInput | null,
  rate?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  choice?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGuessFilterInput | null > | null,
  or?: Array< ModelSubscriptionGuessFilterInput | null > | null,
};

export type ModelSubscriptionGuessResultFilterInput = {
  guessId?: ModelSubscriptionStringInput | null,
  result?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGuessResultFilterInput | null > | null,
  or?: Array< ModelSubscriptionGuessResultFilterInput | null > | null,
};

export type CreateUserDataMutationVariables = {
  input: CreateUserDataInput,
  condition?: ModelUserDataConditionInput | null,
};

export type CreateUserDataMutation = {
  createUserData?:  {
    __typename: "UserData",
    userId: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserDataMutationVariables = {
  input: UpdateUserDataInput,
  condition?: ModelUserDataConditionInput | null,
};

export type UpdateUserDataMutation = {
  updateUserData?:  {
    __typename: "UserData",
    userId: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserDataMutationVariables = {
  input: DeleteUserDataInput,
  condition?: ModelUserDataConditionInput | null,
};

export type DeleteUserDataMutation = {
  deleteUserData?:  {
    __typename: "UserData",
    userId: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePriceMutationVariables = {
  input: CreatePriceInput,
  condition?: ModelPriceConditionInput | null,
};

export type CreatePriceMutation = {
  createPrice?:  {
    __typename: "Price",
    code: string,
    rate: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePriceMutationVariables = {
  input: UpdatePriceInput,
  condition?: ModelPriceConditionInput | null,
};

export type UpdatePriceMutation = {
  updatePrice?:  {
    __typename: "Price",
    code: string,
    rate: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePriceMutationVariables = {
  input: DeletePriceInput,
  condition?: ModelPriceConditionInput | null,
};

export type DeletePriceMutation = {
  deletePrice?:  {
    __typename: "Price",
    code: string,
    rate: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGuessMutationVariables = {
  input: CreateGuessInput,
  condition?: ModelGuessConditionInput | null,
};

export type CreateGuessMutation = {
  createGuess?:  {
    __typename: "Guess",
    userId: string,
    code: string,
    rate: number,
    createdAt: string,
    choice: GuessChoice,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGuessMutationVariables = {
  input: UpdateGuessInput,
  condition?: ModelGuessConditionInput | null,
};

export type UpdateGuessMutation = {
  updateGuess?:  {
    __typename: "Guess",
    userId: string,
    code: string,
    rate: number,
    createdAt: string,
    choice: GuessChoice,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGuessMutationVariables = {
  input: DeleteGuessInput,
  condition?: ModelGuessConditionInput | null,
};

export type DeleteGuessMutation = {
  deleteGuess?:  {
    __typename: "Guess",
    userId: string,
    code: string,
    rate: number,
    createdAt: string,
    choice: GuessChoice,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateGuessResultMutationVariables = {
  input: CreateGuessResultInput,
  condition?: ModelGuessResultConditionInput | null,
};

export type CreateGuessResultMutation = {
  createGuessResult?:  {
    __typename: "GuessResult",
    guessId: string,
    result: ResultType,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGuessResultMutationVariables = {
  input: UpdateGuessResultInput,
  condition?: ModelGuessResultConditionInput | null,
};

export type UpdateGuessResultMutation = {
  updateGuessResult?:  {
    __typename: "GuessResult",
    guessId: string,
    result: ResultType,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGuessResultMutationVariables = {
  input: DeleteGuessResultInput,
  condition?: ModelGuessResultConditionInput | null,
};

export type DeleteGuessResultMutation = {
  deleteGuessResult?:  {
    __typename: "GuessResult",
    guessId: string,
    result: ResultType,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserDataQueryVariables = {
  userId: string,
};

export type GetUserDataQuery = {
  getUserData?:  {
    __typename: "UserData",
    userId: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserDataQueryVariables = {
  userId?: string | null,
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserDataQuery = {
  listUserData?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      userId: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPriceQueryVariables = {
  code: string,
};

export type GetPriceQuery = {
  getPrice?:  {
    __typename: "Price",
    code: string,
    rate: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPricesQueryVariables = {
  code?: string | null,
  filter?: ModelPriceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPricesQuery = {
  listPrices?:  {
    __typename: "ModelPriceConnection",
    items:  Array< {
      __typename: "Price",
      code: string,
      rate: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGuessQueryVariables = {
  id: string,
};

export type GetGuessQuery = {
  getGuess?:  {
    __typename: "Guess",
    userId: string,
    code: string,
    rate: number,
    createdAt: string,
    choice: GuessChoice,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGuessesQueryVariables = {
  filter?: ModelGuessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuessesQuery = {
  listGuesses?:  {
    __typename: "ModelGuessConnection",
    items:  Array< {
      __typename: "Guess",
      userId: string,
      code: string,
      rate: number,
      createdAt: string,
      choice: GuessChoice,
      id: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GuessesByUserIdAndCreatedAtQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGuessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GuessesByUserIdAndCreatedAtQuery = {
  guessesByUserIdAndCreatedAt?:  {
    __typename: "ModelGuessConnection",
    items:  Array< {
      __typename: "Guess",
      userId: string,
      code: string,
      rate: number,
      createdAt: string,
      choice: GuessChoice,
      id: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GuessesByCodeAndCreatedAtQueryVariables = {
  code: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGuessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GuessesByCodeAndCreatedAtQuery = {
  guessesByCodeAndCreatedAt?:  {
    __typename: "ModelGuessConnection",
    items:  Array< {
      __typename: "Guess",
      userId: string,
      code: string,
      rate: number,
      createdAt: string,
      choice: GuessChoice,
      id: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGuessResultQueryVariables = {
  id: string,
};

export type GetGuessResultQuery = {
  getGuessResult?:  {
    __typename: "GuessResult",
    guessId: string,
    result: ResultType,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGuessResultsQueryVariables = {
  filter?: ModelGuessResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuessResultsQuery = {
  listGuessResults?:  {
    __typename: "ModelGuessResultConnection",
    items:  Array< {
      __typename: "GuessResult",
      guessId: string,
      result: ResultType,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GuessResultsByGuessIdQueryVariables = {
  guessId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGuessResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GuessResultsByGuessIdQuery = {
  guessResultsByGuessId?:  {
    __typename: "ModelGuessResultConnection",
    items:  Array< {
      __typename: "GuessResult",
      guessId: string,
      result: ResultType,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserDataSubscriptionVariables = {
  filter?: ModelSubscriptionUserDataFilterInput | null,
};

export type OnCreateUserDataSubscription = {
  onCreateUserData?:  {
    __typename: "UserData",
    userId: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserDataSubscriptionVariables = {
  filter?: ModelSubscriptionUserDataFilterInput | null,
};

export type OnUpdateUserDataSubscription = {
  onUpdateUserData?:  {
    __typename: "UserData",
    userId: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserDataSubscriptionVariables = {
  filter?: ModelSubscriptionUserDataFilterInput | null,
};

export type OnDeleteUserDataSubscription = {
  onDeleteUserData?:  {
    __typename: "UserData",
    userId: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePriceSubscriptionVariables = {
  filter?: ModelSubscriptionPriceFilterInput | null,
};

export type OnCreatePriceSubscription = {
  onCreatePrice?:  {
    __typename: "Price",
    code: string,
    rate: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePriceSubscriptionVariables = {
  filter?: ModelSubscriptionPriceFilterInput | null,
};

export type OnUpdatePriceSubscription = {
  onUpdatePrice?:  {
    __typename: "Price",
    code: string,
    rate: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePriceSubscriptionVariables = {
  filter?: ModelSubscriptionPriceFilterInput | null,
};

export type OnDeletePriceSubscription = {
  onDeletePrice?:  {
    __typename: "Price",
    code: string,
    rate: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGuessSubscriptionVariables = {
  filter?: ModelSubscriptionGuessFilterInput | null,
  owner?: string | null,
};

export type OnCreateGuessSubscription = {
  onCreateGuess?:  {
    __typename: "Guess",
    userId: string,
    code: string,
    rate: number,
    createdAt: string,
    choice: GuessChoice,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGuessSubscriptionVariables = {
  filter?: ModelSubscriptionGuessFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGuessSubscription = {
  onUpdateGuess?:  {
    __typename: "Guess",
    userId: string,
    code: string,
    rate: number,
    createdAt: string,
    choice: GuessChoice,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGuessSubscriptionVariables = {
  filter?: ModelSubscriptionGuessFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGuessSubscription = {
  onDeleteGuess?:  {
    __typename: "Guess",
    userId: string,
    code: string,
    rate: number,
    createdAt: string,
    choice: GuessChoice,
    id: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateGuessResultSubscriptionVariables = {
  filter?: ModelSubscriptionGuessResultFilterInput | null,
};

export type OnCreateGuessResultSubscription = {
  onCreateGuessResult?:  {
    __typename: "GuessResult",
    guessId: string,
    result: ResultType,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGuessResultSubscriptionVariables = {
  filter?: ModelSubscriptionGuessResultFilterInput | null,
};

export type OnUpdateGuessResultSubscription = {
  onUpdateGuessResult?:  {
    __typename: "GuessResult",
    guessId: string,
    result: ResultType,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGuessResultSubscriptionVariables = {
  filter?: ModelSubscriptionGuessResultFilterInput | null,
};

export type OnDeleteGuessResultSubscription = {
  onDeleteGuessResult?:  {
    __typename: "GuessResult",
    guessId: string,
    result: ResultType,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
