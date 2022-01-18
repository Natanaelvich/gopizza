import React, { createContext, useCallback, useContext, useState } from 'react';

export type Request = {
  id: string;
  numberTable: string;
  productId: string;
  productImage: string;
  productName: string;
  quantityRequest: string;
  status: string;
  total: string;
  createAt: Date;
};

export type RequestsContextData = {
  changeRequests: (RequestsChanged: Request[]) => void;
  requests: Request[];
};

const RequestsContext = createContext<RequestsContextData>(
  {} as RequestsContextData,
);

const RequestsProvider: React.FC = ({ children }) => {
  const [requests, setRequests] = useState<Request[]>([]);

  const changeRequests = useCallback((newRequests: Request[]) => {
    setRequests(newRequests);
  }, []);

  return (
    <RequestsContext.Provider
      value={{
        requests,
        changeRequests,
      }}
    >
      {children}
    </RequestsContext.Provider>
  );
};

export function useRequests(): RequestsContextData {
  const context = useContext(RequestsContext);

  return context;
}

export { RequestsProvider, RequestsContext };
