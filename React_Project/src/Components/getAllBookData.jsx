import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import bannerImage from "../Images/banner-image.jpg";

function GetAllBookData() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:5000/getAllBooksData/:category";
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
          const { Title, _id, AuthorName, Image, Description, Price, Categories } = post;
          return (
            <>
              <div className="h-auto w-full md:w-1/4 p-5 shadow-[0_3px_8px_rgb(0,0,256,0.50)] hover:shadow-[0_3px_8px_rgb(0,0,256,1)] hover:scale-105 rounded-md duration-700">
                <Link to={`ViewDetails/${_id}`}>
                  <img
                    className="rounded-md h-[250px] w-[250px] flex justify-center
                    items-center m-auto"
                    src={Image}
                    alt=""
                  />
                </Link>

                <div className="space-y-1">
                  <h3 className="font-bold text-center text-xl pt-8">
                    {Title}
                  </h3>
                  <h3 className="text-center text-xl">By - {AuthorName}</h3>
                  <div className="flex flex-row justify-center text-blue-500 text-xl">
                    <h1>*</h1>
                    <h1>*</h1>
                    <h1>*</h1>
                    <h1>*</h1>
                  </div>
                </div>
                  <div className="flex flex-row justify-center items-center gap-4 pb-5">
                    <h3 className="font-semibold text-lg"> ₹ {Price} /- </h3>
                    <button className="my-1 px-2 py-1 border-2 font-semibold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all rounded-2xl">
                      <Link to={`ViewDetails/${_id}`}>Buy Now</Link>
                    </button>
                  </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default GetAllBookData;
