"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { ScheduleCalendar } from "~~/components/ScheduleCalendar";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col grow pt-2">
        <div>
          <Image src="/ruler.png" alt="Ruler" width={800} height={40} />
        </div>

        <div className="px-5">
          <h1 className="text-center mt-10">
            <span className="block text-5xl md:text-6xl font-bold text-primary font-neuebit">
              Buidlguidl&apos;s Builder Bootcamp
            </span>
            <span className="block text-lg text-base-content/70 font-orbit mt-2">Beginner to Advanced</span>
          </h1>

          <div className="w-full py-6 md:py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <Image src="/logo-bg.svg" alt="BuidlGuidl logo" width={200} height={40} />
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

          <div className="text-center mt-6">
            <p className="text-lg mb-2 font-orbit">
              📅 November 18-21, 2025 @{" "}
              <a href="https://devconnect.org/" target="_blank" rel="noopener noreferrer" className="link">
                Devconnect Argentina
              </a>
            </p>
            <p className="text-lg font-orbit">📍 Devconnect main venue - Workshop space (Yellow Pavilion) </p>
          </div>

          <div className="flex justify-center">
            <Image src="/eth_lines.png" alt="Ethereum" width={50} height={40} />
          </div>

          <div className="flex justify-center text-xl max-w-2xl mx-auto mt-4 mb-12 text-center font-normal">
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
