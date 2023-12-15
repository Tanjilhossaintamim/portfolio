import Link from "next/link";
import styles from "./Footer.module.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Year from "./Year";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <h1 className="font-semibold text-primary text-xl">Tanjil Hossain</h1>
        <div className="max-w-xl mx-auto">
          <ul className="flex items-center flex-wrap space-x-8 text-text_primary text-lg font-medium mx-auto w-[350px] lg:w-full text-center">
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
        </div>
        {/* icons */}
        <div className="my-5">
          <ul className="flex items-center space-x-8 text-text_primary text-lg font-medium">
            <li>
              <a
                href="https://www.facebook.com/innosent.boy.Iam/"
                target="_blank"
                className="hover:text-primary transition-colors text-2xl"
              >
                <FaSquareFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tanjilhossain/"
                target="_blank"
                className="hover:text-primary transition-colors text-2xl"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <p className="text-center text-xs text-text2">
          © <Year /> Tanjil Hossain. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
