import Link from "next/link";
import { FaHome, FaUser, FaClipboardList, FaCalendarCheck, FaSignInAlt } from "react-icons/fa";

export default function MobileNav() {
  return (
    <section className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around items-center py-3">
        <Link href="/" className="flex flex-col items-center text-gray-700 hover:e__secondary__color">
          <FaHome size={20} />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/service" className="flex flex-col items-center text-gray-700 hover:e__secondary__color">
          <FaClipboardList size={20} />
          <span className="text-xs">Services</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center text-gray-700 hover:e__secondary__color">
          <FaUser size={20} />
          <span className="text-xs">About Us</span>
        </Link>
        <Link href="/book" className="flex flex-col items-center text-gray-700 hover:e__secondary__color">
          <FaCalendarCheck size={20} />
          <span className="text-xs">Book Now</span>
        </Link>
        <Link href="/login" className="flex flex-col items-center text-gray-700 hover:e__secondary__color">
          <FaSignInAlt size={20} />
          <span className="text-xs">Login</span>
        </Link>
      </div>
    </section>
  );
}
