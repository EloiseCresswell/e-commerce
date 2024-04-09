"use client";
import Image from "next/image";
import Styles from "./styles.css";
export default function HeaderImage() {
  return (
    <>
      <div className="headerImage">
        <Image
          src="/houseplants_background.jpeg"
          width={1200}
          height={1000}
          alt="Picture of some houseplants"
          onError={(e) => console.error("Image Error:", e)}
        />
        <div className="headerImageText">
          <h1>Spring Into Life</h1>
          <h2>
            We have fast delivery, maximising the time you can have a spring in
            your step for
          </h2>
          {/* ?a repeatable button?? */}
        </div>
      </div>
    </>
  );
}
