import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    // Enable vertical snap scrolling on the main container
    <main
      className={`${lora.className} h-screen snap-y snap-mandatory overflow-y-scroll`}
    >
      {/* Section 0 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-start md:p-24"
        id="0"
      >
        <div className="w-full md:w-1/3">
          <div className="text-6xl md:text-9xl">
            Open
            <br />
            Health
            <br />
            Data
          </div>
          <div className="mt-4 text-xl">
            The case for a more open, patient oriented health data system
          </div>
          <div className="mt-4 text-lg italic">By Fulton Browne</div>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("1")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>

      {/* Section 1 with snap alignment */}
      <div
        className="relative flex min-h-screen w-full snap-start content-center justify-center p-4"
        id="1"
      >
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full justify-center text-5xl md:text-7xl">
            The modern world is built on data
          </div>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("2")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>

      {/* Section 2 with snap alignment */}
      <div
        className="relative flex min-h-screen w-full snap-start content-center justify-center p-4"
        id="2"
      >
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full justify-center text-center text-2xl italic">
            Building a healthcare data access system that prioritizes the
            patient is a necessary step in bringing the healthcare system fully
            into the 21st century.
          </div>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("3")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>

      {/* Section 3 with snap alignment */}
      <div
        className="relative flex min-h-screen w-full snap-start content-center justify-center p-4"
        id="3"
      >
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full justify-center text-center text-2xl italic"></div>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("4")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      {/* Section 4 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-start md:p-24"
        id="4"
      >
        {/* Content for section 4 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("5")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      {/* Section 5 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-start md:p-24"
        id="5"
      >
        {/* Content for section 5 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("6")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      {/* Section 6 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-start md:p-24"
        id="6"
      >
        {/* Content for section 6 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("7")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      {/* Section 7 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-start md:p-24"
        id="7"
      >
        {/* Content for section 7 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("8")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      {/* Section 8 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-start md:p-24"
        id="8"
      >
        {/* Content for section 8 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("9")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>

      {/* Section 9 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-start md:p-24"
        id="9"
      >
        {/* Content for section 9 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("10")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      {/* Section 10 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-start md:p-24"
        id="10"
      >
        {/* Content for section 10 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("11")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      {/* Section 11 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-start md:p-24"
        id="11"
      >
        {/* Content for section 11 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowDown
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("12")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      {/* Section 12 with snap alignment */}
      <div
        className="relative flex min-h-screen snap-start items-center p-4 md:justify-center md:p-24"
        id="12"
      >
        {/* Content for section 12  just a "thanks for reading"*/}
        <div>
          <h1 className="text-center text-6xl">Thanks for reading!</h1>
          <p className="text-1xl text-center italic">
            Fulton Browne - Seminar 102 - 2024
          </p>
        </div>
        {/* arrow up to top */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
          <FaArrowUp
            className="animate-bounce text-3xl"
            onClick={() => {
              document
                .getElementById("0")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </main>
  );
}
