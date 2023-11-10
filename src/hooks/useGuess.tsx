import { useEffect, useState } from "react";
import {
  CreateGuessMutation,
  Guess,
  GuessChoice,
  GuessesByUserIdAndCreatedAtQuery,
  GuessResult,
  GuessResultsByGuessIdQuery,
} from "../api";
import { API, GraphQLQuery } from "@aws-amplify/api";

import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { Auth } from "aws-amplify";
import { CODE_BITCOIN } from "../constants";

export function useGuess() {
  const [currentGuess, setCurrentGuess] = useState<Guess>();
  const [allGuesses, setAllGuesses] = useState<Guess[]>([]);

  useEffect(() => {
    const fetchGuesses = async () => {
      const allGuesses = await API.graphql<
        GraphQLQuery<GuessesByUserIdAndCreatedAtQuery>
      >({
        query: queries.guessesByUserIdAndCreatedAt,
        variables: {},
      });
      const items = allGuesses.data?.guessesByUserIdAndCreatedAt?.items;
      if (items?.length) {
        setCurrentGuess(items[0] as Guess);
        setAllGuesses(items as Guess[]);
      }
    };

    fetchGuesses();
  }, []);

  const getResult = async (guessId: string) => {
    const result = await API.graphql<GraphQLQuery<GuessResultsByGuessIdQuery>>({
      query: queries.guessResultsByGuessId,
      variables: {
        guessId: guessId,
      },
    });
    const items = result.data?.guessResultsByGuessId?.items;
    if (items?.length) {
      return items[0] as GuessResult;
    }
  };

  const createGuess = async (rate: number, choiceType: GuessChoice) => {
    const user = await Auth.currentAuthenticatedUser();
    console.log("USER", user);
    await API.graphql<GraphQLQuery<CreateGuessMutation>>({
      query: mutations.createGuess,
      variables: {
        input: {
          rate,
          userId: user.username,
          code: CODE_BITCOIN,
          choice: choiceType,
        },
      },
    });
  };
  return { currentGuess, allGuesses, createGuess, getResult };
}
