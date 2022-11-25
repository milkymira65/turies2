// import React, { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
// import useReadMore from "./useReadMore";

// const Travel = (props) => {
//   const [location, setLocation] = useState([]);

//   useEffect(() => {
//     async function getTravelLocation() {
//       try {
//         const results = await axios.get(
//           `http://localhost:4001/trips?keywords=${props.search}`
//         );
//         setLocation(results.data.data);
//         console.log("getdata");
//       } catch (err) {}
//     }
//     getTravelLocation();
//   }, [props.search]);

//   const handlerKeyword = (keyword) => {
//     props.setSearchLocation(keyword);
//     console.log(keyword);
//   };

//   return (
//     <>
//       {location.map((item, index) => {
//         return (
//           <div className="flex  flex-col items-center mt-10 mb-10 md:flex-row w-full">
//             <div className=" w-[70%] h-[30%] md:w-[500px] md:h-[350px]">
//               <img
//                 className="flex w-full h-full rounded-3xl mb-8 object-cover"
//                 src={item.photos[0]}
//                 alt={item.title}
//               />
//             </div>

//             <div className="flex flex-col ml-14 md:w-[45%]">
//               <a className="font-bold text-xl md:text-2xl" href={item.url}>
//                 {item.title}
//               </a>
//               <p className="mt-2 text-neutral-500 md:text-lg">
//                 {!isOpen
//                   ? item.description.slice(0, 100) + "..."
//                   : item.description}
//                 {/* {item.description.slice(0, 100)}... */}
//               </p>
//               <button
//                 className="text-cyan-500 underline flex "
//                 onClick={handlerRead}
//               >
//                 อ่านต่อ
//               </button>
//               <div className="mt-1 text-neutral-500">
//                 หมวด
//                 {item.tags.map((keyword) => {
//                   return (
//                     <button
//                       className="underline mx-2 "
//                       onClick={() => handlerKeyword(keyword)}
//                     >
//                       {keyword}
//                     </button>
//                   );
//                 })}
//               </div>
//               <div className="flex flex-row mt-3">
//                 <img
//                   className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-xl mr-5 object-cover"
//                   src={item.photos[1]}
//                   alt={item.title}
//                 />
//                 <img
//                   className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-xl mr-5 object-cover"
//                   src={item.photos[2]}
//                   alt={item.title}
//                 />
//                 <img
//                   className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-xl mr-5 object-cover"
//                   src={item.photos[3]}
//                   alt={item.title}
//                 />
//               </div>
//             </div>
//             <div className="flex mt-10  items-center justify-center">
//               <button
//                 className="mt-6 md:mt-28 md:ml-8 border-cyan-500  border-2 border-solid w-[50px] h-[50px] rounded-full"
//                 onClick={() => {
//                   navigator.clipboard.writeText(item.url);
//                 }}
//               >
//                 <FontAwesomeIcon
//                   className="text-2xl text-cyan-400 "
//                   icon={faLink}
//                 />
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Travel;
