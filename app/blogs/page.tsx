"use client";

import dynamic from "next/dynamic";
// import { TextView } from "./_components/text-view";

const TextView = dynamic(() => import("./_components/text-view"), {
  ssr: false,
});

export default function BlogPage() {
  // const [listBlog, setListBlog] = useState<any>([]);
  // const [BlogsSelect, setBlogsSelect] = useState<any>("");
  // const [BlogsSelectContent, setBlogsSelectContent] = useState<any>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getBlogs();
  //     setListBlog(res);
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const getDatBlog = async () => {
  //     if (BlogsSelect === "") return;

  //     const res = await getBlogId(BlogsSelect);
  //     setBlogsSelectContent(res);
  //   };

  //   getDatBlog();
  // }, [BlogsSelect]);

  return (
    <main className="min-h-screen p-24">
      <h1>Blog Page</h1>
    </main>
  );
}
