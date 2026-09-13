
import Logo from '../assets/logo-text.png';
const Navbar = () => {
  return (
    
      <nav className="sticky top-0  z-50 bg-base-100">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">

         <div>
          <img src={Logo} alt="" />
         </div>
     <ul className='flex items-center gap-8'>
      <li>Home</li>
      <li>Technologies</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
     </ul>
  
    <div className="flex items-center gap-3"> <button className="px-4 py-2"> Sign In </button> <button className="rounded-full bg-[#DB2777] px-5 py-2 text-white"> Sign Up </button> 
    </div>
    </div>
      </nav>
  );
};

export default Navbar;