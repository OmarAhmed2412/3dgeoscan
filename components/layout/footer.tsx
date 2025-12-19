import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400">
              {SITE_CONFIG.name}
            </h3>
            <p className="mt-4 text-gray-400">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">quick links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{SITE_CONFIG.email}</li>
              <li>{SITE_CONFIG.phone}</li>
              <li>{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}