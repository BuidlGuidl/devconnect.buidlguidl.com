"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { ScheduleCalendar } from "~~/components/ScheduleCalendar";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col grow pt-2">
        <div className="px-5">
          <div className="flex justify-center mt-14 md:mt-12 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              <div className="flex-shrink-0">
                <Image src="/logo-bg.svg" alt="BuidlGuidl logo" width={130} height={28} />
              </div>

              <div className="flex-shrink-0">
                <Image src="/x.svg" alt="×" width={20} height={15} />
              </div>

              <div className="flex-shrink-0">
                <Image src="/logo-devconnect.svg" alt="Devconnect Argentina logo" width={140} height={48} />
              </div>
            </div>
          </div>
          <h1 className="text-center mt-8 mb-16 lg:mt-12">
            <span className="block text-7xl lg:text-8xl font-bold text-primary font-neuebit">
              Buidlguidl&apos;s Builder Bootcamp
            </span>
            <span className="block text-xl md:text-3xl lg:text-2xl text-base-content/80 mt-2">
              Beginner to Advanced
            </span>
          </h1>

          <div className="text-center">
            <p className="text-lg lg:text-base mt-12">
              📅 November 18-21, 2025 @{" "}
              <a href="https://devconnect.org/" target="_blank" rel="noopener noreferrer" className="link">
                Devconnect Argentina
              </a>
            </p>
            <p className="text-lg lg:text-base">📍 Devconnect main venue - Workshop space (Yellow Pavilion) </p>
          </div>

          <div className="my-8 md:my-12 flex justify-center">
            <Image src="/ruler.png" alt="Ruler" width={800} height={40} className="lg:w-[600px] lg:h-[30px]" />
          </div>

          <div className="flex justify-center text-lg lg:text-base max-w-2xl mx-auto mb-12 text-center">
            Join BuidlGuidl in a week-long intensive journey from beginner to advanced Ethereum development. Perfect for
            all skill levels, whether you&apos;re taking your first steps on Ethereum or looking to level up your
            skills.
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-center mb-14">
            <Image src="/icons.svg" alt="Icons" width={100} height={120} className="max-w-full h-auto" />
          </div>
          <ScheduleCalendar />
        </div>
      </div>
    </>
  );
};

export default Home;
