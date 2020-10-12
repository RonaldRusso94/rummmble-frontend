import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Project from '../components/project/Project';

export default function ProjectPage() {
  return (
    <div>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Project />
      </Layout>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
