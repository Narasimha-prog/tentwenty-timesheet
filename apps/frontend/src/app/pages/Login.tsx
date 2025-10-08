import { useState } from "react";
import { login, User } from "../api/api";
import { useNavigate } from "react-router-dom";

interface Props {
  setUser: (u: User) => void;
}

export default function Login({ setUser }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      navigate("/table-view");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
  <div className="flex w-full min-h-screen ">
    {/* Left half */}
    <div className="w-1/2 flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6  rounded-lg shadow-md w-[576px] h-[304px] flex flex-col gap-4"
      >
      <h1 className="w-[576px] h-[25px] flex items-start">
        <span className=" text-2xl font-bold text-left ">
          Welcome back
       </span>
      </h1>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>

    {/* Right half */}
    <div className="w-1/2 flex items-center justify-center bg bg-primary-600">
     <div className="w-[576px] h-[168px] flex flex-col justify-start text-white">

    {/* Title */}
    <div className="text-5xl font-bold leading-snug mb-2 font-inter">
     ticktock
    </div>
    
    {/* Description */}
    <div className="text-lg font-normal leading-relaxed font-inter">
      Introducing ticktock, our cutting-edge timesheet web application
       designed to revolutionize how you manage employee work hours
       . With ticktock, you can effortlessly track and monitor 
       employee attendance and productivity from anywhere, anytime, 
       using any internet-connected device.
    </div>

  </div>
    </div>

    
  </div>
);

}
