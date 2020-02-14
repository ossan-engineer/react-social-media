import React, { useState, useRef } from 'react';

type Post = {
  content: string;
  image: FIXME_any;
  user: string;
};

type Props = {
  user: string;
  handleAddPost: (post: Post) => void;
};

const CreatePost: React.FC<Props> = ({ user, handleAddPost }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imageInputRef = useRef<FIXME_any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = { content, image, user };
    handleAddPost(post);
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
