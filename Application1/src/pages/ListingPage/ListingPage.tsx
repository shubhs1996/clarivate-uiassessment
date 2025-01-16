
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { Card } from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { updateFavData, updateListData } from "../../redux/action/action";
import { FavItem, Item, RootState } from "../../types/types";



export function ListingPage() {
    const dispatch = useDispatch()
    const data = useSelector((state: RootState) => state?.list?.data)
    const favList = useSelector((state: RootState) => state?.list?.favList)
    const [photos, setPhotos] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [noMoreLoading, setNoMoreLoading] = useState<boolean>(false)
    const [isListAvailable, setIsListAvailable] = useState<boolean>(true)

    const observer: React.MutableRefObject<IntersectionObserver> = useRef();


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const fetchPhotos = async (pageNumber:number) => {
        setLoading(true);
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${pageNumber}&_limit=10`
        );
        const data = await response.json();
        if (data.length === 0) {
            setNoMoreLoading(true)
        }
        let tempPhotos = [...photos, ...data]
        let payload = { listArr: [...tempPhotos], page: pageNumber }
        dispatch(updateListData(payload))

        setPhotos((prevPhotos) => [...prevPhotos, ...data]);

        setLoading(false);
    };

    useEffect(() => {
        console.log("calling useEffect" ,data)
        if (data && isListAvailable) {
            if (data && data.listArr.length>0) {
                const { listArr, page } = data
                setPhotos([...listArr])
                setPage(page)
            } else {
                fetchPhotos(1)
            }
            setIsListAvailable(false)
        }
    }, [data]);

    const lastPhotoElementRef = (node:HTMLDivElement) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {

                let pageNumber = page + 1
                setPage((prevPage) => prevPage + 1);
                fetchPhotos(pageNumber)

            }
        });

        if (node) observer.current.observe(node);
    };

    const handleUpdateFav = (data: FavItem) => {
        dispatch(updateFavData(data))
    }

    return (<div className="" id="listpage-container">
        <div className="navigation-container">
            <h2>List Page</h2>
            <Link to="/" > {"< Back"}</Link>
        </div>

        <div className="card-list-container">
            {photos && photos.length > 0 ? photos.map((photo, index) => {
                if (photos.length === index + 1) {
                    return (
                        <div ref={!noMoreLoading ? lastPhotoElementRef : null}>
                            <Card isFav={(() => {
                                let index = favList.findIndex(item => item.id === photo.id)
                                return index === -1 ? false : true
                            })()} id={photo.id} handleFav={handleUpdateFav} displayIcon={true} imageUrl={photo.thumbnailUrl} title={photo.title} />
                        </div>
                    );
                } else {
                    return (
                        <Card isFav={(() => {
                            let index = favList.findIndex(item => item.id === photo.id)
                            return index === -1 ? false : true
                        })()} id={photo.id} handleFav={handleUpdateFav} displayIcon={true} imageUrl={photo.thumbnailUrl} title={photo.title} />
                    );
                }
            }) : !loading && <p>No Data available</p>}
        </div>
        {loading && <p>Loading more photos...</p>}



    </div>
    );
}