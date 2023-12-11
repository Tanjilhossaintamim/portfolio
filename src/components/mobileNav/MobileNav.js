"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import GithubBtn from "../shared/GithubBtn/GithubBtn";
import classNames from "classnames";
import { useState } from "react";

const MobileNav = () => {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div>
      <GiHamburgerMenu
        className="text-2xl cursor-pointer lg:hidden text-text_primary"
        onClick={() => setnavOpen(!navOpen)}
      />
      <div>
        <div
          className={classNames({
            "lg:hidden absolute left-0 top-14 px-3 py-3 w-full bg-card_light transition-all":
              navOpen,
            hidden: !navOpen,
           
          })}
        >
          <ul className="lg:flex items-center space-y-3 lg:space-y-0 lg:space-x-8 text-text_primary text-base font-medium">
            <li>
              <Link
                href="#About"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#Skills"
                className="hover:text-primary transition-colors"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#Projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#Education"
                className="hover:text-primary transition-colors"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="#Contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="w-2/4 mt-4">
            <GithubBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
