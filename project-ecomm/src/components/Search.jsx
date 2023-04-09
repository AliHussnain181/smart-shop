import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Search for: ${query}`);
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500 py-8 px-4 sm:px-6 lg:px-8 mt-44">
      <motion.form
        className="relative w-full max-w-md mx-auto"
        onSubmit={handleSubmit}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 py-2 pr-8 rounded-full shadow-sm w-full"
          />
          <button type="submit" className="ml-3">
            <FaSearch className="h-5 w-5 text-[white]" />
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Search;
