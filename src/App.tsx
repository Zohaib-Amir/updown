import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { useBitcoinPrice } from "./hooks/useBitcoinPrice";
import { useGuess } from "./hooks/useGuess";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { currentPrice, prevPrice } = useBitcoinPrice();
  const { currentGuess, getResult, createGuess } = useGuess();
  const result = useQuery({
    queryKey: ["result", currentGuess?.id],
    queryFn: ({ queryKey }) => {
      const [_key, guessId] = queryKey;
      getResult(guessId as string);
    },
    enabled: !!currentGuess,
  });

  return (
    <Authenticator>
      {() => (
        <main>
          <h1 className="">{currentPrice?.rate}</h1>
          {prevPrice && <h4>Previous Price: {prevPrice?.rate}</h4>}
          <div className="flex space-x-2 justify-center m-4">
            <button>Up</button>
            <button>Down</button>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
