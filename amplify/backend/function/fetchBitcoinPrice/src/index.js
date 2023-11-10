import { graphQL } from "./api.js";
import { getBitcoinPrice } from "./utils.js";

const BITCOIN_API_URL = process.env.BITCOIN_API_URL;

const GRAPHQL_ENDPOINT = process.env.API_UPDOWN_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";

const createPriceMutation = /* GraphQL */ `
  mutation CreatePrice($input: CreatePriceInput!) {
    createPrice(input: $input) {
      code
      rate
      createdAt
      updatedAt
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const bitcoinPrice = await getBitcoinPrice(BITCOIN_API_URL);

  const client = graphQL({ endpoint: GRAPHQL_ENDPOINT, region: AWS_REGION });

  const input = {
    code: "BTC",
    rate: bitcoinPrice,
  };

  const response = await client({
    query: createPriceMutation,
    variables: { input },
  });
  console.log("Response", response);
};
