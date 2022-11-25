import "./App.css";
import Travel2 from "./components/Travel2";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";

function App() {
  const [searchLocation, setSearchLocation] = useState("");
  const handlerSearch = (event) => {
    setSearchLocation(event);
  };

  return (
    <div className=" flex flex-col p-10 md:p-16 items-center ">
      <h1 className="text-sky-500 text-5xl text-bold mb-5">เที่ยวไหนดี</h1>

      <label className="flex flex-col w-full" forHTML="search">
        ค้นหาที่เที่ยว
        <DebounceInput
          debounceTimeout={500}
          value={searchLocation}
          className="border-b-2 text-center  mb-7"
          type="text"
          id="search"
          name="search"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          onChange={(event) => handlerSearch(event.target.value)}
        />
      </label>

      {/* travel blog */}
      <Travel2 search={searchLocation} setSearchLocation={setSearchLocation} />
    </div>
  );
}

export default App;
