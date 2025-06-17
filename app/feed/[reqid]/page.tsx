"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import data from "../../data/data.json";
import Button from "../../components/Button";
import Link from "next/link";

type FeedPost = {
  id: number;
  title: string;
  body: string;
  created: string;
  user_id: number;
  files: {
    id: number;
    file: string;
    name: string;
  }[];
};

type User = {
  id: number;
  first_name: string;
  last_name: string;
  profile_image: string;
};

type FeedData = {
  feedPosts: FeedPost[];
  users: User[];
};

export default function FeedPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const numericId = Number(id);

  if (isNaN(numericId)) return notFound();

  const post = (data as FeedData).feedPosts.find((p) => p.id === numericId);
  if (!post) return notFound();

  const user = data.users.find((u) => u.id === post.user_id);

  return (
    <div className="container feed">
      <Link href="/feed" className="backLink">
        <Button color="primary" variant="filled">
          ← Back to Feed
        </Button>
      </Link>

      <ul className="feedList">
        <li className="feedItem">
          <div className="feedItemHeader">
            <img
              src={user?.profile_image}
              alt={`${user?.first_name} ${user?.last_name}`}
              className="avatar"
            />
            <div>
              <h2 className="postTitle">{post.title}</h2>
              <p className="postAuthor">
                {user?.first_name} {user?.last_name} ·{" "}
                {new Date(post.created).toLocaleString()}
              </p>
            </div>
          </div>

          <div
            className="postBody"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {post.files.length > 0 && (
            <ul className="fileList">
              {post.files.map((f) => (
                <li key={f.id}>
                  <a href={f.file} target="_blank" rel="noopener noreferrer">
                    <Button variant="link">{f.name}</Button>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
