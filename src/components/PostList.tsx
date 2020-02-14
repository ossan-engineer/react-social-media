import React from 'react';

import Post from './Post';

type Props = {
  posts: Post[];
};

type Post = {
  content: string;
  image: FIXME_any;
  user: string;
};

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(({ content, image, user }: Post, index: number) => (
        <Post content={content} image={image} user={user} key={index} />
      ))}
    </>
  );
};

export default PostList;
