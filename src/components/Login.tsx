import React, { useState } from 'react';

type Props = {
  setUser: (user: string) => void;
};

const Login: React.FC<Props> = ({ setUser }) => {
  const [username, setUsername] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input username"
          onChange={handleChange}
          value={username}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
