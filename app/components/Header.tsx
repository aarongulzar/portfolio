import { profile } from "../data";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav section-shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          <span className="brand__mark" aria-hidden="true">
            AG
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="nav-links" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
