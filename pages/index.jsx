"use client";
import React from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="h-screen bg-zinc-900 text-zinc-200 flex flex-col">
      <header className="flex justify-between items-center p-6 bg-zinc-800">
        <h1 className="text-xl font-bold">Company Name</h1>
        <nav>
          <a href="#features" className="px-4 hover:underline">
            Features
          </a>
          <a href="#about" className="px-4 hover:underline">
            About Us
          </a>
          <a href="#contact" className="px-4 hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Welcome To Techizons</h2>
        <p className="mb-6 text-lg">
          Manage your employees, leads, and inquiries easily.
        </p>
        <button
          className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-500"
          onClick={navigateToLogin}
        >
          Go to Login
        </button>
      </main>
    </div>
  );
}
