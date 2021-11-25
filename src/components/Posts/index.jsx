import { useEffect, useState } from 'react';
import { Post } from '../Post';
import { api } from '../../services/api';

import './styles.css';

export function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  }, []);

  return (
    <ul>
      {posts?.map((post) => {
        return <Post title={post.title} description={post.description} />;
      })}
    </ul>
  );
}
