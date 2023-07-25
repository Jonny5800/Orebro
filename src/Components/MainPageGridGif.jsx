import React, { useState, useEffect } from 'react';
import axios from 'axios';

  const MainPageGridGif = ({style, numBtnClicks}) => {
  const [gifUrls, setGifUrls] = useState([]);
  const apiKey = 'hwRcQwF2Fc2MiIwqGFOrXv9a2KI2ECXQ';
  const search = 'Orebro Sweden';
  const gifsReceived = 10;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=${gifsReceived}`;

  useEffect(() => {
    const getGifs = async () => {
      try {
        const response = await axios.get(url);
        const gifData = response.data.data;
        const gifURLs = gifData.map((gif) => gif.images.original.url);
        setGifUrls(gifURLs);
      } catch (error) {
        console.log(`Gifs not loading...: ${error}`); 
      }
    };

    getGifs();
  },  [url,numBtnClicks]);

  return (
    <div className='gif-container'>
 
       {gifUrls.length > 0 && (
      <img className='theGif' src={gifUrls[Math.floor(Math.random() * gifUrls.length)]} alt="Gif" style={style} />
    )}
    </div>
  );
};

export default MainPageGridGif;



    
