import React from "react";

function Articles({ articles }) {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((prev) => (
            <tr data-testid="article" key={prev.title}>
              <td data-testid="article-title">{prev.title}</td>
              <td data-testid="article-upvotes">{prev.upvotes}</td>
              <td data-testid="article-date">{prev.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
