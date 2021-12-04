import Image from "next/image";
import Head from "next/head";
import Post from "../components/post/post";
import { getAllPostsData } from "../lib/posts";

const Home = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>NextJS Project</title>
      </Head>
      <div className="mb-10 p-3 border rounded">
        <Image
          className="object-cover rounded"
          src="/top.jpg"
          alt="top"
          width={1280}
          height={500}
        />
      </div>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="text-lg mb-3">BLOG POSTS</div>
        <div className="boader w-14"></div>
      </div>
      <div className="flex flex-wrap -m-4 mb-5">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

const getStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
    revalidate: 3,
  };
};

export default Home;
export { getStaticProps };
