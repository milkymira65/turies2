import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const Travel2 = (props) => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    async function getTravelLocation() {
      try {
        const results = await axios.get(
          `http://localhost:4001/trips?keywords=${props.search}`
        );
        setLocation(results.data.data);
      } catch (err) {}
    }
    getTravelLocation();
  }, [props.search]);

  console.log(location);
  return location.map((item) => {
    return (
      <Post
        title={item.title}
        photos={item.photos}
        url={item.url}
        description={item.description}
        tags={item.tags}
        setSearchLocation={props.setSearchLocation}
      />
    );
  });
};

export default Travel2;
