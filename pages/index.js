import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="h-screen text-center ">
          <p>Main Content</p>
          <div className="w-6/12"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ducimus quam dicta cupiditate tempore eos ea accusamus labore quis, voluptatem quod. Distinctio beatae perferendis quia rem soluta velit eaque natus.</p></div>
        </main>
      </Layout>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
