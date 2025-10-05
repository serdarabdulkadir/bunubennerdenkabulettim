"use client";

import { useState } from "react";
import Link from "next/link";

export default function Preorder() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      monthly: 0,
      description: "Perfect for you",
      features: [
        "10Gb storage",
        "100 prompts per month",
        "Invite up to 4 people",
        "Sharing link",
        "Create up to 10 projects",
      ],
    },
    {
      name: "Basic",
      monthly: 5.99,
      description: "Perfect for you",
      features: [
        "50Gb storage",
        "500 prompts per month",
        "Invite up to 20 people",
        "Sharing link",
        "Create up to 20 projects",
      ],
    },
    {
      name: "Professional",
      monthly: 12.99,
      description: "Perfect for you",
      highlight: true,
      features: [
        "500Gb storage",
        "Unlimited prompts per month",
        "Invite up to 50 people",
        "Sharing link",
        "Create up to 50 projects",
      ],
    },
    {
      name: "Teams",
      monthly: 49.99,
      description: "Perfect for you",
      features: [
        "1Tb storage",
        "Unlimited prompts per month",
        "Unlimited invite",
        "Sharing link",
        "Create up to 100 projects",
      ],
    },
  ];

  return (
    <section
      id="preorder"
      className="bg-white min-h-screen items-center justify-center text-center px-4 sm:px-6 lg:px-12"
    >
      <div className="my-5 bg-[url(/Frame7.svg)] bg-cover bg-center rounded-4xl">
        <div className="text-center px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold max-w-2xl mx-auto mt-31.5 bg-[linear-gradient(to_top,#333333,#333333,#000000,#000000)] inline-block text-transparent bg-clip-text">
            A Pricing Plan That Works For All
          </h1>
          <p className="text-base sm:text-lg text-black mt-6 max-w-2xl mx-auto">
            Use Resolve for free with your whole team. Upgrade to enable
            unlimited prompts, enhanced security controls, and additional
            features.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex justify-center items-center gap-3 p-2.5 bg-black/5 ring-1 ring-gray-200 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-4 bg-white border border-gray-200 p-3 rounded-[20px] shadow-sm">
              <span
                className={`text-sm font-medium transition ${
                  !isAnnual ? "text-black" : "text-gray-400"
                }`}
              >
                Monthly
              </span>

              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-12 h-6 bg-gray-200 rounded-full transition-colors ${
                  isAnnual ? "bg-black" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-0"
                  }`}
                ></span>
              </button>

              <span
                className={`text-sm font-medium transition ${
                  isAnnual ? "text-black" : "text-gray-400"
                }`}
              >
                Annually
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto max-w-7xl">
            {plans.map((plan) => {
              const price = plan.monthly;
              const displayPrice =
                price === 0
                  ? "$0"
                  : isAnnual
                  ? `$${(price * 10).toFixed(2)}`
                  : `$${price.toFixed(2)}`;
              const period = price === 0 ? "" : isAnnual ? "/year" : "/month";

              return (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-3xl p-8 shadow-sm border border-gray-100 ${
                    plan.highlight
                      ? "bg-black text-white scale-105"
                      : "bg-white text-black"
                  } transition-all`}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {plan.name}
                  </h2>

                  <p className="text-3xl sm:text-4xl font-bold mb-1">
                    {displayPrice}
                    <span className="text-lg font-normal">{period}</span>
                  </p>

                  <p
                    className={`mb-8 ${
                      plan.highlight ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <Link
                    href="#preorder"
                    className={`mb-8 w-full py-3.5 rounded-xl text-center font-medium transition ${
                      plan.highlight
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-black text-white hover:opacity-90"
                    }`}
                  >
                    Preorder for $40
                  </Link>

                  <ul className="flex flex-col gap-3 text-left">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm sm:text-base"
                      >
                        <span className="text-orange-500">✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-20 md:h-32"></div>
      </div>
    </section>
  );
}
