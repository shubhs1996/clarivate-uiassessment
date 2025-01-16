


import { Link } from "react-router-dom"
import { Card } from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { FavItem, Item, RootState } from "../../types/types";
import { useEffect, useState } from "react";

export function Dashboard(): JSX.Element {
    const favList = useSelector((state: RootState) => state.list.favList)
    const [favListData, setFavListData] = useState<FavItem[]>([])


    useEffect(() => {
        if (favList && favList.length > 0) {
            setFavListData(favList)
        }
    }, [favList])
    return (
        <div className="" id="dashboard-page">
            <div className="navigation-container">
                <h2>Favourites</h2>
                <Link to="/list"> {"Go to listing page >"} </Link>
            </div>
            <div className="card-list-container">
                {
                    favListData && favListData.length > 0 ? favListData.map((item : FavItem, index :number) => {
                        return <Card key={index} id={item.id} displayIcon={false} title={item.title} imageUrl={item.imageUrl} />
                    }) : <p>No Data</p>
                }
            </div>
        </div>
    );

}