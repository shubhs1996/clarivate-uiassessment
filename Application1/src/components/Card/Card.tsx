
import { FaHeart } from "react-icons/fa";
import "./_card.scss"
import { Item } from "../../types/types";



interface CardProps {
    id: number;
    displayIcon: boolean;
    title: string;
    imageUrl: string;
    isFav?:boolean,
    handleFav? : (data :Item )=> void
}


export function Card({ id = 1, displayIcon, title, imageUrl, isFav ,handleFav }: CardProps): JSX.Element {

    let item = {
        id:id,
        title:title,
        imageUrl:imageUrl
    }

    title = "accusamus beatae ad facilis cum similique qui sunt"
    return (
        <div className="card-container" >
            {imageUrl && <div className="image-container">
                <img src={imageUrl} alt={title} />

                <div className="black-overlay"></div>
                <div className="content-box">
                    <div className="text">
                        <p>
                            {id}.
                        </p>
                        <p>
                            {`${title[0].toUpperCase()}${title.slice(1)}`}
                        </p>
                    </div>
                    {displayIcon && <FaHeart className="icon-heart" onClick={()=>handleFav(item)} color={isFav ? "red" : "white"} size={22} title={isFav ? "Remove from favourites": "Add to favourites"} />}
                </div>
            </div>}
        </div>

    );
}