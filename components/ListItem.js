import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const ListItem = ({
  item: { value, completed, _id },
  index,
  toggleComplete,
  removeItem,
}) => {
  return (
    <Wrapper onPress={() => toggleComplete({ _id, value, completed })}>
      <Square completed={completed}></Square>
      <Message completed={completed}>{value}</Message>

      <Remove completed={completed} disabled={!completed}>
        <RemoveText onPress={() => removeItem(index)} completed={completed}>
          x
        </RemoveText>
      </Remove>
    </Wrapper>
  );
};

const Square = styled(View)`
  width: 20px;
  height: 20px;
  background: ${({ completed }) => (completed ? "#d42902" : "#7ec8e3")};
  border-radius: 5px;
`;

const Wrapper = styled(TouchableOpacity)`
  position: relative;
  margin: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #e7d2cc;
  width: 80%;
  margin-left: 10%;
  padding: 10px;
  border-radius: 10px;
`;

const Message = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

const Remove = styled(TouchableOpacity)`
  height: 26px;
  width: 26px;
  border-radius: 26px;
  justify-content: center;
  align-items: center;
`;

const RemoveText = styled(Text)`
  color: ${({ completed }) => (completed ? "black" : "rgba(1,1,1,0)")};
  font-weight: bold;
  font-size: 15px;
`;

export default ListItem;
