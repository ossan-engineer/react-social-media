import React, { useState, useRef } from 'react';

type Props = {
  user: string;
  setPosts: (posts: FIXME_any[]) => void;
  posts: FIXME_any[];
};

const CreatePost: React.FC<Props> = ({ user, setPosts, posts }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imageInputRef = useRef<FIXME_any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = { content, image, user };
    const newPosts = [post, ...posts];
    setPosts(newPosts);
    setContent('');
    imageInputRef.current.value = '';
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
          value={content}
        />
        <input
          type="file"
          onChange={(e: FIXME_any) => setImage(e.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
