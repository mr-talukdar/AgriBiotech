import { createClient, Provider } from "urql";
import { cacheExchange, fetchExchange } from "urql";
import { ReactNode } from "react";

// Create a urql client
export const urqlClient = createClient({
  url: "https://ap-south-1.cdn.hygraph.com/content/clty7kh150ci507wdhdyklati/master",
  exchanges: [cacheExchange, fetchExchange],
});

interface UrqlProviderProps {
  children: ReactNode;
}

// Export a Provider component that wraps the entire application
export const UrqlProvider: React.FC<UrqlProviderProps> = ({ children }) => {
  return <Provider value={urqlClient}>{children}</Provider>;
};
