"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { ScheduleCalendar } from "~~/components/ScheduleCalendar";

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-black via-gray-900 to-black py-4 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
            <div className="flex-shrink-0">
              <Image src="/logo-bg-white.svg" alt="BuidlGuidl logo" width={200} height={40} />
            </div>

            <div className="flex-shrink-0">
              <Image src="/x.svg" alt="×" width={25} height={25} />
            </div>

            <div className="flex-shrink-0">
              <Image src="/logo-devconnect.svg" alt="Devconnect Argentina logo" width={200} height={65} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5 mb-8">
          <h1 className="text-center">
            <span className="block text-4xl font-bold text-black">Buidlguidl&apos;s Builder Bootcamp</span>
            <span className="block text-lg text-base-content/70">Beginner to Advanced</span>
          </h1>

          <div className="text-center mt-6">
            <p className="text-lg mb-2">
              📅 November 18-21, 2025 @{" "}
              <a href="https://devconnect.org/" target="_blank" rel="noopener noreferrer" className="link">
                Devconnect Argentina
              </a>
            </p>
            <p>📍 Devconnect main venue - Workshop space (Yellow Pavilion) </p>
          </div>

          <div className="flex justify-center text-xl max-w-2xl mx-auto my-8 text-center font-medium">
            Join BuidlGuidl in a week-long intensive journey from beginner to advanced Ethereum development. Perfect for
            all skill levels, whether you&apos;re taking your first steps on Ethereum or looking to level up your
            skills.
          </div>
        </div>

        <div className="w-full">
          <ScheduleCalendar />
        </div>
      </div>
    </>
  );
};

export default Home;
