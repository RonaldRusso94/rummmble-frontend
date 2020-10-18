import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ProfileBanner from '../components/Profile/ProfileBanner';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ProfileCard from '../components/Profile/ProfileDetails/ProfileCard.js';
import ProjectCard from '../components/Profile/ProfileDetails/ProjectCard.js';

const Profile = () => {
  const [profileBannerNav, setProfileBannerNav] = useState('followers');

  useEffect(() => {
    console.log(profileBannerNav);
  }, [profileBannerNav]);

  /* just a placeholder value, have to dynamically load cards in button is clicked at the
  bottom that says load more/all) if there are large amount */
  const amount = 20;

  const content = () => {
    if (profileBannerNav === 'followers') {
      return Array(amount).fill(<ProfileCard />);
    }
    if (profileBannerNav === 'following') {
      return Array(amount).fill(<ProfileCard />);
    }
    if (profileBannerNav === 'projects') {
      return Array(amount).fill(<ProjectCard title="Travel Website" description="Do you have trouble staying in touch with your" />);
    }
    return undefined;
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
            amount={amount}
          />
          <div className="flex flex-row w-full">
            <ProfileSidebar />
            <div className="flex-grow w-2/3 flex flex-wrap justify-evenly bg-red-400 py-8 px-2">
              {content()}
            </div>
          </div>
        </main>
      </Layout>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Profile;
