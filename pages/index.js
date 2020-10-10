import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-900 h-screen text-center text-white">
        <p>Main Content</p>
      </main>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
