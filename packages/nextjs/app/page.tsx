"use client";

import type { NextPage } from "next";
import { ScheduleCalendar } from "~~/components/ScheduleCalendar";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5 mb-8">
          <h1 className="text-center">
            <span className="block text-4xl font-bold text-primary">Buidlguidl&apos;s Builder Bootcamp</span>
            <span className="block text-lg mt-2 text-base-content/70">Beginner to Advanced</span>
          </h1>

          <div className="text-center mt-6">
            <p className="text-lg mb-2">📅 November 18-21, 2025 @ Devconnect Argentina</p>
            <p className="text-base-content/70">Click on any session below to learn more about it</p>
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
