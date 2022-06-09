import React, { useCallback, useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import utils from "../../../utils";

import Card from "../../../components/Card";

import * as ItemActions from "../../../redux/item/actions";

function CatalogListScreen(props) {
  const { navigation } = props;
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);

  const items = useSelector((state) => {
    return state.item.items;
  });
  const lastFetchIndex = useSelector((state) => {
    return state.item.lastFetchIndex;
  });

  useEffect(() => {
    fetchItemPage(0);
  }, []);

  useEffect(() => {
    fetchItemPage(currentIndex);
  }, [currentIndex]);

  const fetchItemPage = useCallback(
    (page = 0) => dispatch(ItemActions.fetchItems(page)),
    [dispatch, lastFetchIndex, currentIndex]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        extraData={items || currentIndex || lastFetchIndex}
        renderItem={({ item }) => (
          <Card
            onPress={() => {
              navigation.navigate("CatalogItemScreen", {
                itemId: utils.getPokemonIdFromURL(item.url),
                itemName: item.name,
              });
            }}
            title={item.name}
            url={item.url}
          />
        )}
        onEndReached={() => setCurrentIndex(lastFetchIndex + 1)}
        onEndReachedThreshold={0.9}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CatalogListScreen;
