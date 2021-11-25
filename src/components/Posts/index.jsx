import { Post } from '../Post';
import { posts } from '../../posts.json';

import './styles.css';

export function Posts() {
  return (
    <ul>
      {posts.map((post) => {
        return <Post title={post.title} description={post.description} />;
      })}
    </ul>
  );
}
