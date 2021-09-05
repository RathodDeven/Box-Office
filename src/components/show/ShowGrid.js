import React, { useCallback } from 'react'
import ShowCard from './ShowCard'

import { FlexGrid } from '../styled'
import { useShows } from '../../misc/custom-hooks'
import IMG_PLACEHOLDER from '../../images/not-found.png';


const ShowGrid = ({data}) => {
    const [starredShows, dispatchStarredShows] = useShows();
    return (
        <FlexGrid>
            {
                data.map( ({ show }) => {
                const isStarred = starredShows.includes(show.id);

                const onStarClick = useCallback( () => {
                    if(isStarred){
                        dispatchStarredShows({type: 'REMOVE', showID: show.id});
                    }else{
                        dispatchStarredShows({type: 'ADD', showID: show.id});
                    }
                },[isStarred,show.id])
                return(
                    
                <ShowCard 
                key={show.id} 
                id={show.id} 
                name={show.name} 
                image={show.image ? show.image.medium : IMG_PLACEHOLDER} 
                summary= {show.summary}
                onStarClick = {onStarClick}
                isStarred = {isStarred}/>
                )
}
                )
            }
        </FlexGrid>
    )
}

export default ShowGrid
