import Link from "next/link";

function NavButton({ navButtonText, navButtonLink, icon: Icon }) {
  return (
    <Link href={navButtonLink}>
      <button className="e__header__btn flex items-center gap-1">
        {Icon && <Icon className="w-5 h-4" />}
        {navButtonText}
      </button>
    </Link>
  );
}

export default NavButton;

