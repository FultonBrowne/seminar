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
        className="relative flex min-h-screen snap-start flex-wrap justify-center p-4 md:p-24"
        id="1"
      >
        <div className="flex w-1/2 flex-col justify-center gap-4 p-4 md:gap-16">
          <div className="text-2xl md:text-5xl">
            The modern world is built on <span className="italic">data</span>
          </div>
          <div className="text-xl">
            Digital data drives the world around us and with the internet, it's
            not just digital, it{"'"}s accessible. If we look at industries such
            as{" "}
            <a href="https://www.mckinsey.com/industries/financial-services/our-insights/financial-data-unbound-the-value-of-open-data-for-individuals-and-institutions">
              finance
            </a>{" "}
            we see once exclusive and closed systems opening up to the public.
            This has led to a more transparent and efficient system that better
            serves the people. A major industry we see lacking in this regard is
            healthcare. All the data is there, digital, and technically
            accessible, but it{"'"}s locked away in proprietary and poorly
            designed systems that are not open, promoted, and easily accessible
            to the patient. These systems are designed for the patient, they are
            designed for internal use by the healthcare provider and
            administration. This creates problems and restricts what someone can
            do with <span className="italic">their</span> data.
          </div>
        </div>
        <div className="flex h-full w-1/2 flex-col items-center  p-4">
          <img
            src="/rhood.jpeg"
            alt="Healthcare data"
            className="max-h-full max-w-full "
          />
          <div className="flex-1 text-sm italic">
            Robin hood opened up the financial system to the public
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
        className="relative flex min-h-screen w-full snap-start content-center justify-center p-4 md:p-24"
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
        className="relative flex min-h-screen snap-start flex-wrap content-center justify-center p-4 md:p-24"
        id="3"
      >
        <div className="flex w-1/2 flex-col content-center justify-center gap-4 p-4 md:gap-16">
          <div className="justify-center text-2xl md:text-5xl">
            The healthcare world is already built on digital data
          </div>
          <div className="justify-center text-xl">
            The Electronic Health Record (EHR) is the backbone of the modern
            healthcare system it is ubiquitous in hospitals and clinics all
            around the world. It stores and manages all of the digital records
            of a patient{"'"}s medical history, and manages the data associated
            with billing, insurance, and other administrative tasks. As we can
            see <a href="https://guides.lib.uw.edu/hsl/data/findclin">here</a>{" "}
            the EHR is part of a larger system that manages healthcare data and
            makes it accessible to the healthcare provider at scale. Hospitals
            in the modern data-driven world rely on these systems to manage and
            because of that they are{" "}
            <a href="https://www.ehrinpractice.com/ehr-cost-and-budget-guide.html">
              very expensive
            </a>{" "}
            and don{"'"}t seem to innovate much as can be seen{" "}
            <a href="https://www.forbes.com/sites/sethjoseph/2021/08/10/the-ehr-is-dead-long-live-the-ehr-platform-1-of-2/?sh=3de53ba6777d">
              here
            </a>{" "}
            and by just looking at their interfaces.
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center p-4">
          <img
            className="max-h-full max-w-full"
            src="/Picture1.png"
            alt="EHR"
          />
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
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full content-center justify-center text-2xl md:text-5xl">
            The privacy of the patient is paramount
          </div>
          <div className="w-full justify-center text-xl">
            When dealing with medical data privacy is of the utmost importance.
            It is often given as a{" "}
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/bioe.12711">
              reason the medical system should remain closed off and proprietary
            </a>
            . These are valid concerns, but the resoultions to them are
            misplaced. We have the technolgy to{" "}
            <a href="https://www.apisec.ai/blog/what-is-oauth">
              secure sensitive personal data
            </a>
            , such as financial information (a great example of this is{" "}
            <a href="https://plaid.com/">Plaid</a>), and we can implement
            similar systems to secure and open up medical data. The key is to
            give the user finely-grained control over who can access their data
            and what they can do with it. This sounds obvious, in our
            digital-data driven world and the technolgy is there to achieve it.
            In this way I think by giving the patient control over their data we
            aren{"'"}t reducing their privacy, we are increasing it and allowing
            them to do more with it simultaneously. Many people are already
            proposing ways we can{" "}
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2965886/">
              open up medical data while maintaining privacy in a meaningful way
            </a>
            , this is an area that has a lot of research behind it and we know
            it can be executed well.
          </div>
        </div>

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
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full content-center justify-center text-2xl md:text-5xl">
            Medical data is commoditized by the EHR
          </div>
          <div className="w-full justify-center text-xl">
            The EHR is essential to the modern healthcare system, it keeps
            hospitals running and effciently manages patient data. However, EHR
            providers such as Epic and Athena Health treat{" "}
            <a href="https://jamanetwork.com/journals/jama-health-forum/fullarticle/2777782">
              patient data as a commodity
            </a>
            , something <span className="italic">they</span> own and control.
            This has been a major roadblock to innovation in the medical data
            sphere. This commoditization of patient data has led to a system
            where the patient has little to no control over their data, and
            techincally basic things like exporting and importing their own
            medical records can be difficult or impossible.
          </div>
        </div>
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
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full content-center justify-center text-2xl md:text-5xl">
            There is a gap in the healthcare software industry that needs to be
            filled
          </div>
          <div className="w-full justify-center text-xl">
            The lack of patient-first software in the healthcare industry is a
            glaring hole in the market. The EHR is a powerful tool, but it is
            not designed with the patient in mind. The patient facing tools that
            EHRs do provide are generally clunky and difficult to use. They aren
            {"'"}t designed to be user-friendly, they are designed to be billing
            tools and to fill in the legal requirements of the medical system.
            These EHR companies have little to no interest in changing this, as
            they see the data as their commodity and the patient access to it as
            an afterthought.
          </div>
        </div>
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
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full content-center justify-center text-2xl md:text-5xl">
            Medical data access works
          </div>
          <div className="w-full justify-center text-xl">
            A lot of contries have implemented systems where the patient has
            controll over there health care records. If we look at places like
            the UK and Sweden (highlighted in{" "}
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9518004/">
              this
            </a>{" "}
            article) we can see that the systems work. The patient has control
            over more control and access to their health data and favorable
            outcomes have been seen. Outcomes such as increased patient trust,
            increase in patient responsibility, and increased patient
            understanding in their own health.
          </div>
        </div>
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
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full content-center justify-center text-2xl md:text-5xl">
            More than just data access
          </div>
          <div className="w-full justify-center text-xl">
            Enchancing data access has a lot of direct benefits, but it also
            opens up possibilities for many indirect ones as well. First of all
            giving access to data will enable new apps and tools built on top of
            the data. This will allow for more innovation in the healthcare
            space and will allow for more personalized care that can be tailored
            and engaged with by the patient. It can also allow easier
            participation in clinical trials and studies, and can open up easier
            ways for reasearchers to transparantly access data for studies.
            Going furher than that, it also has the potential to shake up the
            industry as a whole.
          </div>
        </div>
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
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full content-center justify-center text-2xl md:text-5xl">
            Data access can open up healthcare
          </div>
          <div className="w-full justify-center text-xl">
            The healthcare industry, especially in the US, is very much a closed
            off system and it is know for having issues around transparency and
            price gouging. By opening up the data and giving the patient more
            control, the patient will be able to see what is happening with
            their care in black and white, in an effient, instant manner. This
            opens up the industry right away. It also allows for more
            competition through easily exportable, transferable, and shareable
            data.
          </div>
        </div>
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
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full content-center justify-center text-2xl md:text-5xl">
            Open healthcare is good for all
          </div>
          <div className="w-full justify-center text-xl ">
            By opening up the healthcare industry, we could see a lot of
            benefits such as more equitable pricing for care and by consquence,
            cheaper insurance. It could expose a lot of the issues in the
            industry that are repressed or just not talked about alot. Open
            access to health data lets the patient have more control over not
            only their care and wellness, but over the industry as a whole. The
            health care industry is long overdue for a shake up and open data
            access could be the catalyst it needs to change.
          </div>
        </div>
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
        <div className="flex flex-col content-center justify-center gap-4 md:gap-16">
          <div className="w-full content-center justify-center text-2xl md:text-5xl">
            A call to action
          </div>
          <div className="w-full justify-center text-xl ">
            The US healtcare system needs to be more transparent and accessible
            and data access is the first step towards that goal. While the task
            may seem boring and mundane to many we need to use the data and
            technolgy we have to build the best patient-first system we can for
            healthcare data. If you{"'"}re a doctor talk to your adminstration
            and fellow providers about improving the health records system, if
            you{"'"}re, if you{"'"}re adminstration talk to your superiors about
            the need for more data access and transparency, if you{"'"}re a
            software developer play with building systems to utilize what data
            we have if you{"'"}re a patient talk to your doctor about the need
            for better data access and transparency, and we should all talk to
            any of our government representatives about the need for more data
            access and transparency in healthcare. Together we can work towards
            a healthcare system that is more transparent, accessible, and usable
            for all.
          </div>
        </div>
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
