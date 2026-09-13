import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-base-200 bg-base-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-4">
        <div>
          <img src={Logo} alt="Dev Stack" className="h-8 w-auto" />

          <p className="mt-3 text-sm text-base-content/60">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-4 flex gap-4 text-sm">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Product</h3>

          <div className="mt-3 flex flex-col gap-2 text-sm text-base-content/60">
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Company</h3>

          <div className="mt-3 flex flex-col gap-2 text-sm text-base-content/60">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#">Careers</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Legal</h3>

          <div className="mt-3 flex flex-col gap-2 text-sm text-base-content/60">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="border-t border-base-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-sm text-base-content/50 md:flex-row md:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;