import React from "react";

// Social media icons as SVGs (for demo, replace with your own or use a library)
const socialLinks = [
  { href: "#", label: "Facebook", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.006 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17.006 22 12z"/></svg>
  ) },
  { href: "#", label: "YouTube", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.752 2.752 0 0 0-1.937-1.948C18.01 5.5 12 5.5 12 5.5s-6.01 0-7.863.553A2.752 2.752 0 0 0 2.2 8.001C1.65 9.855 1.65 12 1.65 12s0 2.145.55 3.999a2.752 2.752 0 0 0 1.937 1.948C5.99 18.5 12 18.5 12 18.5s6.01 0 7.863-.553a2.752 2.752 0 0 0 1.937-1.948C22.35 14.145 22.35 12 22.35 12s0-2.145-.55-3.999zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
  ) },
  { href: "#", label: "Instagram", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.77.128 4.635.37 3.678 1.327 2.72 2.285 2.478 3.42 2.42 4.702 2.362 5.982 2.35 6.391 2.35 12s.012 6.018.07 7.298c.058 1.282.3 2.417 1.258 3.375.957.957 2.092 1.2 3.374 1.258C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.282-.058 2.417-.3 3.374-1.258.958-.958 1.2-2.093 1.258-3.375.058-1.28.07-1.689.07-7.298s-.012-6.018-.07-7.298c-.058-1.282-.3-2.417-1.258-3.375C19.365.37 18.23.128 16.948.07 15.668.012 15.259 0 12 0z"/></svg>
  ) },
  // Add more as needed
];

const footerLinks = [
  {
    title: "PRODUCTS",
    links: ["Monitors", "Projectors", "ViewBoard Interactive Displays", "Direct View LED", "Commercial Displays", "Parts", "Software", "Accessories"],
  },
  {
    title: "ACCOUNT",
    links: ["Manage Your Account"],
  },
  {
    title: "CUSTOMER SUPPORT",
    links: ["Online Support Center", "Customer Service", "Product Registration", "Return (RMA) Request", "Warranty Lookup"],
  },
  {
    title: "FOR CONSUMER",
    links: ["Shop Monitors", "Shop Projectors", "Shop Accessories", "Shop Parts", "Outlet Store"],
  },
  {
    title: "FOR EDUCATION",
    links: ["ViewSonic Education"],
  },
  {
    title: "COMPANY",
    links: ["About ViewSonic", "Leadership", "Mission and Vision", "Minority Owned Business", "Careers", "Awards", "Community Giveback", "Accessibility"],
  },
  {
    title: "VIEWSONIC UPDATES",
    links: ["News Room", "Blogs", "Pressroom"],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-800 pt-8 pb-4 px-4 md:px-12 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Logo, Social, Newsletter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <span className="text-2xl font-bold text-gray-900">Heikos</span>
            <span className="hidden md:inline-block ml-4 text-sm font-medium">FOLLOW US ON</span>
            <div className="flex gap-3 mt-2 md:mt-0">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} className="text-gray-500 hover:text-red-600 transition-colors">{s.icon}</a>
              ))}
            </div>
          </div>
          {/* Newsletter */}
          <form className="flex w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 rounded-l-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Email Address"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-r-full font-semibold hover:bg-red-700 transition-colors"
            >
              Continue
            </button>
          </form>
          {/* Region (right) */}
          <div className="flex items-center gap-2 text-sm text-gray-500 md:ml-8">
            <span role="img" aria-label="Region">🌐</span> Region :
            <span className="font-semibold text-gray-700 flex items-center gap-1">
              <span role="img" aria-label="US Flag">🇺🇸</span> United States
            </span>
          </div>
        </div>
        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 py-8">
          {footerLinks.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-sm mb-3 text-gray-900">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-red-600 transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
} 