import Head from "next/head";
import Grid from "../components/layout/Grid";
import Layout from "../components/layout/Layout";

export default function Browse() {
  return (
    <div>
      <Head>
        <title>Browse Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="h-screen text-center">
          <div className="mt-16">
            <h1 className="text-5xl text-white font-medium">Browse Projects</h1>
            <div className="flex justify-evenly">
              <ul className="flex text-white justify-between">
                <li>Websites</li>
                <li>Apps</li>
                <li>Analytics</li>
                <li>Portfolios</li>
                <li>E-shops</li>
              </ul>
              <input placeholder="Search for a project..." />
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
