import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogin } from '../redux/userSlice';

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isAuthenticated } = useSelector(state => state.user)


  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
   dispatch(getLogin({email, password}));
  };

  if (isAuthenticated) return <Navigate to={"/"} />

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen flex items-center justify-center"
    >
      <form onSubmit={handleSubmit} className="bg-[#f18fc5] w-[75%] sm:w-[60%] md:w-[50%] xl:w-[30%]  text-center  py-10 rounded-md shadow-lg">
        <h2 className="text-2xl font-medium mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md py-2  w-[96%]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md py-2  w-[96%]"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </motion.div>
  );
};

export default Login;
