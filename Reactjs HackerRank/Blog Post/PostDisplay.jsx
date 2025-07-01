import React from "react";

function PostDisplay({ posts = [], onDeletePost }) {
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-box"
          data-testid={`post-item-${post.id}`}
        >
          <h3 data-testid={`post-title-${post.id}`}>{post.title}</h3>
          <p data-testid={`post-description-${post.id}`}>{post.description}</p>
          <button
            onClick={() => onDeletePost(post.id)}
            data-testid={`delete-button-${post.id}`}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
