
export interface Item {
    id: number;
    albumId:number;
    url: string;
    title: string;
    thumbnailUrl:string
}

export interface FavItem {
    id :number;
    imageUrl:string;
    title:string
}

export interface ListItem { 
    listArr: Item[];
    page: number;
}


export  interface RootState {
    list: {
        data: ListItem;
        favList:FavItem[]
      };
}