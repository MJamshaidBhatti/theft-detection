"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { StyleClass } from "primereact/styleclass";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import FeatureCard from "../components/FeatureCard";
import { FeatureService } from "../service/FeatureService";
import WizeObserverAction from "../components/WizeObserverAction";
import WizeProduct from "../components/WizeProduct";
import WizeSafeguard from "../components/WizeSafeguard";
import WizeSolution from "../components/WizeSolution";
import WizeChallenge from "../components/WizeChallenge";
import WizeFooter from "../components/WizeFooter";
import WizeContactForm from "../components/WizeContactForm";
import WizeFAQ from "../components/WizeFAQ";


import Icon from "../components/Icon";

import { TreeNode } from "primereact/treenode";

const Home = () => {
  const [isHidden, setIsHidden] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const [features, setFeatures] = useState<TreeNode[]>([]);

  const toggleMenuItemClick = () => {
    setIsHidden((prevState) => !prevState);
  };
  useEffect(() => {
    FeatureService.getFeatures().then((feature: any) => setFeatures(feature));
  }, []);

  return (
    <div className="surface-0 flex justify-content-center">
      <div id="home" className="landing-wrapper overflow-hidden">
        <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-6 lg:px-6 flex align-items-center justify-content-between relative lg:static">
          <Link href="/" className="flex align-items-center">
            <Icon name="app-logo" type="svg" />
          </Link>
          <StyleClass
            nodeRef={menuRef as NodeRef}
            selector="@next"
            enterClassName="hidden"
            leaveToClassName="hidden"
            hideOnOutsideClick
          >
            <i
              ref={menuRef}
              className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"
            ></i>
          </StyleClass>
          <div
            className={classNames(
              "align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2",
              { hidden: isHidden }
            )}
            style={{ top: "100%" }}
          >
            <ul className="list-none p-0 m-0 flex-grow-1 justify-content-center flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
              <li>
                <a
                  href="#home"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Home</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#highlights"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>About</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Features</span>
                  <Ripple />
                </a>
              </li>
            </ul>
            <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
              {/* <Button label="Login" text rounded className="border-none font-light line-height-2 text-blue-500"></Button> */}
              <Button
                label="Contact Us"
                rounded
                className="border-none px-3 py-2 ml-5 font-light line-height-2 app-primary flex align-items-center justify-content-center text-white"
              ></Button>
            </div>
          </div>
        </div>

        <div
          id="hero"
          className="flex app-bg-secondary flex-column  p-7 lg:px-8 overflow-hidden"
        >
          <div className="flex align-items-center justify-content-center md:flex-row flex-column-reverse">
            <div className="pr-6">
              <h1 className="text-7xl line-height-1 text-white">
                Real-time Theft Detection with AI Powered Wize Observer
              </h1>
              <p className="font-normal text-2xl line-height-3 my-5 text-white">
                Sed blandit libero volutpat sed cras. Fames ac turpis egestas
                integer. Placerat in egestas erat...{" "}
              </p>
              <Button
                type="button"
                label="Book a Demo Now"
                rounded
                className="bg-white text-gray-900 text-xl border-none flex align-items-center justify-content-center font-normal line-height-3 py-2 px-4 "
              ></Button>
            </div>
           <div className="theaction">
                {/* <img
                    src="/images/landing/theft-gif.gif"
                    alt="Hero Image"
                    className=" theft-action"
                /> */}
           </div>
          </div>
        </div>
        <div id="challenge" className="pt-4 px-4 lg:px-4 my-2 md:my-4">
          <WizeChallenge />
        </div>
        <div id="solution" className="pb-4 px-6  my-2 md:my-4">
          <WizeSolution />
        </div>
        <div>
          <WizeObserverAction />
        </div>
        <div id="features" className="py-4 px-4 lg:px-8 mt-5 mx-0">
          <div className="grid justify-content-center">
            <div className="col-12 text-center mt-4 mb-4">
              <h2 className="text-900 text-bold text-5xl mb-2">Key Features</h2>
            </div>
            {features.map((feature, index) => (
              <div
                className="col-12 md:col-12 lg:col-4  mt-4 lg:mt-0"
                key={index}
              >
                <FeatureCard data={feature} />
              </div>
            ))}
          </div>
        </div>
        <div id="highlights " className="mb-7">
          <WizeProduct />
        </div>
        <div id="safeguard" className="py-4 px-4 lg:px-8 my-2 md:my-4">
          <WizeSafeguard />
        </div>
        <div>
          <WizeFAQ/>
        </div>
        <div>
          <WizeContactForm/>
        </div> 
        <div className="">
          <WizeFooter />
        </div>
      </div>
    </div>
  );
};

export default Home;
