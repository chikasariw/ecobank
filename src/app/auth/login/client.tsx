"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import { login } from "@/app/auth/login/action"
import { useFormState } from "react-dom"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [state, formAction] = useFormState(login, { success: false, message: "" })

  const togglePassword = () => setShowPassword(!showPassword)

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch bg-white sm:bg-eb-primary-green-700">
      <div className="radial-dots hidden lg:flex"></div>
      <div className="radial-green hidden lg:flex"></div>
      <div className="radial-green-right-md hidden md:flex lg:hidden"></div>
      {/* Kiri: Branding EcoBank */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center text-white text-center w-1/2 px-40 z-10">
        <Image src="/logo/ecobank-logo-icon.svg" alt="EcoBank Logo" width={160} height={100} priority />
        <h2 className="text-4xl font-bold mt-4">EcoBank.</h2>
        <p className="text-sm mt-6">
          Tukar sampahmu dengan mudah melalui EcoBank. <br />
          Yuk, mulai aksi nyatamu hari ini!
        </p>
      </div>
      
      {/* Kanan: Formulir Login */}
      <div className="flex flex-1 flex-col justify-center items-center bg-white rounded-none sm:rounded-3xl p-10 md:px-24 lg:px-28 xl:max-w-[50%] md:m-12 sm:m-5 xl:m-5 z-10">
        <Image
          className="flex lg:hidden my-10 "
          src="/logo/ecobank-logo-icon.svg"
          alt="ecobank logo"
          width={100}
          height={100}
          priority
        />
        <form action={formAction} className="max-w-xl w-full">
          <h4 className="text-eb-primary-gray-800 font-bold text-3xl text-center lg:text-start">Login</h4>
          <p className="text-sm text-eb-primary-gray-500 mt-3 mb-10 text-center lg:text-start">
            Silakan masuk kembali untuk mengakses fitur EcoBank.
          </p>

          {state.message && (
            <div
              className={`p-4 mb-4 text-sm rounded-lg ${state.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              role="alert"
            >
              {state.message}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-eb-primary-gray-600">
                Nama
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1  outline-eb-primary-gray-400 focus-within:outline-2 focus-within:outline-eb-primary-ygreen-500">
                  <input
                    required
                    id="nama"
                    name="nama"
                    type="text"
                    placeholder="Masukkan Namamu"
                    className="block text-sm min-w-0 grow py-1.5 pl-1 pr-2 text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-sm h-9"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="sandi" className="block text-sm font-medium text-eb-primary-gray-600">
                Kata Sandi
              </label>
              <div className="mt-2 relative">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1  outline-eb-primary-gray-400 focus-within:outline-2 focus-within:outline-eb-primary-ygreen-500">
                  <input
                    required
                    id="sandi"
                    name="sandi"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan Kata Sandi"
                    className="block text-sm min-w-0 grow py-1.5 pl-1 pr-2 text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-sm h-9"
                  />
                  <button type="button" onClick={togglePassword} className="absolute right-3 text-eb-primary-gray-600">
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" aria-label="show" />
                    ) : (
                      <Eye className="h-5 w-5" aria-label="hide" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold rounded text-white rounded-3xl bg-eb-primary-green-700 hover:bg-eb-primary-green-800 focus:outline-none transition duration-200 ease-in-out"
            >
              Masuk
            </button>
          </div>

          <div className="my-4 lg:mb-0 flex justify-center">
            <p className="text-sm font-semibold text-eb-primary-gray-800 text-center">
              Belum memiliki akun?{" "}
              <a className="text-eb-primary-green-800" href="/auth/register">
                Buat Akun{" "}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

