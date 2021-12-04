import Link from "next/link";

const Post = ({ post }) => {
  // 引数で一つずつ投稿データを貰うよう処理
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
        <img alt="post" className="object-cover" src={post.image} />
        <div className="text-center my-4">
          <p>{post.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
