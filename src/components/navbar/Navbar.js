import Link from "next/link";
import MobileNav from "../mobileNav/MobileNav";
import GithubBtn from "../shared/GithubBtn/GithubBtn";

const Navbar = () => {
  return (
    <header className="bg-card_light fixed right-0 left-0 top-0 z-50">
      <nav className="bg-card_light text-text_primary py-4 max-w-7xl mx-auto flex justify-between items-center px-4 sticky top-0 z-50">
        <div>
          <Link href="/" className="text-2xl font-medium">
            Tanjil Hossain
          </Link>
        </div>
        <div className="hidden lg:block">
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
        </div>
        <div className="hidden lg:block">
          <GithubBtn />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
