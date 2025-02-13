import { FaPumpSoap } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="flex flex-col items-center">
        {/* Skincare Icon (Rotating) */}
        <FaPumpSoap className="text-pink-500 text-5xl animate-spin-slow" />

        {/* Loading Text */}
        <p className="mt-4 text-pink-700 text-lg font-semibold animate-pulse">
          Hydrating Your Glow...
        </p>
      </div>
    </div>
  );
}
