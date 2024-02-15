import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import GifDisplayGrid from "./components/GifDisplayGrid/GifDisplayGrid";
import InputSearch from "./components/InputSearch/InputSearch";
import Lightbox from "./components/Lightbox/Lightbox";
import { getGifsBySearchInput } from "./services/gifSearchService";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [gifs, setGifs] = useState([]);
  const [showLighbox, setShowLightbox] = useState(false);
  const [currentGif, setCurrentGif] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    handleSearch(currentPage);
  }, [currentPage]);

  const handleSearch = async (page) => {
    const response = await getGifsBySearchInput(inputValue, page);

    setGifs(
      response.data.map((res) => ({
        id: res.id,
        original: res.images.original.url,
        downsized: res.images.fixed_height_small.url,
      }))
    );
  };

  const handleGifChange = (position) => {
    const { index } = currentGif;
    if (position === "next") {
      if (index === gifs.length - 1) {
        return;
      }
      setCurrentGif({ url: gifs[index + 1].original, index: index + 1 });
    } else {
      if (index === 0) {
        return;
      }
      setCurrentGif({ url: gifs[index - 1].original, index: index - 1 });
    }
  };

  return (
    <>
      <Typography variant="h1" fontWeight={700} fontSize={30}>
        GIF Search
      </Typography>
      <InputSearch
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={handleSearch}
      />
      <GifDisplayGrid
        gifsList={gifs}
        handleGifClick={(url, index) => {
          setShowLightbox(true);
          setCurrentGif({
            url,
            index,
          });
        }}
      />
      {showLighbox && (
        <Lightbox
          url={currentGif?.url}
          onArrowClick={handleGifChange}
          handleClose={() => setShowLightbox(false)}
        />
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          onClick={() => {
            if (currentPage === 0) return;
            setCurrentPage((prev) => prev - 1);
          }}
        >
          {"<"}
        </div>
        <div
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          {">"}
        </div>
      </div>
    </>
  );
}

export default App;
