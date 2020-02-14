import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

type Post = {
  content: string;
  image: FIXME_any;
  user: string;
};

const App = () => {
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login';
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} setPosts={setPosts} posts={posts} />
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

export default App;
