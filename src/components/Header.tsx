import React from 'react';

type Props = {
  user: string;
  setUser: (user: string) => void;
};

const Header: React.FC<Props> = ({ user, setUser }) => {
  return (
    <div>
      Welcome, {user}!<button onClick={() => setUser('')}>Logout</button>
    </div>
  );
};

export default Header;
