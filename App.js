import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import CheckList from "./components/CheckList";

import { ListProvider } from "./components/ListContext";
import FooterInput from "./components/FooterInput";

const App = () => {
  return (
    <ListProvider>
      <AppView>
        <Title>Todo List</Title>
        <CheckList />
        <FooterInput />
      </AppView>
    </ListProvider>
  );
};

const AppView = styled(View)`
  flex: 1;
  background: #eeede7;
  position: relative;
`;

const Title = styled(Text)`
  color: #05445e;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
  width: 90%;
  margin-left: 5%;
  margin-top: 20%;
  padding: 15px;
`;

export default App;
