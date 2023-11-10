/* Amplify Params - DO NOT EDIT
	API_UPDOWN_GRAPHQLAPIENDPOINTOUTPUT
	API_UPDOWN_GRAPHQLAPIIDOUTPUT
	API_UPDOWN_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import { createGuessResultMutation, fetchGuesses } from "./api.js";
import {
  CHOICE_TYPE_DOWN,
  CHOICE_TYPE_UP,
  RESULT_TYPE_LOSE,
  RESULT_TYPE_WIN,
} from "./constants.js";
import { graphQL } from "./gql.js";

const GRAPHQL_ENDPOINT = process.env.API_UPDOWN_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);

    if (record.eventName === "MODIFY") {
      const newRate = parseFloat(record.dynamodb.NewImage.rate.N);

      const client = graphQL({
        endpoint: GRAPHQL_ENDPOINT,
        region: AWS_REGION,
      });

      const guesses = await fetchGuesses(client);

      const results = guesses.reduce((acc, guess) => {
        const { id, rate, choice } = guess;

        if (rate !== newRate) {
          const isUp = newRate > rate;
          const isWin =
            (choice === CHOICE_TYPE_UP && isUp) ||
            (choice === CHOICE_TYPE_DOWN && !isUp);
          const guessResult = {
            guessId: id,
            result: isWin ? RESULT_TYPE_WIN : RESULT_TYPE_LOSE,
          };
          acc.push(guessResult);
        }

        return acc;
      }, []);

      console.log("Proccess Results: ", results);

      const addResultsPromises = results.map(async (result) => {
        return client({
          query: createGuessResultMutation,
          variables: { input: result },
        });
      });

      const responses = await Promise.all(addResultsPromises);
      console.log("Results Added:", responses);
    }
  }
};
