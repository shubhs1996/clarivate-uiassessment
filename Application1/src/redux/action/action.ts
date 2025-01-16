import { FavItem, Item, ListItem } from "../../types/types";


export const UPDATE_LIST_DATA = "UPDATE_LIST_DATA"
export const UPDATE_FAV_DATA = "UPDATE_FAV_DATA"


export const updateListData = (data:ListItem) => {
  return { type: UPDATE_LIST_DATA, payload: data };
};

export const updateFavData = (data :FavItem)=>{
  return { type: UPDATE_FAV_DATA, payload: data }
}



