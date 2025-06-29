import React from "react";
import CardBtn from "./CardBtn";

export default function BlogCard({
  title,
  body,
  image
}: {
  title: string;
  body: string;
  image: string
}) {
  return (
    <div className="card h-full ">
      <div className="card-body ">
        <img src={image} alt="resent blog" />
        <p className=" text-[var(--date-color)] ">Olivia Rhye • 1 Jan 2023</p>
        <h2 className=" card-title">{title}</h2>
        <p className="  text-gray-500 ">{body}</p>
        <div className="card-actions">
          <CardBtn title="Design" color="date-color" />
          <CardBtn title="Research" color="researchBtn-color" />
          <CardBtn title="Presentation" color="presentationBtn-color" />
        </div>
      </div>
    </div>
  );
}
