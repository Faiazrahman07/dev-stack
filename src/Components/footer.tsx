const Footer = () => {
  return (
    <footer className="border-t border-base-200 bg-base-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-[9px] font-bold text-white">
                DS
              </div>

              <h2 className="text-sm font-bold">
                Dev <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="mt-3 max-w-xs text-xs leading-5 text-base-content/50">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-4 flex gap-4 text-xs text-base-content/70">
              <a href="#" className="link-hover">
                GitHub
              </a>
              <a href="#" className="link-hover">
                Twitter
              </a>
              <a href="#" className="link-hover">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[11px] font-bold uppercase">Product</h3>

            <ul className="mt-3 space-y-2 text-xs text-base-content/50">
              <li>
                <a href="#home" className="link-hover">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="link-hover">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="link-hover">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold uppercase">Company</h3>

            <ul className="mt-3 space-y-2 text-xs text-base-content/50">
              <li>
                <a href="#about" className="link-hover">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="link-hover">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="link-hover">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-bold uppercase">Legal</h3>

            <ul className="mt-3 space-y-2 text-xs text-base-content/50">
              <li>
                <a href="#" className="link-hover">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="link-hover">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-200">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-4 text-xs text-base-content/40 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="link-hover">
              Privacy
            </a>
            <a href="#" className="link-hover">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;