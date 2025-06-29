import Link from "next/link";
import React from "react";
import Hero from "./Hero";
import ResentBlogs from "./ResentBlogs";
import BlogCard from "../components/BlogCard";




// * ==================  POST INTERFACE  ==================
interface Post {
  id: number;
  title: string;
  body: string;
}


 // * =======================  IMAGES ARRAY  ======================= 
const images: string[] = [
  "/img4.png",
  "/img7.png",
  "/img2.png",
  "/img7.png",
  "/img5.png",
  "/img6.png",
  "/img7.png",
  "/img4.png",
  "/img2.png",
  "/img3.png",
];


// * ==================  POSTS PAGE  ==================
const Posts = async () => {


  // * ==================  GET 10 POST  ==================
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const posts: Post[] = await res.json();

  return (
    <div className=" container mx-auto">

 {/* // * =======================  HERO SECTION COMPONENT =======================  */}
      <Hero />

 {/* // * =======================  REASENT BLOGS SECTION COMPONENT =======================  */}
      <ResentBlogs />


 {/* // * =======================  ALL BLOGS SECTION =======================  */}
      <div className="max-w-6xl mx-auto px-5 ">
        <h1 className="text-xl font-bold my-7">All blog posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={post.id} className="my-3">
              <Link href={`/postdetails/${post.id}`}>
                <BlogCard title={post.title} body={post.body} image={images[index]}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
