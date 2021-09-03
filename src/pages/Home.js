import React, {useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const Home = () => {
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');
    const isShows = searchOption === 'shows';
    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result);
        })
    }
    const onKeyDown = e => {
        if(e.keyCode === 13){
            onSearch();
        }
    }

    const RenderResults = () => {
        if(results && results.length === 0){
            return <div>No results</div>
        }else if(results && results.length > 0){
            return results[0].show ? <ShowGrid data={results}/> : <ActorGrid data={results}/>
        }else{
            return;
        }
    }

    const onRadioChange = (e) => {
        setSearchOption(e.target.value);
    }
    return (
       <MainPageLayout>
           <SearchInput type="text" placeholder="search here" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>

           <RadioInputsWrapper>
               <div>
                <CustomRadio 
                label="Shows"
                id="shows-search"
                value="shows"
                checked={isShows}
                onChange={onRadioChange}
                />
               </div>
               <div>
               <CustomRadio 
                label="Actors"
                id="actors-search"
                value="people"
                checked={!isShows}
                onChange={onRadioChange}
                />
               </div>
           </RadioInputsWrapper>
           <SearchButtonWrapper>
           <button type="button" onClick={onSearch} >Search</button>
           </SearchButtonWrapper>
           {RenderResults()}
       </MainPageLayout>
    )
}

export default Home
