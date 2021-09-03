import React, {useState , useEffect} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { useShows } from '../misc/custom-hooks'
import { apiGet } from '../misc/config'
import ShowGrid from '../components/show/ShowGrid'
const Starred = () => {
    const [starred] = useShows();
    const [shows,setShows] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(starred &&  starred.length > 0){
            const promises = starred.map(showID => apiGet(`/shows/${showID}`));
            Promise.all(promises)
            .then(apiData => apiData.map(show => ({show})))
            .then(res => {
                setShows(res);
                setIsLoading(false);
            }).catch(
                err => {
                    setError(err);
                    setIsLoading(false);
                }
            )
        }else{
            setIsLoading(false);
        }
    }, [])
    return (
        <MainPageLayout>
                {isLoading && <div>Shows are still loading... </div>}
                {error && <div>Something went wrong...</div>}
                {!isLoading && !shows && <div>You have no starred shows</div>}
                {!isLoading && !error && shows && <ShowGrid data={shows}/>}
            </MainPageLayout>
    )
}

export default Starred
