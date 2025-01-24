'use client';

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="font-manrope">
      <div className="min-h-screen flex flex-col md:flex-row items-center md:items-stretch bg-primary300 ">
        <div className="radial-green"></div>
        {/* left column */}
        <div className="hidden md:flex flex-col items-center justify-center h-full md:h-screen w-full md:w-1/2 z-10">
          <Image
            className="opacity-90"
            src="/logo/ecobank-logo-icon.svg"
            alt="Next.js logo"
            width={200}
            height={100}
            priority
          />
          <h2 className="lg:text-5xl text-3xl font-bold lg:leading-[px] text-white mt-4">
            EcoBank.
          </h2>
          <p className="text-sm mt-6 text-white text-center px-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat ex
            semper nibh ornare elementum.
          </p>
        </div>

        {/* right column */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 py-6 px-4 bg-card m-5 rounded-xl">
          <Image
            className="flex md:hidden my-20 mb-10"
            src="/logo.svg"
            alt="Next.js logo"
            width={100}
            height={100}
            priority
          />
          <form className="max-w-md w-full">
            <h3 className="text-gray800 font-semibold text-3xl text-center md:text-start">
              Ready to <span className="text-primary100">Manage</span>
            </h3>
            <p className="text-gray500 mb-8 text-center md:text-start">
              Welcome back! Please enter your details.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm/6 font-medium text-gray600"
                >
                  Nama
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray300 focus-within:outline-2 focus-within:outline-primary200">
                    <input
                      required
                      id="nama"
                      name="nama"
                      type="text"
                      placeholder="Masukkan Nama"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray900 placeholder:text-gray400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray600"
                >
                  Password
                </label>
                <div className="mt-2 relative">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray300 focus-within:outline-2 focus-within:outline-primary200">
                    <input
                      required
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukkan Password"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray900 placeholder:text-gray400 focus:outline-none sm:text-sm/6"
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="absolute right-3 text-gray600"
                    >
                      {showPassword ? (
                        <span role="img" aria-label="hide">👁️</span>
                      ) : (
                        <span role="img" aria-label="show">👁️‍🗨️</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 accent-primary focus:ring-primary border-gray300 rounded"
                  />
                  <label className="ml-3 block text-sm text-gray800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="javascript:void(0);"
                    className="text-primary hover:text-primary font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button type="button" className="w-full py-2.5 px-4 text-sm font-semibold rounded text-white bg-primary hover:bg-primary100 focus:outline-none transition duration-200 ease-in-out">
                Sign In
              </button>
            </div>

            <div className="my-4 flex justify-center">
              <p className="text-sm font-semibold text-gray800 text-center">
                Not registered yet?{" "}
                <a className="text-primary" href="/register">
                  Create an Account{" "}
                </a>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
