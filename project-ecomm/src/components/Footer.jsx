import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 pt-8 pb-6">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-white font-bold mb-2">Company</h3>
            <ul className="list-reset">
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-white font-bold mb-2">Categories</h3>
            <ul className="list-reset">
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white">Laptop</a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white">Mobile</a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white">Electronic Devices</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-white font-bold mb-2">Follow Us</h3>
            <ul className="list-reset">
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook className="inline-block mr-2"/>Facebook</a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="inline-block mr-2"/>Twitter</a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram className="inline-block mr-2"/>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-gray-400">&copy; 2023 My Ecommerce Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
