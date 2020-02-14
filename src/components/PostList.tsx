import React from 'react';

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
        <React.Fragment key={index}>
          {image && (
            <img
              style={{ height: 100, width: 200, objectFit: 'contain' }}
              src={URL.createObjectURL(image)}
              alt="Post Contain"
            />
          )}
          <p>{content}</p>
          <div>{user}</div>
        </React.Fragment>
      ))}
    </>
  );
};

export default PostList;
