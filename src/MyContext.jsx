import { createContext, useState} from "react";
import React from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [ticketData , setTicketData] = useState([]) ;
  const [userData , setUserData] = useState([]) ;
  const [showDisplayBox , setShowDisplayBox] = useState(false)
  const [groupingValue , setGroupingValue] = useState("Status")
  const [orderingValue , setOrderingValue] = useState("Priority")
  const [grouping , setGrouping] = useState([]) ;
  return (
    <MyContext.Provider
      value={{
        ticketData , setTicketData , userData , setUserData , showDisplayBox , setShowDisplayBox , grouping , setGrouping , groupingValue , setGroupingValue , orderingValue , setOrderingValue
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
