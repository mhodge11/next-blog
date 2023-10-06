import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
  const posts = await getPosts();
  return { props: { posts } };
}

function HomePage({ posts }) {
  console.log('[HomePage] rendered');
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
