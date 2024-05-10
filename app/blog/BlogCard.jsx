"use client";
import Image from "next/image";
import "./BlogCard.css";

export default function BlogCard({ height, width, className, imageSource }) {
  return (
    <>
      <div className={className}>
        <Image
          src={imageSource}
          width={width}
          height={height}
          alt="Picture of the author"
        />
        <div>
          <div className={className + "__writings"}>
            <div className={className + "__author_date"}>
              <h3>Author</h3>
              <h3>Date added</h3>
            </div>
            <h2>Title</h2>
            <p>gliuhgwhg eqgihqegpuh aeoihergoij</p>
            <div>
              <button
                onClick={() => {
                  console.log("this would link to another, suitable page");
                }}
              >
                Tag
              </button>
              <button
                onClick={() => {
                  console.log("this would link to another, suitable page");
                }}
              >
                Tag{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
