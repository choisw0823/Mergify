import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import CompanyList from "../components/Company-pages2";

const index = () => {
  return (
    <>
      <Seo pageTitle="피인수 기업 검색" />
      <CompanyList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
