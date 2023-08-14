import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import BlogListV3 from "../components/pages-menu/news";

const index = () => {
  return (
    <>
      <Seo pageTitle="성약사례" />
      <BlogListV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
