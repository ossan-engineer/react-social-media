import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

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
      <PostList posts={posts} />
    </>
  );
};

export default App;
