import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewDetails() {
  let { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const SignUpDataBase = async () => {
      try {
        const url = `http://localhost:5000/books/${id}`;

        const books = await axios.get(url, {
          headers: {
            "my-api-key": `${sessionStorage.getItem("AccessToken")}`,
          },
        });

        setData(books.data.msg);
        if (books.status === false) window.alert("Invalid data!!!!");
      } catch (error) {
        window.alert(error.response.data.msg);
      }
    };
    SignUpDataBase();
  }, [id]);

  if (!data || !data[0]) return <div>No Data Found</div>;

  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen mt-5">
      <div>
        <img
          className="h-[400px] w-[350px] rounded-xl hover:scale-105 duration-300"
          src={data[0].Image}
          alt="book-image"
        />
      </div>

      <div className="flex flex-col items-center max-w-[800px] md:w-full">
        <div className="fle flex-row gap-3 ml-[600px]">
          <i className="fas fa-edit text-blue-300 text-2xl after:hover:scale-110 duration-300 mx-2"></i>
          <i className="fas fa-trash text-red-500 text-2xl after:hover:scale-110 duration-300"></i>
        </div>
        <h1 className="font-bold underline text-6xl">{data[0].Title}</h1>
        <h2 className="pt-[20px] px-[55px]">{data[0].Description}</h2>
        <h1 className="text-blue-300 font-semibold text-xl pt-[20px] underline">
          Main Info
        </h1>
        <div className="px-[40px] justify-center mt-4">
          <div className="flex gap-4">
            <h1 className="font-bold underline">Description </h1>
            <p> {data[0].Description}</p>
          </div>
          <div className="flex gap-3">
            <h1 className="font-bold underline">Author </h1>
            <p>{data[0].AuthorName}</p>
          </div>
          <div className="flex gap-3">
            <h1 className="font-bold underline">Price </h1>
            <p>₹ {data[0].Price} /-</p>
          </div>
          <div className="flex justify-start items-center mt-5">
          <button className="font-semibold bg-blue-300 p-3 rounded-xl hover:scale-105 hover:shadow-[0_3px_8px_rgb(0,0,0,0.75)] transition-all duration-300 text-md">
              <h1>Buy Now</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-600 h-[2px]">
        <hr />
    </div>
    </>
  );
}

export default ViewDetails;
