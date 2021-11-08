import React, { useContext, useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import styled from "styled-components";
import { ListContext } from "./ListContext";
import uuid from "react-native-uuid";
const FooterInput = () => {
  const [value, setValue] = useState("");
  const { list, setList } = useContext(ListContext);

  const addItem = () => {
    if (value.length > 0) {
      setValue("");
      setList([...list, { value, completed: false, _id: uuid.v4() }]);
    }
  };

  return (
    <Wrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Input
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Write a Task"
        onSubmitEditing={addItem}
      />
      <AddTouch onPress={addItem}>
        <PlusView>
          <Plus>+</Plus>
        </PlusView>
      </AddTouch>
    </Wrapper>
  );
};

const Wrapper = styled(KeyboardAvoidingView)`
  position: absolute;
  bottom: 5%;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const AddTouch = styled(TouchableOpacity)`
  justify-content: center;
`;

const Input = styled(TextInput)`
  font-size: 15px;
  padding: 10px;
  background: white;
  width: 70%;
  border-radius: 10px;
  border: 1px solid #868b8e;
  margin: 2%;
`;

const Plus = styled(Text)`
  font-size: 20px;
`;

const PlusView = styled(View)`
  width: 55px;
  height: 55px;
  background: white;
  border-radius: 55px;
  justify-content: center;
  align-items: center;
  border: 1px solid #868b8e;
`;

export default FooterInput;
