import React from "react";
const ContactBar = () => {
  return (
    <div className="flex h-9 items-center justify-between bg-gray-900 px-4 text-white">
      <div className="flex items-center space-x-2">
        <span className="text-xs text-white/80">Hotline:</span>
        <a
          href="tel:0726583140"
          className="text-sm font-medium hover:text-white/80 transition-colors"
        >
          0726 583 140
        </a>
      </div>
      <div className="flex items-center space-x-4">
        {[
          { href: "https://wa.me/254791962074", icon: "whatsapp" },
          { href: "https://facebook.com/cdlafrica", icon: "facebook" },
          { href: "https://twitter.com/cdlafrica", icon: "twitter" },
          { href: "https://instagram.com/cdlafrica", icon: "instagram" },
          { href: "https://youtube.com/@cdlafrica5466", icon: "youtube" },
          { href: "https://linkedin.com/company/cdlafrica", icon: "linkedin" },
        ].map(({ href, icon }) => (
          <a
            key={icon}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <img src={`/${icon}.svg`} alt={icon} className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactBar;
