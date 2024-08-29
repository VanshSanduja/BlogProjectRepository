import React from "react";

function createBookData() {
  return (
    <div className="signUp flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat h-screen">
      <h1 className="text-blue-300 font-semibold text-4xl underline mt-1">
        Publish A Book
      </h1>
      <div className="flex justify-center items-center p-5">
        <div className="bg-blue-300 p-5 ring-2 rounded ring-white h-auto w-[500px] mt-8">
          <div className="mb-2">
            <h1 className="font-medium">Choose A Picture</h1>
            <input type="file" name="Book-Image" id="" />
          </div>
          <div className="mb-2">
            <label className="font-medium mb-2">
              Enter the Title of Your Book
            </label>
            <input className="rounded ring-2 ring-black w-full" type="text" />
          </div>
          <div className="mb-2">
            <label className="font-medium mb-2">
              Enter the Description of Your Book
            </label>
            <textarea
              className="rounded ring-2 ring-black w-full"
              type="text"
            />
          </div>
          <div className="mb-2">
            <h1 className="font-medium">Enter the Price of Your Book (in ₹)</h1>
            <input className="rounded ring-2 ring-black w-full" type="number" />
          </div>
          <button className="font-semibold bg-white p-3 rounded-lg hover:scale-105 shadow-[0_3px_8px_rgb(0,0,0,0.75)] transition-all duration-300 text-md mt-3">
              <h1>Publish</h1>
            </button>
        </div>
      </div>
    </div>
  );
}

export default createBookData;

// import React from "react";

// function createBookData() {
//   return (
//     <div className="signUp  bg-center flex flex-col h-screen bg-cover bg-no-repeat items-center">
//       <h1 className="text-white font-semibold text-4xl mt-5 underline">
//         Publish A Book
//       </h1>
//       <div className="mt-8 w-auto bg-blue-300 p-5 ring-2 rounded ring-white">
//         <table className="w-full">
//           <tr>
//             <td className="font-medium">Choose A Picture</td>
//             <td>
//               <input type="file" name="Book-Image" id="" />
//             </td>
//           </tr>
//           <tr>
//             <td className="font-medium">Enter the Title of Your Book</td>
//             <td>
//               <input className="rounded ring-2 ring-black w-full" type="text" />
//             </td>
//           </tr>
//           <tr className="">
//             <td className="font-medium ">Enter the Description of Your Book &nbsp;&nbsp;</td>
//             <td>
//               <textarea
//                 className="ring-2 ring-black rounded w-full"
//                 name="description"
//                 id=""
//               ></textarea>
//             </td>
//           </tr>
//           <tr>
//             <td className="font-medium">Enter the Price of Your Book (in ₹)</td>
//             <td>
//               <input
//                 className="rounded ring-2 ring-black w-full"
//                 type="number"
//               />
//             </td>
//           </tr>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default createBookData;
