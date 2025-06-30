import React from "react";
import CardBtn from "../_components/CardBtn";

// * =======================  RESENT BLOGS COMPONENT =======================
const ResentBlogs = () => {
  return (
    <div className="max-w-6xl mx-auto px-5">
      <h3 className=" text-xl font-bold my-7">Resent blog posts</h3>
      <div>
        <div className=" grid  md:grid-cols-1 lg:grid-cols-2 ">
          {/* //* ==================  LEFT CARD  ==================  */}
          <div className=" card lg:pr-3">
            <div className="px-0 card-body ">
              <img src="/img1.png" alt="resent blog" />
              <p className=" text-[var(--date-color)] ">
                Olivia Rhye • 1 Jan 2023
              </p>
              <h2 className=" card-title">UX review presentations</h2>
              <p className="  text-gray-500">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div className=" card-actions">
                <CardBtn title="Design" color="date-color" />
                <CardBtn title="Research" color="researchBtn-color" />
                <CardBtn title="Presentation" color="presentationBtn-color" />
              </div>
            </div>
          </div>

          {/* //* ==================  RIGHT 2 CARDS  ==================  */}
          <div className="lg:pl-3">
            <div className="card lg:h-6/12">
              <div className="flex card-body px-0">
                <div className="md:flex">
                  <div className="lg:mr-3 md:w-6/12 md:mr-5">
                    <img src="/img6.png" alt="resent blog" className="w-full" />
                  </div>

                  <div className="md:w-6/12 ">
                    <p className=" text-[var(--date-color)] my-3 md:my-0">
                      Olivia Rhye • 1 Jan 2023
                    </p>
                    <h2 className=" card-title mb-2">
                      UX review presentations
                    </h2>
                    <p className=" card text-gray-500 my-3">
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
                    </p>
                    <div className=" card-actions">
                      <CardBtn title="Design" color="date-color" />
                      <CardBtn title="Research" color="researchBtn-color" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card lg:h-6/122">
              <div className="flex card-body px-0">
                <div className=" md:flex">
                  <div className="lg:mr-3 md:w-6/12 md:mr-5">
                    <img src="/img2.png" alt="resent blog" className="w-full" />
                  </div>

                  <div className="md:w-6/12 ">
                    <p className=" text-[var(--date-color)] my-3 md:my-0">
                      Olivia Rhye • 1 Jan 2023
                    </p>
                    <h2 className=" card-title mb-2">
                      UX review presentations
                    </h2>
                    <p className=" card text-gray-500 my-3 ">
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
                    </p>
                    <div className=" card-actions">
                      <CardBtn title="Design" color="date-color" />
                      <CardBtn title="Research" color="researchBtn-color" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //* ==================  BOTTOM Card  ==================  */}
        <div className=" card">
          <div className=" card-body px-0">
            <div className=" lg:flex">
              <div className=" lg:w-6/12 lg:pr-3">
                <img src="/img3.png" alt="resent blog" className="w-full" />
              </div>
              <div className="flex flex-col lg:w-6/12 lg:pl-3">
                <p className=" text-[var(--date-color)] my-2 lg:my-0">
                  Olivia Rhye • 1 Jan 2023
                </p>
                <h2 className=" card-title mb-3">UX review presentations</h2>
                <p className=" card text-gray-500 mb-3 lg:mb-0">
                  A grid system is a design tool used to arrange content on a
                  webpage. It is a series of vertical and horizontal lines that
                  create a matrix of intersecting points, which can be used to
                  align and organize page elements. Grid systems are used to
                  create a consistent look and feel across a website, and can
                  help to make the layout more visually appealing and easier to
                  navigate.
                </p>
                <div className=" card-actions">
                  <CardBtn title="Design" color="date-color" />
                  <CardBtn title="Research" color="researchBtn-color" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResentBlogs;
