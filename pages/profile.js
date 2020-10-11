import Head from "next/head";
import Layout from "../components/layout/Layout";
import ProfileThumbnail from "../components/layout/Profile/ProfileThumbnail";
import ProfileSidebar from "../components/layout/Profile/ProfileSidebar";

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Profile Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="h-screen text-center text-white">
          <ProfileThumbnail />
          <ProfileSidebar />
        </main>
      </Layout>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
