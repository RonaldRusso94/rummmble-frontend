import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ProfileBanner from '../components/Profile/ProfileBanner';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import Followers from '../components/Profile/ProfileDetails/Followers';

const Profile = () => {
  const [profileBannerNav, setProfileBannerNav] = useState('followers');

  useEffect(() => {
    console.log(profileBannerNav);
  }, [profileBannerNav]);

  const content = () => {
    if (profileBannerNav === 'followers') {
      return <Followers />;
    }
    // return <Followers />;
  };

  return (
    <div>
      <Head>
        <title>Profile Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className=" text-center text-white">
          <ProfileBanner
            profileBannerNav={profileBannerNav}
            setProfileBannerNav={setProfileBannerNav}
          />
          <div className="flex flex-row w-full">
            <ProfileSidebar />
            {content()}
          </div>
        </main>
      </Layout>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Profile;