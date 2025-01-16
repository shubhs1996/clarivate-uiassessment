
import { UPDATE_FAV_DATA, UPDATE_LIST_DATA } from "../action/action"
import { Item, ListItem } from "../../types/types"




const initialState  = {
  data : {},
  favList: []
};

const listReducer = (state = initialState, action) => {

  const { type, payload } = action

  switch (action.type) {
    case UPDATE_LIST_DATA:
      console.log({payload})
      return { ...state, ['data']: { ...payload } };
    case UPDATE_FAV_DATA:
      let tempFav = [...state.favList]
      const { id } = payload
      let index = tempFav.findIndex((item) => item.id == id)
      if (index !== -1) {
        tempFav.splice(index, 1)
      } else {
        tempFav.push(payload)
      }
      return { ...state, ['favList']: [...tempFav] }
    default:
      return state;
  }
};

export default listReducer;
