import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import PostJob from "../components/pages-menu/post-company";

const index = () => {
  return (
    <>
      <Seo pageTitle="기업 판매하기" />
      <PostJob />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
