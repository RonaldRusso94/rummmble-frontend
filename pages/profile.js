import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ProfileBanner from '../components/Profile/ProfileBanner';
import ProfileSidebar from '../components/Profile/ProfileSidebar';

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Profile Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className=" text-center text-white">
          <ProfileBanner />
          <ProfileSidebar />
        </main>
      </Layout>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
