import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white select-none px-4">
      <div className="relative flex items-center justify-center">
        <span className="absolute text-[10rem] font-black text-slate-100 leading-none pointer-events-none select-none">
          404
        </span>
        <h1 className="relative z-10 text-4xl font-black text-slate-900 text-center leading-tight px-4 py-8">
          Oops! Page not found.
        </h1>
      </div>

      <p className="mt-4 max-w-md text-center text-sm text-slate-500 leading-relaxed">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable. Don&apos;t worry, our products
        are still here!
      </p>

      <div className="mt-10 flex items-center gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 h-12 text-sm font-bold shadow transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Homepage
        </Link>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-800 hover:bg-slate-50 bg-white px-6 h-12 text-sm font-bold transition-colors"
        >
          <Search className="w-4 h-4" />
          Browse Products
        </Link>
      </div>

      <p className="mt-8 text-sm text-slate-400">
        Need help?{" "}
        <span className="text-indigo-500 font-semibold cursor-pointer hover:underline">
          Contact Support
        </span>
      </p>
    </div>
  );
}
