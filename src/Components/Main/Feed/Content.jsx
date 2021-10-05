import React, { useEffect, useState, useContext } from "react";

import { Post } from "./Post/Post.jsx";
import { Data } from '../../../Context/context.js';

export const Contents = () => {
  const [refresh, setRefresh] = useState(false);
  const {data} = useContext(Data);

  useEffect(() => {
    setRefresh(!refresh);
  }, []);

  // make the posts in descending order
  let posts = [];
  for(let i = data?.getAllPosts.length - 1; i >= 0; --i) {
    posts.push(data?.getAllPosts[i]);
  }

  return (
      <div className="mt-4">
        { posts?.map((post, idx) => {
            return <Post data={post} key={idx} />
          }) }
      </div>
  );
};
