import React, { useState } from "react";
import Head from "next/head";

import BrowseCategories from "../components/browse/BrowseCategories";
import Grid from "../components/layout/Grid";
import Layout from "../components/layout/Layout";

const categories = ["Websites", "Apps", "Analytics", "Portfolios", "E-shops"];

export default function Browse() {
  const [searchValue, setSearchValue] = useState("");
  function handleCategoryChange() {}
  return (
    <div>
      <Head>
        <title>Browse Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="h-screen text-center">
          <div className="mt-24">
            <h1 className="text-6xl text-white font-bold">Browse Projects</h1>
            <div className="w-3/4 mx-auto">
              <div className="flex mt-4 justify-center">
                <BrowseCategories
                  categories={categories}
                  handleChange={handleCategoryChange}
                />
              </div>
              <div className="flex justify-end">
                <input
                  className="text-lg bg-transparent placeholder-custom-2-gray placeholder-opacity-100 font-medium text-white"
                  placeholder="Search for a project..."
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                />
              </div>
            </div>

            <Grid className="text-white">
              <div>Welcome to rummmble</div>
              <div>this is a test grid</div>
              <div>it works responsively!</div>
            </Grid>
          </div>
        </main>
      </Layout>
    </div>
  );
}
