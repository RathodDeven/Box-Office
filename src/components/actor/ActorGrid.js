import React from 'react'
import { FlexGrid } from '../styled'
import ActorCard from './ActorCard'
import IMG_PLACEHOLDER from '../../images/not-found.png';


const ActorGrid = ({data}) => {
    return (
        <FlexGrid>
            {
                data.map( ({person}) => 
                    <ActorCard 
                        key={person.id}
                        name={person.name}
                        country={person.country ? person.country.name : null}
                        birthday={person.birthday}
                        deathday={person.deathday}
                        gender={person.gender}
                        image={person.image ? person.image.medium : IMG_PLACEHOLDER}
                        />)
            }
        </FlexGrid>
    )
}

export default ActorGrid
