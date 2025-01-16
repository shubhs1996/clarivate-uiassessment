
import { UPDATE_FAV_DATA, UPDATE_LIST_DATA } from "../action/action"
import { FavItem, Item, ListItem, RootState } from "../../types/types"



interface InitialStateProps { 
   data : ListItem,
   favList : FavItem[]

}


const initialState :InitialStateProps  = {
  data : {
    listArr: [],
    page: 0
  },
  favList : []
}

const listReducer = (state = initialState, action: { type: string; payload?: any; }) => {
  const { type, payload } = action
  switch (type) {
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
