import Link from "next/link";

function NavButton({ navButtonText, navButtonLink, icon: Icon, className = "" }) {
  return (
    <Link href={navButtonLink}>
      <button className={`e__header__btn flex items-center gap-1  ${className}`}>
        {Icon && <Icon className="w-5 h-4" />}
        {navButtonText}
      </button>
    </Link>
  );
}

export default NavButton;

