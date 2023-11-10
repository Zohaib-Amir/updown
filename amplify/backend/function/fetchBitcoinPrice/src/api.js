
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

import crypto from '@aws-crypto/sha256-js';



const { Sha256 } = crypto;

export const graphQL = ({ endpoint, region}) => async (bodyGQL) => {
    const endpointUrl = new URL(endpoint);

    const signer = new SignatureV4({
      credentials: defaultProvider(),
      region: region,
      service: 'appsync',
      sha256: Sha256
    });
  
    const requestToBeSigned = new HttpRequest({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        host: endpointUrl.host
      },
      hostname: endpointUrl.host,
      body: JSON.stringify(bodyGQL),
      path: endpointUrl.pathname
    });
  
    const signed = await signer.sign(requestToBeSigned);
    const request = new Request(endpointUrl, signed);
  
    let statusCode = 200;
    let body;
    let response;
  
    try {
      response = await fetch(request);
      body = await response.json();
      if (body.errors) statusCode = 400;
    } catch (error) {
      statusCode = 500;
      body = {
        errors: [
          {
            message: error.message
          }
        ]
      };
    }
  
    return {
      statusCode, 
      body: JSON.stringify(body)
    };
}

