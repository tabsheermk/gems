"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Shreyas",
    avatar: "S",
    title: "Unemployed",
    description: "The best AI tool I've used!",
  },
  {
    name: "Awais",
    avatar: "A",
    title: "Unemployed",
    description: "This is the best AI tool I've used!",
  },
  {
    name: "Fahad",
    avatar: "F",
    title: "Unemployed",
    description: "Best AI tool I've used!",
  },
  {
    name: "Datta",
    avatar: "D",
    title: "Unemployed",
    description: "Best AI tool!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((test) => (
          <Card
            key={test.description}
            className="bg-[#52405c] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{test.name}</p>
                  <p className="text-zinc-400 text-sm">{test.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {test.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
