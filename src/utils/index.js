function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function validateLetters(str) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(str);
}

function formatDate(date) {
  const dateTimeObj = new Date(date);
  const year = dateTimeObj.getFullYear();
  const month = dateTimeObj.getMonth();
  const day = dateTimeObj.getDate();

  return `${year}-${month}-${day}`;
}

function getPokemonIdFromURL(url) {
  const last = url.split("/");
  if (last[last.length - 1] !== "") {
    return last[last.length - 1];
  } else {
    return last[last.length - 2];
  }
}

async function getLastFetchedIndexFromState(getState) {
  try {
    const state = await getState();
    const itemObj = state.item;
    if (itemObj.lastFetchIndex) {
      return itemObj.lastFetchIndex;
    } else {
      return 0;
    }
  } catch (error) {
    return 0;
  }
}

async function getPokemonItemFromState(getState, key) {
  try {
    const state = await getState();
    const itemObj = state.viewedItems;
    if (itemObj.viewedItems) {
      return itemObj.viewedItems[key];
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export default {
  validateEmail: validateEmail,
  validateLetters: validateLetters,
  formatDate: formatDate,
  getPokemonIdFromURL: getPokemonIdFromURL,
  getLastFetchedIndexFromState: getLastFetchedIndexFromState,
  getPokemonItemFromState: getPokemonItemFromState,
};
