import React from "react";

const ValuesComponent = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#662D92]">
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative group h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#662D92] to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative h-full bg-white rounded-2xl p-6 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6 text-[#662D92]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <span className="text-xs font-medium text-purple-400">01</span>
                <h3 className="text-xl font-bold text-[#662D92]">Excellence</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Going above and beyond to deliver exceptional experiences. We
              obsess over quality and take pride in exceeding expectations.
            </p>
          </div>
        </div>

        <div className="relative group h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#662D92] to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative h-full bg-white rounded-2xl p-6 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6 text-[#662D92]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <span className="text-xs font-medium text-purple-400">02</span>
                <h3 className="text-xl font-bold text-[#662D92]">
                  Professionalism
                </h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Upholding the highest standards through respect, responsibility,
              and transparent communication to build lasting trust.
            </p>
          </div>
        </div>

        <div className="relative group h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#662D92] to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative h-full bg-white rounded-2xl p-6 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6 text-[#662D92]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <span className="text-xs font-medium text-purple-400">03</span>
                <h3 className="text-xl font-bold text-[#662D92]">Integrity</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Doing whats right, even when challenging. We embrace
              accountability and build trust through consistent ethical conduct.
            </p>
          </div>
        </div>

        <div className="relative group h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#662D92] to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative h-full bg-white rounded-2xl p-6 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6 text-[#662D92]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <span className="text-xs font-medium text-purple-400">04</span>
                <h3 className="text-xl font-bold text-[#662D92]">Innovation</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Challenging assumptions and empowering creative solutions. We take
              smart risks and learn from every experience.
            </p>
          </div>
        </div>

        <div className="relative group h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#662D92] to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative h-full bg-white rounded-2xl p-6 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6 text-[#662D92]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <span className="text-xs font-medium text-purple-400">05</span>
                <h3 className="text-xl font-bold text-[#662D92]">Diversity</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Embracing different perspectives and ensuring everyone feels
              valued. Our diverse insights drive better solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesComponent;
