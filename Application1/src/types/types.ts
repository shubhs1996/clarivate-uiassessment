
export interface Item {
    id:number;
    title:string;
    imageUrl :string;
}

export interface ListItem { 
    listArr: Item[];
    page: number;
}


export  interface RootState {
    list: {
        data: ListItem;
        favList:Item[]
      };
}