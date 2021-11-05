import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListContext = createContext(null);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const value = await AsyncStorage.getItem("listId");
    if (value) {
      // make a fetch to that value._id to get the list from the server
    } else {
    }
  }, []);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
