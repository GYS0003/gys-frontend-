"use client";

import React from "react";
import GYSLogo from "@/assets/GYSLogo2.png";
import Image from "next/image";
import BgBanner from "@/assets/BgBanner.jpg";

const Footer = () => {
  return (
    <section className="relative w-full   text-gray-900 dark:text-gray-100 select-none ">
      <div className="dark:hidden  absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-[rgba(53,47,147,1)] to-[rgba(181,0,185,1)] dark:bg-transparent" />
      </div>

      <div className="px-8 z-10 relative  py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Logo & Description */}
            <div className="lg:col-span-5">
              <div className="flex items-center justify-center">
                <Image
                  src={GYSLogo}
                  height={120}
                  width={120}
                  alt="GYS Technologies"
                />
              </div>
              <div className="flex items-center justify-center">
                <p className="text-center text-sm leading-relaxed mb-8 max-w-md text-gray-100 dark:text-indigo-100 font-medium">
                  GYS Technology empowers businesses with cutting-edge, reliable
                  software tailored to drive innovation, efficiency, and digital
                  transformation.
                </p>
              </div>

              <div className="flex justify-center gap-4">
                {/* Social Media Icons */}
                {[
                  { icon: "ri-instagram-line", link: "https://www.instagram.com/samsara.studio_/" },
                  { icon: "ri-facebook-circle-line", link: "https://facebook.com" },
                  { icon: "ri-reddit-line", link: "https://wa.me/919855575465" },
                  { icon: "ri-telegram-line", link: "tel:9855575465" },
                ].map(({ icon, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-indigo-100 dark:bg-white/20 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                  >
                    <i className={`${icon} text-xl text-indigo-600 dark:text-white`} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-6 text-gray-100 dark:text-gray-100">PRODUCT</h3>
                  <ul className="space-y-4 font-medium">
                    {[
                      { name: "Samsara Adventures", link: "https://www.instagram.com/samsara_adventures_official/" },
                      { name: "Samsara Studio", link: "https://www.instagram.com/samsara.studio_/" },
               
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.link}
                          className="text-gray-100 dark:text-indigo-100 hover:text-indigo-500 dark:hover:text-white transition-colors hover:underline underline-offset-2"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-6 text-gray-100 dark:text-gray-100">COMPANY</h3>
                  <ul className="space-y-4 font-medium">
                    {[
                      { name: "About us", link: "/aboutus" },
                      { name: "Services", link: "/services" },
                      { name: "Portfolio", link: "/portfolio" },
                      { name: "Careers", link: "/careers" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.link}
                          className="text-gray-100 dark:text-indigo-100 hover:text-indigo-500 dark:hover:text-white transition-colors hover:underline underline-offset-2"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>


            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold text-lg mb-6 text-gray-100 dark:text-gray-100">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-lg text-white dark:text-white" />
                  <span className="text-sm font-medium text-gray-100 dark:text-indigo-100 hover:underline cursor-pointer">
                    123, Near Vasant Kunj, Gandhi Market, Agra
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-phone-line text-lg text-white dark:text-white" />
                  <span className="text-sm font-medium text-gray-100 dark:text-indigo-100 hover:underline cursor-pointer">
                    9855575465
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-mail-line text-lg text-white dark:text-white" />
                  <span className="text-sm font-medium text-gray-100 dark:text-indigo-100 hover:underline cursor-pointer">
                    Hr@gystechnology.in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className=" py-4 mt-2">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-sm text-gray-100 dark:text-gray-100 font-medium">
            © 2025 GYS Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
