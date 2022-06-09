import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'


import PokemonInfo from '../../../components/PokemonInfo';

import * as ItemActions from "../../../redux/item/actions";

function CatalogScreen(props) {
  const { route } = props;
  const dispatch = useDispatch()

  const { itemId } = route.params;

  const [item, setItem] = useState(null);

  useEffect(() => {
    dispatch(ItemActions.fetchItem(itemId)).then(res => {
      setItem(res)
    })
  }, [itemId])


  return (
    <View style={styles.container}>
      {item && (
        <PokemonInfo
          {...item}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});


export default CatalogScreen;
