import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import useReadMore from "./useReadMore";

const Post = (props) => {
  console.log(props.description);

  const { isOpen, handlerRead } = useReadMore();

  const handlerKeyword = (keyword) => {
    props.setSearchLocation(keyword);
    console.log(keyword);
  };

  return (
    // <h1>{props.title}</h1>
    <>
      <div className="flex  flex-col items-center mt-10 mb-10 md:flex-row w-full">
        <div className=" w-[70%] h-[30%] md:w-[500px] md:h-[350px]">
          <img
            className="flex w-full h-full rounded-3xl mb-8 object-cover"
            src={props.photos[0]}
            alt={props.title}
          />
        </div>

        <div className="flex flex-col ml-14 md:w-[45%]">
          <a className="font-bold text-xl md:text-2xl" href={props.url}>
            {props.title}
          </a>
          <p className="mt-2 text-neutral-500 md:text-lg">
            {!isOpen
              ? props.description.slice(0, 100) + "..."
              : props.description}
            {/* {props.description.slice(0, 100)}... */}
          </p>
          <button
            className="text-cyan-500 underline flex "
            onClick={handlerRead}
          >
            อ่านต่อ
          </button>
          <div className="mt-1 text-neutral-500">
            หมวด
            {props.tags.map((keyword) => {
              return (
                <button
                  className="underline mx-2 "
                  onClick={() => handlerKeyword(keyword)}
                >
                  {keyword}
                </button>
              );
            })}
          </div>
          <div className="flex flex-row mt-3">
            <img
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-xl mr-5 object-cover"
              src={props.photos[1]}
              alt={props.title}
            />
            <img
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-xl mr-5 object-cover"
              src={props.photos[2]}
              alt={props.title}
            />
            <img
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-xl mr-5 object-cover"
              src={props.photos[3]}
              alt={props.title}
            />
          </div>
        </div>
        <div className="flex mt-10  items-center justify-center">
          <button
            className="mt-6 md:mt-28 md:ml-8 border-cyan-500  border-2 border-solid w-[50px] h-[50px] rounded-full"
            onClick={() => {
              navigator.clipboard.writeText(props.item.url);
            }}
          >
            <FontAwesomeIcon
              className="text-2xl text-cyan-400 "
              icon={faLink}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
