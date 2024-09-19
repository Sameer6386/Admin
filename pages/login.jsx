import React, { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    router.push("/dashboard");

    // if (email === "samir638670@gmail.com" && password === "password") {
    //   router.push("/dashboard");
    // } else {
    //   setError("Invalid email or password");
    // }
  };

  const handlePasswordReset = () => {
    router.push("/request-otp");
  };

  return (
    <div className="h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/login.png')" }} // Corrected path
      ></div>
      <div className="w-1/2 flex justify-center items-center bg-zinc-900">
        <div className="w-full max-w-md bg-zinc-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Login
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-zinc-400">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-zinc-700 text-white rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-zinc-400">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-zinc-700 text-white rounded-lg"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <button
              onClick={handlePasswordReset}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
            >
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
