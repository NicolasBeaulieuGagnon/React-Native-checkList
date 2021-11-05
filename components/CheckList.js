import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Text, View, TouchableOpacity } from "react-native";

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
  return (
    <Wrapper>
      {list.map((item, index) => {
        return (
          <ListItem toggleComplete={toggleComplete} key={index} item={item} />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(View)``;

export default CheckList;
