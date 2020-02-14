import React from 'react';

type Props = {
  image: FIXME_any;
  content: string;
  user: string;
};

const Post: React.FC<Props> = ({ image, content, user }) => {
  return (
    <React.Fragment>
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
  );
};

export default Post;
