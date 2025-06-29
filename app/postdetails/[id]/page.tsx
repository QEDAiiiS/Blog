import CardBtn from "@/app/components/CardBtn";
import React from "react";

// * ==================  POST INTERFACE  ==================
interface Post {
  id: number;
  title: string;
  body: string;
}

// * ==================  POST DETAILS PAGE  ==================
const PostDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;



  // * ==================  GET POST BY ID  ==================
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${productId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post: Post = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-5 pb-40">
      <div className=" container mx-auto">

{/* // * =======================  DISPLAY POST DETAILS ======================= */}
        <div className="my-7">
          <p className=" text-[var(--date-color)]">Sunday , 1 Jan 2023</p>
          <h1 className=" text-3xl font-bold py-3 ">{post.title}</h1>
          <img src="/img3.png" alt="blog details" className="w-full" />
          <p className=" text-gray-600 dark:text-gray-400 py-5">{post.body}</p>
        </div>


{/* // * =======================  STATIC ARICALS ======================= */}
        <div className="artical w-full my-4 text-center">
          <h3 className="font-bold max-w-2xl mx-auto py-5">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </h3>
          <img src="/artical-1.png" alt="" className="mx-auto" />
          <p className="max-w-xl mx-auto my-3">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </p>
          <p className=" text-start dark:text-gray-400 my-2">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate. <br />
            If you’ve been to New York City and have walked the streets, it is
            easy to figure out how to get from one place to another because of
            the grid system that the city is built on. Just as the
            predictability of a city grid helps locals and tourists get around
            easily, so do webpage grids provide a structure that guides users
            and designers alike. Because of their consistent reference point,
            grids improve page readability and scannability and allow people to
            quickly get where they need to go.
          </p>
        </div>

        <div className="artical w-full my-4 text-center">
          <h3 className="font-bold max-w-2xl mx-auto py-5">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </h3>
          <img src="/artical-2.png" alt="" className="mx-auto" />
          <p className="max-w-xl mx-auto my-3">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </p>
          <p className=" text-start dark:text-gray-400 my-2">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate. <br />
            If you’ve been to New York City and have walked the streets, it is
            easy to figure out how to get from one place to another because of
            the grid system that the city is built on. Just as the
            predictability of a city grid helps locals and tourists get around
            easily, so do webpage grids provide a structure that guides users
            and designers alike. Because of their consistent reference point,
            grids improve page readability and scannability and allow people to
            quickly get where they need to go.
          </p>
        </div>

        <div className="artical w-full my-4 text-center">
          <h3 className="font-bold max-w-2xl mx-auto py-5">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </h3>
          <img src="/artical-3.png" alt="" className="mx-auto" />
          <p className="max-w-xl mx-auto my-3">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </p>
          <p className=" text-start dark:text-gray-400 my-2">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate. <br />
            If you’ve been to New York City and have walked the streets, it is
            easy to figure out how to get from one place to another because of
            the grid system that the city is built on. Just as the
            predictability of a city grid helps locals and tourists get around
            easily, so do webpage grids provide a structure that guides users
            and designers alike. Because of their consistent reference point,
            grids improve page readability and scannability and allow people to
            quickly get where they need to go.
          </p>
        </div>

        <div className="artical w-full my-4 text-center">
          <h3 className="font-bold max-w-2xl mx-auto py-5">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </h3>
          <img src="/artical-1.png" alt="" className="mx-auto" />
          <p className="max-w-xl mx-auto my-3">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </p>
          <p className=" text-start dark:text-gray-400 my-2">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate.
          </p>
        </div>

        <div className="flex justify-between max-w-44">
          <CardBtn title={"Design"} color={"date-color"} />
          <CardBtn title={"Interface"} color={"presentationBtn-color"} />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
