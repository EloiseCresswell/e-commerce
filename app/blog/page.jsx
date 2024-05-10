"use client";
import React from "react";
import "./Blog.css";
import BlogCard from "./BlogCard.jsx";

export default function Trial() {
  return (
    <>
      <div className="BlogHeadings">
        <h1>Advice Blog</h1>
        <br />
        <h2>Recent Blogs</h2>
        <p>
          {" "}
          Our advice blog is your go-to destination for all things houseplants.
          From troubleshooting common issues to discovering new species to add
          to your indoor jungle, we're here to cultivate your love for greenery
          and help you foster a thriving plant-filled sanctuary within your
          home.
        </p>
      </div>

      <div className="BlogCard">
        <BlogCard
          className={"BlogCard__Carousel__right"}
          width={500}
          height={500}
          imageSource={"/images/blog1.webp"}
        />
        <div className="BlogCard__left">
          <BlogCard
            className={"BlogCard__Carousel__left"}
            width={300}
            height={200}
            imageSource={"/images/blog2.webp"}
          />
          <BlogCard
            className={"BlogCard__Carousel__left"}
            width={300}
            height={200}
            imageSource={"/images/blog3.jpeg"}
          />
        </div>
      </div>
      <p className="BlogFinalPara">
        Are you a green enthusiast eager to share your own plant journey with
        our community? We welcome guest bloggers to contribute their insights,
        experiences, and tips to our growing hub of plant wisdom. If you're
        passionate about houseplants and have a story to tell or advice to
        share, we'd love to hear from you! Simply reach out to us at XXX@XXX.com
        to learn more about how you can become a part of our flourishing blog.
        Let's cultivate inspiration together!
      </p>
    </>
  );
}
