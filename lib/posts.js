import node from "node-fetch";

// Django APIサーバー
// const SERVERURL = "http://127.0.0.1:8000/";

// 投稿一覧を取得
export async function getAllPostsData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/post/`)
  );
  const posts = await res.json();
  return posts;
}

// 投稿一覧のIDを取得
export async function getAllPostIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/post/`)
  );
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 投稿詳細を取得
export async function getPostData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/post/${id}/`)
  );
  const post = await res.json();
  return post;
}
