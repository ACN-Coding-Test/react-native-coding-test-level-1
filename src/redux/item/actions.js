import * as ItemService from "../../services/itemService";
import utils from "../../utils";
import ActionTypes from "../ActionTypes";

export function fetchItems(page = 0) {
  return async (dispatch, getState) => {
    const lastFetchedIndex = await utils.getLastFetchedIndexFromState(getState);
    if (lastFetchedIndex < page) {
      const apiResponse = await ItemService.getPokemonList(page);
      if (apiResponse.status === 200) {
        const arValues = apiResponse.data?.["results"] || [];
        const hasNext = apiResponse.data?.["next"] !== null;
        dispatch({
          type: ActionTypes.SET_ITEMS,
          values: arValues,
          hasNext: hasNext,
          lastFetchIndex: page,
        });
      }
    }
  };
}

export function fetchItem(itemId) {
  return async (dispatch, getState) => {
    const itemFromState = await utils.getPokemonItemFromState(getState, itemId);
    if (itemFromState) {
      return itemFromState;
    } else {
      const apiResponse = await ItemService.getPokemonLItem(itemId);
      if (apiResponse.status === 200) {
        const item = apiResponse.data;
        dispatch({ type: ActionTypes.VIEW_ITEM, id: itemId, value: item });
        return item;
      } else {
        return null;
      }
    }
  };
}
