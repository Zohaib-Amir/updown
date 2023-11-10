
import { useEffect, useState } from "react"

import { API } from "aws-amplify"
import { GraphQLQuery, GraphQLSubscription, graphqlOperation } from "@aws-amplify/api"
import * as subscriptions from '../graphql/subscriptions';
import * as queries from '../graphql/queries';

import { GetPriceQuery, OnCreatePriceSubscription, Price } from "../api"
import { CODE_BITCOIN } from "../constants";
import usePrevious from "./usePrevious";


export function useBitcoinPrice() {

    const createSubscription = API.graphql<GraphQLSubscription<OnCreatePriceSubscription>>(
        graphqlOperation(subscriptions.onCreatePrice)
    )

   const [currentPrice, setCurrentPrice] = useState<Price>()
   const prevPrice = usePrevious(currentPrice)

   useEffect(() => {
    const subscription = createSubscription.subscribe({
        next: ({ value }) => {
            setCurrentPrice(value.data?.onCreatePrice as Price)
        },
        error: (error) => console.error(error)
    })
    
    return () => { subscription.unsubscribe() }
   }, [createSubscription])

   useEffect(() => {
     const fetchPrice = async () => {
            const price = await API.graphql<GraphQLQuery<GetPriceQuery>>({
                query: queries.getPrice, variables: { code: CODE_BITCOIN}
            });
            setCurrentPrice(price.data?.getPrice as Price)
     }

     fetchPrice()
   }, [])

   return { currentPrice, prevPrice }

}