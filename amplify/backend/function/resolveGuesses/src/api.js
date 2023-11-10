const guessesByCodeAndCreatedAt = /* GraphQL */ `
  query GuessesByCodeAndCreatedAt(
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
      }
      nextToken
    }
  }
`;

export const createGuessResultMutation = /* GraphQL */ `
  mutation CreateGuessResult(
    $input: CreateGuessResultInput!
    $condition: ModelGuessResultConditionInput
  ) {
    createGuessResult(input: $input, condition: $condition) {
      id
    }
  }
`;

export const fetchGuesses = async (gqlClient) => {
  const items = [];
  const millisecondsInMinute = 1 * 60 * 1000;
  const timestampAMinuteAgo = new Date(
    new Date().getTime() - millisecondsInMinute
  ).toISOString();

  let nextToken;
  do {
    const response = await gqlClient({
      query: guessesByCodeAndCreatedAt,
      variables: {
        code: "BTC",
        createdAt: {
          le: timestampAMinuteAgo,
        },
      },
    });
    console.log("guesses", response);
    const body = JSON.parse(response?.body);
    const data = body.data?.guessesByCodeAndCreatedAt;
    if (data?.items?.length) items.push(...data.items);
    nextToken = data.nextToken;
  } while (nextToken);

  return items;
};
