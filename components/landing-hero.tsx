"use client";

import { useAuth } from "@clerk/nextjs";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import Link from "next/link";

export const LandingHero = () => {
  const isSignedIn = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">
          <Typewriter
            options={{
              strings: ["Chatbot", "Code Generation", "Content Creation"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Enhance your productivity using AI tools
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant={"premium"}
            className="md:text-lg p-4 md:p-6 rounded-full"
          >
            Start Generating for free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required
      </div>
    </div>
  );
};
