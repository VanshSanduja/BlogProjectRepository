import { useState, useEffect } from "react";
import axios from "axios";
// import bannerImage from "../Images/banner-image.jpg";

function GetAllBookData() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:5000/getAllBooksData";
        const getDataDB = await axios.get(url);
        setValue(getDataDB.data.msg);
        console.log(getDataDB.data.msg);
      } catch (error) {
        window.alert(error.response.data.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-[10px] px-5">
      <h1 className="text-2xl font-semibold text-center pt-5 pb-10">
        All Books
      </h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {value.map((post, id) => {
          const { Title, AuthorName, Image, Description } = post;

          console.log(Title, AuthorName, Image, Description);
          return <>
          
          <div className="h-[450px] w-full md:w-1/4 p-5 shadow-[0_3px_8px_rgb(0,0,256,0.25)] hover:shadow-[0_3px_8px_rgb(0,0,128,1)] rounded-md">
            <img className="rounded-md h-[250px] w-[250px] flex justify-center items-center m-auto" src={Image} alt="" />

            <div className="space-y-4">
              <h3 className="font-bold text-center text-xl pt-8">
                {Title}
              </h3>
              <h3 className="text-center text-xl">
                By - {AuthorName}
              </h3>
              <div className="flex flex-row justify-center text-blue-500 text-4xl">
                <h1>*</h1>
                <h1>*</h1>
                <h1>*</h1>
                <h1>*</h1>
              </div>
            </div>
          </div>
          </>
        })}
      </div>
    </div>
  );
}

export default GetAllBookData;
