import { Suspense } from "react";
import FeaturedCollections from "../components/FeaturedCollections.server";
import Layout from "../components/Layout.server";

const Home = () => {
  return (
    <Layout>
      <Suspense>
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
};

export default Home;
