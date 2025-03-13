import React, { useState } from "react";
import kenya from "../assets/images/Kenya.png";

// const ContactComponent = () => {
//   const [contactMethod, setContactMethod] = useState("");

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6">
//       <div className="bg-white rounded-2xl shadow-2xl">
//         <div className="p-8 bg-gradient-to-r from-[#702DA4]/10 to-transparent border-b">
//           <h2 className="text-3xl font-bold text-[#702DA4] text-center mb-6">
//             Get in Touch
//           </h2>
//           <div className="flex justify-center">
//             <div className="inline-flex items-center justify-center gap-8 p-2 bg-white rounded-lg shadow-sm">
//               <label className="relative flex items-center cursor-pointer group">
//                 <input
//                   type="radio"
//                   className="peer sr-only"
//                   value="callback"
//                   checked={contactMethod === "callback"}
//                   onChange={() => setContactMethod("callback")}
//                 />
//                 <div className="p-3 rounded-lg peer-checked:bg-[#702DA4]/10 transition-all duration-300 group-hover:bg-[#702DA4]/5">
//                   <span className="text-gray-700 group-hover:text-[#702DA4] peer-checked:text-[#702DA4] transition-colors font-medium">
//                     Request a Callback
//                   </span>
//                 </div>
//               </label>
//               <label className="relative flex items-center cursor-pointer group">
//                 <input
//                   type="radio"
//                   className="peer sr-only"
//                   value="message"
//                   checked={contactMethod === "message"}
//                   onChange={() => setContactMethod("message")}
//                 />
//                 <div className="p-3 rounded-lg peer-checked:bg-[#702DA4]/10 transition-all duration-300 group-hover:bg-[#702DA4]/5">
//                   <span className="text-gray-700 group-hover:text-[#702DA4] peer-checked:text-[#702DA4] transition-colors font-medium">
//                     Send a Message
//                   </span>
//                 </div>
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="p-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             <div className="lg:col-span-4 space-y-6">
//               <h3 className="text-xl font-semibold text-[#702DA4] mb-4">
//                 Contact Information
//               </h3>
//               <div className="space-y-4">
//                 <div
//                   className="p-6 bg-gradient-to-r from-[#702DA4]/5 to-transparent rounded-xl hover:scale-[1.02] transition-transform"
//                   style={{ transitionDelay: "0ms" }}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="p-2 bg-[#702DA4]/10 rounded-lg shrink-0">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         data-slot="icon"
//                         className="w-6 h-6 text-[#702DA4]"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                         ></path>
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[#702DA4]">
//                         Office Location
//                       </h3>
//                       <div className="text-gray-600 mt-1">
//                         I&M Bank House <br />
//                         Nairobi, Kenya
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className="p-6 bg-gradient-to-r from-[#702DA4]/5 to-transparent rounded-xl hover:scale-[1.02] transition-transform"
//                   style={{ transitionDelay: "100ms" }}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="p-2 bg-[#702DA4]/10 rounded-lg shrink-0">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         data-slot="icon"
//                         className="w-6 h-6 text-[#702DA4]"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[#702DA4]">Email Us</h3>
//                       <div className="text-gray-600 mt-1">info@cdl.africa</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className="p-6 bg-gradient-to-r from-[#702DA4]/5 to-transparent rounded-xl hover:scale-[1.02] transition-transform"
//                   style={{ transitionDelay: "200ms" }}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="p-2 bg-[#702DA4]/10 rounded-lg shrink-0">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         data-slot="icon"
//                         className="w-6 h-6 text-[#702DA4]"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[#702DA4]">Call Us</h3>
//                       <div className="text-gray-600 mt-1">+254 726 526 140</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-8">
//               <div className="h-full flex items-center justify-center">
//                 {/* Map image replacing the text as requested */}
//                 <div className="w-full h-full rounded-xl overflow-hidden shadow-md ">
//                   <img
//                     src={kenya}
//                     alt="Location Map"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactComponent;

const ContactComponent = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-2xl">
        <div className="p-8 bg-gradient-to-r from-[#702DA4]/10 to-transparent border-b">
          <h2 className="text-3xl font-bold text-[#702DA4] text-center mb-6">
            Get in Touch
          </h2>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-xl font-semibold text-[#702DA4] mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div
                  className="p-6 bg-gradient-to-r from-[#702DA4]/5 to-transparent rounded-xl hover:scale-[1.02] transition-transform"
                  style={{ transitionDelay: "0ms" }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-[#702DA4]/10 rounded-lg shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="w-6 h-6 text-[#702DA4]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#702DA4]">
                        Office Location
                      </h3>
                      <div className="text-gray-600 mt-1">
                        I&M Bank House <br />
                        Nairobi, Kenya
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="p-6 bg-gradient-to-r from-[#702DA4]/5 to-transparent rounded-xl hover:scale-[1.02] transition-transform"
                  style={{ transitionDelay: "100ms" }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-[#702DA4]/10 rounded-lg shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="w-6 h-6 text-[#702DA4]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#702DA4]">Email Us</h3>
                      <div className="text-gray-600 mt-1">info@cdl.africa</div>
                    </div>
                  </div>
                </div>

                <div
                  className="p-6 bg-gradient-to-r from-[#702DA4]/5 to-transparent rounded-xl hover:scale-[1.02] transition-transform"
                  style={{ transitionDelay: "200ms" }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-[#702DA4]/10 rounded-lg shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="w-6 h-6 text-[#702DA4]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#702DA4]">Call Us</h3>
                      <div className="text-gray-600 mt-1">+254 726 526 140</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="h-full flex items-center justify-center p-4">
                {/* Reduced size map image */}
                <div className="w-3/4 h-64 rounded-xl overflow-hidden shadow-md mx-auto">
                  <img
                    src={kenya}
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
