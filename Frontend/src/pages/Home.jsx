"use client";
import React from "react";
import "../App.css";
import {
  CheckBadgeIcon,
  CloudArrowUpIcon,
  FaceSmileIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import { Rishik, Jignesh, Niharika } from "../assets/index.js";

const features = [
  {
    name: "Upload your medical report",
    description:
      "Simply take a picture of your report or upload a scanned document.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Get a detailed, jargon-free summary",
    description:
      "We break down the complex medical language into easy-to-understand terms.",
    icon: NewspaperIcon,
  },
  {
    name: "Focus on what matters most",
    description:
      "Our summaries highlight key findings, diagnoses, and recommendations.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Gain peace of mind",
    description:
      "Feel empowered by a clear understanding of your health information.",
    icon: FaceSmileIcon,
  },
];
export function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative w-full">
      <div className="relative isolate z-0 bg-white px-6 pt-2 lg:px-8">
        <div className="relative mx-auto  max-w-4xl py-16">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]"></div>
          <div className="text-center">
            <h1 className="sm:text-3xl text-3xl lg:text-5xl font-bold tracking-tight  text-gray-900 ">
              Tired of struggling through complex medical reports?
            </h1>
            <p className=" mt-10 sm:text-lg md:text-xl lg:text-lg leading-8 text-gray-600">
              MedInsight is here to help. Our innovative tool empowers you to
              understand your health information clearly and easily, without
              needing a medical degree.{" "}
            </p>

            <div>
              <div class="canva">
                <iframe
                  loading="lazy"
                  // style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                  class="canva-frame"
                  src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-iFkB2wU&#x2F;Ue6u0YkHDgm5IayF87fh7A&#x2F;view?embed"
                  allowfullscreen="allowfullscreen"
                  allow="fullscreen"
                ></iframe>
              </div>
              <a
                href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-iFkB2wU&#x2F;Ue6u0YkHDgm5IayF87fh7A&#x2F;view?utm_content=DAF-iFkB2wU&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
                target="_blank"
                rel="noopener"
              ></a>
            </div>
          </div>
          <div className="bg-white py-20 sm:py-20">
            <div className="mx-auto ">
              <div className="mx-auto lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Here's what MedInsight can do for you:
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <section className="px-2 py-20 md:px-0">
              <figure className="mx-auto">
                <h1 className="mb-4 text-4xl text-center font-semibold text-black">
                  MedInsight is perfect for
                </h1>
                <blockquote className="mt-10 py-2 text-xl text-gray-900">
                  <p className="mt-5">
                    “MedInsight is a lifesaver! The doctor's reports are filled
                    with terms we didn't understand. Uploading it to MedInsight
                    gave us a clear and concise summary in plain English. Now
                    one knows exactly what's going on with his/her health. Thank
                    you, MedInsight!”
                  </p>
                  <h3 className=" float-right  font-bold py-2">
                    ~Dr. Niharika Anand, Supervisor
                  </h3>
                </blockquote>
                <blockquote className="mt-10 py-2 text-xl text-gray-900">
                  <p className="mt-5">
                    “Helping my elderly parents manage their health can be
                    overwhelming. MedInsight has been a game-changer. I can
                    quickly understand their medical reports and explain things
                    to them in a way they can easily grasp. It's brought peace
                    of mind to both of us.”
                  </p>
                  <h3 className=" float-right font-bold py-2">
                    ~Jignesh, Bhay
                  </h3>
                </blockquote>
                <blockquote className="mt-10 py-2 text-xl text-gray-900">
                  <p className="mt-5">
                    “MedInsight is a valuable tool for my patients. It empowers
                    them to be more engaged in their healthcare by providing
                    clear summaries of their reports. This leads to better
                    communication and informed decision-making. I highly
                    recommend MedInsight to anyone who wants to take charge of
                    their health.”
                  </p>
                  <h3 className=" float-right font-bold py-2">
                    ~Rishik Seth, Sensitive
                  </h3>
                </blockquote>

                <figcaption className="mt-10 flex items-center gap-x-6">
                  <div className="isolate flex -space-x-2">
                    <img
                      className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src={Rishik}
                      alt="Dan_Abromov"
                    />
                    <img
                      className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src={Jignesh}
                      alt="Guillermo_Rauch"
                    />
                    <img
                      className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src={Niharika}
                      alt="Lee_Robinson"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-black">200+ patients</p>
                  </div>
                </figcaption>
              </figure>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
