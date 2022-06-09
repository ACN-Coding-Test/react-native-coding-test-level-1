import ActionTypes from "../ActionTypes";

const defaultState = {
  items: [],
  lastFetchIndex: -1,
  hasNext: false,
  viewedItems: {}
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.SET_ITEMS:
      return {
        ...state,
        items: [...new Set([...state.items, ...action.values])],
        hasNext: action.hasNext,
        lastFetchIndex: action.lastFetchIndex
      }
    case ActionTypes.VIEW_ITEM: {
      const updatedViewedItems = state.viewedItems;
      updatedViewedItems[action.id] = action.value
      return {
        ...state,
        viewedItems: updatedViewedItems,
      }
    }

    default: return state
  }
}

export default reducer
