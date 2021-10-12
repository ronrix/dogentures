import React, { useEffect, useState, useContext } from "react";

import { Post } from "./Post/Post.jsx";
import { Data } from '../../../Context/context.js';

export const Contents = ({setIsNewPostFieldShow, isNewPostFieldShow}) => {
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
        { posts.length !== 0  ? posts?.map((post, idx) => {
            return <Post data={post} key={idx} />
        })  : <div className="text-center mt-10">
                <h2>There is no posts</h2>
                <button onClick={() => setIsNewPostFieldShow(true)} className="p-2 text-l bg-d">be the first one to post!</button>
              </div>
        }
      </div>
  );
};
