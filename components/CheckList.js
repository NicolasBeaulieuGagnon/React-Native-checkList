import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Text, View, TouchableOpacity, Touchable } from "react-native";

import ListItem from "./ListItem";
import { ListContext } from "./ListContext";

const CheckList = () => {
  const { list, setList } = useContext(ListContext);

  const toggleComplete = (task) => {
    const newList = [...list];
    const changedList = newList.map((item) => {
      if (item._id === task._id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    setList(changedList);
  };

  const removeItem = (index) => {
    const listCopy = [...list];

    listCopy.splice(index, 1);

    setList(listCopy);
  };

  const resetList = () => {
    setList([]);
  };

  return (
    <Wrapper>
      {list.length > 0 && (
        <TaskCount>
          {list.filter((item) => item.completed === true).length} /{" "}
          {list.length} tasks completed
        </TaskCount>
      )}
      {list.map((item, index) => {
        return (
          <ListItem
            removeItem={removeItem}
            toggleComplete={toggleComplete}
            key={index}
            item={item}
            index={index}
          />
        );
      })}
      {list.length > 0 && list.every((item) => item.completed === true) && (
        <RemoveAll onPress={resetList}>
          <RemoveText>Remove All</RemoveText>
        </RemoveAll>
      )}
    </Wrapper>
  );
};

const TaskCount = styled(Text)`
  margin-left: 5%;
  padding-left: 17px;
`;
const Wrapper = styled(View)``;

const RemoveAll = styled(TouchableOpacity)`
  align-items: center;
`;

const RemoveText = styled(Text)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #7ec8e3;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 18px;
`;

export default CheckList;
