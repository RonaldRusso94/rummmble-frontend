import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Profile from '../components/Profile/Profile';

export default function ProfilePage() {
  return (
    <div>
      <Head>
        <title>Profile Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className=" text-center text-white">
          <Profile />
        </main>
      </Layout>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
};
