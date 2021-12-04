// [id]をすることで動的なルーティングが実現
import { useRouter } from "next/dist/client/router";
import { getAllPostIds, getPostData } from "../../lib/posts";

const PostData = ({ post }) => {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="space-y-5 w-full">
        <div className="flex justify-center flex-col items-center mb-5">
          <h1 className="text-3xl mb-3 font-bold">{post.title}</h1>
          <p className="mb-3">{post.created_at}</p>
          <div className="border w-14"></div>
        </div>
        <p className="whitespace-pre-wrap">{post.content}</p>
      </div>
    </>
  );
};

// getStaticPaths関数はSSG用の関数で、動的なルーティングの利用時に静的ファイルを生成するもの
// 投稿一覧のIDを取得
const getStaticPaths = async () => {
  // IDを取得しpathsに格納し、どのpathそぷりレンダリングするのかを指定
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  };
};

// 投稿詳細のデータを取得
const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
};

export default PostData;
export { getStaticPaths, getStaticProps };
