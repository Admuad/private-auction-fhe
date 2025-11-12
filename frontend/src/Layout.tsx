import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, useLocation } from "react-router-dom";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
   { name: "Create", path: "/create" },
    { name: "Bid", path: "/bid" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f5ef] to-[#e9e5d6] text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="relative flex justify-between items-center px-14 py-5 bg-black text-white shadow-lg border-b border-[#FFD700]/40 sticky top-0 z-50 transition-all duration-500 font-['Space_Grotesk'] tracking-wide">
        
        {/* Logo (Left) */}
        <Link
          to="/"
          className="flex items-center gap-2 group animate-logo-fade no-underline"
          style={{ textDecoration: "none" }}
        >
          <h1 className="text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
            🔰  zAUCTIONS
          </h1>
        </Link>

        {/* Centered Navigation */}
        {/* Centered Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <nav className="flex items-center justify-center space-x-16">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-[18px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 no-underline
                    ${isActive ? "text-[#FFD700]" : "text-gray-300 hover:text-[#FFD700]"}
                    animate-fade-in`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Wallet Button (Right) */}
        <div
          className="ml-6 animate-fade-in"
          style={{ animationDelay: `${navItems.length * 0.1}s` }}
        >
          <ConnectButton chainStatus="icon" showBalance={false} />
        </div>
      </header>

      {/* Main content */}
      <main className="p-10 min-h-[calc(100vh-80px)]">
        {children}
      </main>
    </div>
  );
}