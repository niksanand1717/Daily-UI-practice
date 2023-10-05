import React from "react";
import Navigator from "../components/Navigator/Navigator";
import PageContext from "./Navigator";

const NavigatorContextProvider = ({ children }) => {
  const [page, setPage] = React.useState({
    pageno: 0,
  });
  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
      <Navigator />
    </PageContext.Provider>
  );
};

export default NavigatorContextProvider;
