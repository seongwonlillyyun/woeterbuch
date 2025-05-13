import React from 'react';
import { useState, useEffect } from 'react';

type Props ={
    query:string,
    setQuery : (value:string) => void,
    handleKeyPress :(value:React.KeyboardEvent<HTMLInputElement>) => void,
    handleSearch: () => void;
}

export const Searchbar = ({query,setQuery,handleKeyPress,handleSearch}:Props) => {



    return(
    <>
        <div className='searchbox'>
             <input type="text" 
            placeholder='단어를 입력 해 주세요'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
        />
            <button value='false'
            onClick={handleSearch}>검색</button>
        </div>
       
    </>
  );
}
