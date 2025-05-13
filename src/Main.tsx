import React, { useEffect } from 'react';
import {Searchbar} from './Components/Searchbar';
import { useState } from 'react';
import './page.css'

interface Word {
    word:string;
    meaning:string;
    article?:string;
}
const Main = () => {
  const [query, setQuery] = useState('')
  const [wordList, setWordList] = useState<Word[]>([]);
  const [result, setResult] = useState<Word | null>(null);

        useEffect(()=>{
            fetch("/words.json")
                .then((res)=>res.json())
                .then((data)=>setWordList(data));
        },[])
         const handleSearch = () => {
            const found = wordList.find(
                (entry) => entry.word.toLowerCase() === query.toLowerCase()
        );
            setResult(found || null);
        };
          const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };
return(
    <div className='container'>
        <Searchbar 
                    query={query}
                    setQuery={setQuery}
                    handleKeyPress={handleKeyPress}
                    handleSearch={handleSearch}
                    />
        <img className='img' 
          src={process.env.PUBLIC_URL + '/mainimg.jpg'} alt="Main" />
           {result && (
        <div className="mt-4 text-center">
          <p>
            <strong>단어:</strong> {result.article ? `${result.article} ` : ""}
            {result.word}
          </p>
          <p>
            <strong>뜻:</strong> {result.meaning}
          </p>
        </div>
      )}
    </div>

  );
}
export default Main;