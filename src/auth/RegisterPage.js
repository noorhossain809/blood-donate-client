import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);


  useEffect(() => {
    fetch('http://barikoi.xyz/v1/api/API_KEY/cities')
    .then(res => res.json())
    .then(data => console.log('city data', data))
  }, [])

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="card w-full max-w-md space-y-8 bg-slate-700 px-6 py-4">
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="name-address"
                name="name"
                type="name"
                autoComplete="name"
                required
                className=" w-full px-2 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="">
                  Blood Group
                </label>
                <input
                  id="name-address"
                  name="blood_group"
                  type="text"
                  autoComplete="name"
                  required
                  className=" w-full px-2 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="">
                  Born
                </label>
                <input
                  id="name-address"
                  name="born"
                  type="date"
                  autoComplete="date"
                  required
                  className=" w-full px-2 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your name"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="phone-number" className="">
                  Phone Number
                </label>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="number"
                  autoComplete="number"
                  required
                  className=" w-full px-2 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="phone-number2" className="">
                  Phone Number2
                </label>
                <input
                  id="phone_number2"
                  name="phone_number2"
                  type="number"
                  autoComplete="number"
                  required
                  className=" w-full px-2 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your number"
                />
              </div>
            </div>
          </div>
          <div className="-space-y-px rounded-md shadow-sm">
            <label htmlFor="gender" className="">
              Gender
            </label>
            <select className="select w-full px-2 rounded-md border-0 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option disabled selected>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>
          <p className="text-white">Address</p>
          <div className="flex gap-2">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="phone-number" className="">
                  District
                </label>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="number"
                  autoComplete="number"
                  required
                  className=" w-full px-2 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="phone-number2" className="">
                  Phone Number2
                </label>
                <input
                  id="phone_number2"
                  name="phone_number2"
                  type="number"
                  autoComplete="number"
                  required
                  className=" w-full px-2 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your number"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
