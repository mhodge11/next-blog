import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

export async function getStaticPaths() {
  const slugs = await getSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  console.log('[FirstPostPage] getStaticProps():', slug);
  const post = await getPost(slug);
  return { props: { post } };
}

function PostPage({ post }) {
  console.log('[FirstPostPage] rendered');
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
