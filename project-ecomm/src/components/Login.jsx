import { useState } from 'react';
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
    <div
      className="w-full h-screen flex items-center justify-center text-white bg-[#51074a]"
    >
      <form onSubmit={handleSubmit} className=" w-[75%] sm:w-[60%] md:w-[50%] xl:w-[30%]  text-center  py-10 rounded-md ">
        <h2 className="text-2xl font-medium font-Roboto mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-Raleway mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="outline-0 border-[white]  bg-[#51074a] py-2 border-b-2 w-[96%]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-Raleway mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="outline-0 border-[white] bg-[#51074a] py-2 border-b-2 w-[96%]"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-white text-black font-Roboto mb-8 py-2 px-7  hover:bg-[#011f4b] hover:text-amber-200 hover:rounded-3xl transition-all duration-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
