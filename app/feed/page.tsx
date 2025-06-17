"use client";

import Link from "next/link";
import data from "../data/data.json";

export default function Feed() {
  // Test - set up the input below to filter by author name or title

  return (
    <div className="container feed">
      <h1 className="feedTitle">o2x - Feed</h1>

      <input
        type="text"
        placeholder="Filter posts..."
        className="filterInput"
      />

      <ul className="feedList">
        {data.feedPosts.map((post) => {
          const user = data.users.find((u) => u.id === post.user_id);

          return (
            <li key={post.id} className="feedItem">
              <div className="feedItemHeader">
                <img
                  src={user?.profile_image}
                  alt={`${user?.first_name ?? "Unknown"} ${
                    user?.last_name ?? "Author"
                  }`}
                  className="avatar"
                />
                <div>
                  <Link href={`/feed/${post.id}`} className="postTitleLink">
                    <h2 className="postTitle">{post.title}</h2>
                  </Link>
                  <p className="postAuthor">
                    {user
                      ? `${user.first_name} ${user.last_name}`
                      : "Unknown Author"}
                  </p>
                </div>
              </div>

              <Link href={`/feed/${post.id}`}>
                <div
                  className="postBody"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              </Link>

              <div className="categoryTags">
                {(() => {
                  try {
                    return post.categories.map((cat, index) => (
                      <span key={index} className="tag">
                        {cat}
                      </span>
                    ));
                  } catch (err) {
                    console.error("Category render failed:", err);
                    return <></>;
                  }
                })()}
              </div>

              {post.files.length > 0 && (
                <ul className="fileList">
                  {post.files.map((file) => (
                    <li key={file.id}>
                      <a href={file.file} target="_blank" rel="noreferrer">
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
