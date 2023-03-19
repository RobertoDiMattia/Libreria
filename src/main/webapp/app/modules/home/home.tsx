import React from 'react';
import { GetLibri } from '../api/get-libri';
import { PostLibri } from '../api/post-libri';
import { PutLibri } from '../api/put-libri';
import { DeleteLibri } from '../api/delete-libri';
import { GetFiveLibri } from '../api/get-five-libri';

const Home = () => {
  return (
    <div>
      <GetFiveLibri />
      <GetLibri />
      <PostLibri />
      <PutLibri />
      <DeleteLibri />
    </div>
  );
};

export default Home;
