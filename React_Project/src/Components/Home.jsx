import React from "react";
// import Images from "../Images/Book-Background.jpg";
// import axios from 'axios';
import Banner from './Banner.jsx';
import GetAllBookData from './getAllBookData.jsx';

function Home() {
  return (
    <div>
     
      <Banner />
      <GetAllBookData />
    </div>
  );
}

export default Home;
