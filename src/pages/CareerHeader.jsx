// // // import React, { useState, useEffect } from "react";

// // // const CareerPage = () => {
// // // State for managing filters, search, and loading

// // //   return (
// // //     <>
// // //       {/* Career Header Section */}
// // //       <div className="position-header">
// // //         <div className="cw-vTM">
// // //           <div className="posR wid100">
// // //             <div>
// // //               <h1 data-zrqa="cw-bg2-title" style={{ color: "#FFFFFF" }}>
// // //                 Find the career of your dreams
// // //               </h1>
// // //               <h2 data-zrqa="cw-bg2-stitle" style={{ color: "#FFFFFF" }}>
// // //                 We're more than just a workplace. We're a family. <span></span>
// // //               </h2>
// // //               <p data-zrqa="cw-bg2-desc" style={{ color: "#FFFFFF" }}>
// // //                 We know that finding a meaningful and rewarding job can be a
// // //                 long journey. Our goal is to make that process as easy as
// // //                 possible for you, and to create a work environment that's
// // //                 satisfying - one where you'll look forward to coming to every
// // //                 day. Start your journey with us by browsing available jobs.
// // //               </p>
// // //               <a
// // //                 data-zrqa="cw-bg2-button"
// // //                 href="javascript:void(0)"
// // //                 style={{
// // //                   backgroundColor: "#522676",
// // //                   border: "1px solid #522676",
// // //                 }}
// // //                 className="button"
// // //                 onClick={scrollToJobs}
// // //               >
// // //                 View Openings
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Job Listings Section */}
// // //       <section
// // //         className="clearfix cw-job-listing posR cw-section-space"
// // //         id="Jobs"
// // //         style={{ opacity: 1 }}
// // //       >
// // //         <div className="cw-section-inner" id="website_block_jobs">
// // //           <div className="cw-joblisting-wrapper cw-job-layout3">
// // //             <div
// // //               className={`cw-search-overlay ${showFilter ? "active" : ""}`}
// // //             ></div>

// // //             <div
// // //               className={`posR cw-joblisting-filter ${
// // //                 showFilter ? "show" : ""
// // //               }`}
// // //             >
// // //               <div className="cw-filter-search">
// // //                 <a
// // //                   href="javascript:void(0)"
// // //                   className="pop-close-popup toggle-filters"
// // //                   onClick={hideSection}
// // //                 ></a>
// // //                 <h3 className="cw-filter-heading" style={{ color: "#232933" }}>
// // //                   Filters
// // //                 </h3>
// // //                 <div className="editable row-space-8">
// // //                   <div className="cw-filter-box">
// // //                     <div
// // //                       className="cw-filter-section crc-custom-cheackbox checkbox-ind"
// // //                       data-identifier="checkbox-ind"
// // //                       data-apiname="Remote_Job"
// // //                     >
// // //                       <label className="lyteCheckbox lyteDefault">
// // //                         <input
// // //                           type="checkbox"
// // //                           id="cw_remoteonly"
// // //                           name="checkbox"
// // //                           value="Remote Job"
// // //                           checked={filters.remoteJob}
// // //                           onChange={(e) => handleCheckboxChange(e, "remoteJob")}
// // //                         />
// // //                         <span className="lyteCheckBoxDefault">
// // //                           <span
// // //                             className=""
// // //                             aria-hidden="true"
// // //                             id="lyte-checkbox-label-0"
// // //                           >
// // //                             Remote Jobs (1)
// // //                           </span>
// // //                         </span>
// // //                       </label>
// // //                     </div>

// // //                     <div
// // //                       className="cw-filter-section"
// // //                       data-field='{"id":"743130000000063470","module":["743130000000063058"],"custom_field":false,"ui_type":2,"api_name":"Job_Type","field_label":"Job Type","data_type":"picklist","length":120,"required":false,"section":["1"]}'
// // //                     >
// // //                       <h3 style={{ color: "#5c6575" }}>Job Type</h3>
// // //                       <div className="cw-fillter-scroll-0 cw-fillter-scroll">
// // //                         <div
// // //                           className="crc-custom-cheackbox cnl-custom-0 checkbox-ind-0-0"
// // //                           data-identifier="checkbox-ind-0-0"
// // //                         >
// // //                           <label className="lyteCheckbox lyteDefault">
// // //                             <input
// // //                               type="checkbox"
// // //                               name="checkbox"
// // //                               value="Full time"
// // //                               checked={filters.jobType.includes("Full time")}
// // //                               onChange={(e) =>
// // //                                 handleCheckboxChange(e, "jobType")
// // //                               }
// // //                             />
// // //                             <span className="lyteCheckBoxDefault">
// // //                               <span
// // //                                 className=""
// // //                                 aria-hidden="true"
// // //                                 id="lyte-checkbox-label-1"
// // //                               >
// // //                                 Full time (45)
// // //                               </span>
// // //                             </span>
// // //                           </label>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   <div className="circle tl"></div>
// // //                   <div className="circle tr"></div>
// // //                   <div className="circle bl"></div>
// // //                   <div className="circle br"></div>
// // //                 </div>

// // //                 <div className="cw-text-center">
// // //                   <a
// // //                     href="javascript:void(0)"
// // //                     style={{
// // //                       backgroundColor: "#522676",
// // //                       border: "1px solid #522676",
// // //                     }}
// // //                     className="toggle-filters cw-apply-filters"
// // //                     onClick={applyFilters}
// // //                   >
// // //                     Apply Filters
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="cw-joblisting-results">
// // //               <div className="cw-filter-results">
// // //                 <div className="cw-job-layout3-header">
// // //                   <h1 style={{ color: "#232933" }} data-zrqa="cw-job3-title">
// // //                     Join us
// // //                   </h1>
// // //                   <h2 style={{ color: "#5c6575" }} data-zrqa="cw-job3-stitle">
// // //                     Current Openings
// // //                   </h2>
// // //                 </div>

// // //                 <div className="clearfix cw-mobile-search vivify">
// // //                   <a
// // //                     href="javascript:void(0);"
// // //                     className="form-search-dismiss disN"
// // //                   >
// // //                     ×
// // //                   </a>
// // //                   <div className="cw-search-fixed">
// // //                     <a
// // //                       href="javascript:void(0);"
// // //                       className="cw-job-filter-btn form-filter-trigger"
// // //                       onClick={openFilter}
// // //                     >
// // //                       <i className="fa fa-filter"></i>Filters
// // //                     </a>

// // //                     <div className="cw-search-section clearfix">
// // //                       <div className="cw-search-section-search">
// // //                         <div className="cw-search-title-warp">
// // //                           <label style={{ color: "#232933" }}>What</label>
// // //                           <div className="lyteField">
// // //                             <input
// // //                               type="text"
// // //                               placeholder="Job title or skill"
// // //                               autoComplete="off"
// // //                               value={filters.searchTitle}
// // //                               onChange={(e) => handleSearchChange(e, "title")}
// // //                             />
// // //                             <span
// // //                               role="button"
// // //                               className="inputCloseIcon"
// // //                               style={{
// // //                                 display: filters.searchTitle ? "block" : "none",
// // //                               }}
// // //                               onClick={() => clearSearchInput("title")}
// // //                             ></span>
// // //                           </div>
// // //                         </div>

// // //                         <div className="cw-search-location-wrap">
// // //                           <label style={{ color: "#232933" }}>Where</label>
// // //                           <div className="lyteField">
// // //                             <input
// // //                               type="text"
// // //                               placeholder="City, state/province or country"
// // //                               autoComplete="off"
// // //                               value={filters.searchLocation}
// // //                               onChange={(e) =>
// // //                                 handleSearchChange(e, "location")
// // //                               }
// // //                             />
// // //                             <span
// // //                               role="button"
// // //                               className="inputCloseIcon"
// // //                               style={{
// // //                                 display: filters.searchLocation
// // //                                   ? "block"
// // //                                   : "none",
// // //                               }}
// // //                               onClick={() => clearSearchInput("location")}
// // //                             ></span>
// // //                           </div>
// // //                         </div>

// // //                         <button
// // //                           type="button"
// // //                           className="lyte-button lyteBackgroundColorBtn"
// // //                           style={{
// // //                             backgroundColor: "#522676",
// // //                             borderColor: "#522676",
// // //                             color: "white",
// // //                           }}
// // //                           onClick={searchJob}
// // //                         >
// // //                           Search
// // //                         </button>
// // //                       </div>

// // //                       <div className="cw-search-styles-tag">
// // //                         <ul>
// // //                           {filters.remoteJob && (
// // //                             <li>
// // //                               Remote Job
// // //                               <a
// // //                                 href="javascript:void(0);"
// // //                                 data-zrqa="cw-job3-Remote Job"
// // //                                 className="cw-search-tag-close"
// // //                                 onClick={() => clearFilter("Remote Job")}
// // //                               ></a>
// // //                             </li>
// // //                           )}

// // //                           {(filters.remoteJob ||
// // //                             filters.jobType.length > 0 ||
// // //                             filters.searchTitle ||
// // //                             filters.searchLocation) && (
// // //                             <li
// // //                               className="cw-clear-filters"
// // //                               data-zrqa="cw-job3-clear"
// // //                             >
// // //                               <a
// // //                                 href="javascript:void(0);"
// // //                                 style={{ color: "#522676" }}
// // //                                 onClick={clearAllFilters}
// // //                               >
// // //                                 Clear
// // //                               </a>
// // //                             </li>
// // //                           )}
// // //                         </ul>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div className="posR">
// // //                   <div
// // //                     className={`cw-job-loading-overlay ${
// // //                       isLoading ? "" : "disN"
// // //                     }`}
// // //                   >
// // //                     <div className="cw-easyapply-loading">
// // //                       <div style={{ backgroundColor: "#522676" }}></div>
// // //                       <div style={{ backgroundColor: "#522676" }}></div>
// // //                       <div style={{ backgroundColor: "#522676" }}></div>
// // //                       <span className="cw-loading-text">Loading...</span>
// // //                     </div>
// // //                   </div>

// // //                   <div
// // //                     className="cw-filter-joblist"
// // //                     onClick={() => clickJob("SALES-TELEMARKETER")}
// // //                   >
// // //                     <div className="cw-filter-joblist-left">
// // //                       <h3>
// // //                         <a
// // //                           style={{ color: "#522676" }}
// // //                           className="cw-3-title cw-bw"
// // //                           href="https://cdl.zohorecruit.com/jobs/Careers/743130000009790001/SALES-TELEMARKETER?source=CareerSite"
// // //                         >
// // //                           SALES TELEMARKETER
// // //                         </a>
// // //                       </h3>
// // //                       <p
// // //                         className="filter-subhead cw-bw"
// // //                         style={{ color: "#171B27" }}
// // //                       >
// // //                         Remote Job
// // //                         <span className="search-work-experience">
// // //                           3-5 years
// // //                         </span>
// // //                       </p>
// // //                       <p className="cw-bw" style={{ color: "#171B27" }}>
// // //                         Our client is seeking an experienced telemarketer to
// // //                         join their team and engage potential clients through
// // //                         outbound calls. This role involves researchi...
// // //                       </p>
// // //                     </div>

// // //                     <div className="cw-filter-joblist-right">
// // //                       <span className="search-date-type">
// // //                         <span
// // //                           style={{ color: "#171B27" }}
// // //                           className="cw-full-time"
// // //                         >
// // //                           Full time
// // //                         </span>
// // //                         <span
// // //                           className="search-date-opened"
// // //                           style={{ color: "#171B27" }}
// // //                         >
// // //                           02/17/2025
// // //                         </span>
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // };

// // // export default CareerPage;
// // import React, { useState, useEffect } from "react";
// // import styled from "@emotion/styled";

// // // Styled components
// // const Container = styled.div`
// //   font-family: "Segoe UI", sans-serif;
// //   color: #2d3748;
// // `;

// // const CareerHeader = styled.section`
// //   background: linear-gradient(135deg, #522676 0%, #3a1a4f 100%);
// //   padding: 4rem 2rem;
// //   text-align: center;
// //   color: white;

// //   h1 {
// //     font-size: 2.5rem;
// //     margin-bottom: 1rem;
// //     font-weight: 600;
// //   }

// //   p {
// //     max-width: 800px;
// //     margin: 1.5rem auto;
// //     line-height: 1.6;
// //     opacity: 0.9;
// //   }
// // `;

// // const Button = styled.button`
// //   background: ${(props) => (props.primary ? "#522676" : "#f7fafc")};
// //   color: ${(props) => (props.primary ? "white" : "#2d3748")};
// //   padding: 0.75rem 2rem;
// //   border: none;
// //   border-radius: 6px;
// //   font-weight: 600;
// //   cursor: pointer;
// //   transition: all 0.2s;
// //   margin: 0.5rem;

// //   &:hover {
// //     transform: translateY(-1px);
// //     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //   }
// // `;

// // const FiltersSection = styled.div`
// //   background: white;
// //   padding: 1.5rem;
// //   border-radius: 8px;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
// //   margin-bottom: 2rem;

// //   h3 {
// //     font-size: 1.25rem;
// //     margin-bottom: 1rem;
// //     color: #2d3748;
// //   }
// // `;

// // const JobCard = styled.div`
// //   background: white;
// //   padding: 1.5rem;
// //   border-radius: 8px;
// //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
// //   margin-bottom: 1rem;
// //   transition: transform 0.2s;

// //   &:hover {
// //     transform: translateY(-2px);
// //     cursor: pointer;
// //   }

// //   h3 {
// //     color: #522676;
// //     margin-bottom: 0.5rem;
// //   }

// //   p {
// //     color: #4a5568;
// //     line-height: 1.5;
// //   }
// // `;

// // const Input = styled.input`
// //   padding: 0.75rem;
// //   border: 1px solid #e2e8f0;
// //   border-radius: 6px;
// //   width: 100%;
// //   margin-bottom: 1rem;

// //   &:focus {
// //     outline: none;
// //     border-color: #522676;
// //     box-shadow: 0 0 0 2px rgba(82, 38, 118, 0.1);
// //   }
// // `;

// // const LoadingOverlay = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   right: 0;
// //   bottom: 0;
// //   background: rgba(255, 255, 255, 0.8);
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   z-index: 1000;
// // `;

// // // Rest of your component code remains mostly the same, just replace classNames with styled components

// // const CareerPage = () => {
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [filters, setFilters] = useState({
// //     remoteJob: true,
// //     jobType: [],
// //     searchTitle: "",
// //     searchLocation: "",
// //   });
// //   const [showFilter, setShowFilter] = useState(false);

// //   // Function to scroll to jobs section
// //   const scrollToJobs = () => {
// //     document.getElementById("Jobs").scrollIntoView({ behavior: "smooth" });
// //   };

// //   // Function to hide filters section
// //   const hideSection = () => {
// //     setShowFilter(false);
// //     document.querySelector(".cw-search-overlay").classList.remove("active");
// //   };

// //   // Function to open filter on mobile
// //   const openFilter = () => {
// //     setShowFilter(true);
// //     document.querySelector(".cw-search-overlay").classList.add("active");
// //   };

// //   // Function to apply filters
// //   const applyFilters = () => {
// //     setIsLoading(true);
// //     hideSection();

// //     // Simulate API call
// //     setTimeout(() => {
// //       setIsLoading(false);
// //     }, 1000);
// //   };

// //   // Function for searching jobs
// //   const searchJob = () => {
// //     setIsLoading(true);

// //     // Simulate API call
// //     setTimeout(() => {
// //       setIsLoading(false);
// //     }, 1000);
// //   };

// //   // Function to clear specific filter
// //   const clearFilter = (filterName) => {
// //     if (filterName === "Remote Job") {
// //       setFilters({
// //         ...filters,
// //         remoteJob: false,
// //       });
// //     }
// //   };

// //   // Function to clear all filters
// //   const clearAllFilters = () => {
// //     setFilters({
// //       remoteJob: false,
// //       jobType: [],
// //       searchTitle: "",
// //       searchLocation: "",
// //     });
// //   };

// //   // Function to handle checkbox changes
// //   const handleCheckboxChange = (event, type) => {
// //     const { checked, value } = event.target;

// //     if (type === "remoteJob") {
// //       setFilters({
// //         ...filters,
// //         remoteJob: checked,
// //       });
// //     } else if (type === "jobType") {
// //       let updatedJobTypes = [...filters.jobType];

// //       if (checked) {
// //         updatedJobTypes.push(value);
// //       } else {
// //         updatedJobTypes = updatedJobTypes.filter((item) => item !== value);
// //       }

// //       setFilters({
// //         ...filters,
// //         jobType: updatedJobTypes,
// //       });
// //     }
// //   };

// //   // Function to handle search input changes
// //   const handleSearchChange = (event, type) => {
// //     const { value } = event.target;

// //     if (type === "title") {
// //       setFilters({
// //         ...filters,
// //         searchTitle: value,
// //       });
// //     } else if (type === "location") {
// //       setFilters({
// //         ...filters,
// //         searchLocation: value,
// //       });
// //     }
// //   };

// //   // Function to clear search input
// //   const clearSearchInput = (type) => {
// //     if (type === "title") {
// //       setFilters({
// //         ...filters,
// //         searchTitle: "",
// //       });
// //     } else if (type === "location") {
// //       setFilters({
// //         ...filters,
// //         searchLocation: "",
// //       });
// //     }
// //   };

// //   // Handle job click
// //   const clickJob = (job) => {
// //     // Implementation would depend on specific requirements
// //     console.log("Job clicked:", job);
// //   };
// //   // ... existing state and logic ...

// //   return (
// //     <Container>
// //       <CareerHeader>
// //         <h1>Find the career of your dreams</h1>
// //         <h2>We're more than just a workplace. We're a family.</h2>
// //         <p>
// //           We know that finding a meaningful and rewarding job can be a long
// //           journey. Our goal is to make that process as easy as possible for
// //           you...
// //         </p>
// //         <Button primary onClick={scrollToJobs}>
// //           View Openings
// //         </Button>
// //       </CareerHeader>

// //       <JobCard onClick={() => clickJob("SALES-TELEMARKETER")}>
// //         <h3>SALES TELEMARKETER</h3>
// //         <p className="job-meta">Remote Job • Full Time • 3-5 years</p>
// //         <p>
// //           Our client is seeking an experienced telemarketer to join their
// //           team...
// //         </p>
// //       </JobCard>
// //     </Container>
// //   );
// // };

// // export default CareerPage;
// import React, { useState } from "react";
// import styled from "@emotion/styled";

// // Styled components
// const Container = styled.div`
//   font-family: "Inter", sans-serif;
//   color: #2d3748;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const CareerHeader = styled.section`
//   background: linear-gradient(135deg, #522676 0%, #3a1a4f 100%);
//   padding: 4rem 2rem;
//   text-align: center;
//   color: white;
//   border-radius: 0 0 20px 20px;
//   margin-bottom: 3rem;
//   margin-top: 3rem;

//   h1 {
//     font-size: 2.5rem;
//     margin-bottom: 1rem;
//     font-weight: 700;
//     line-height: 1.2;
//   }

//   h2 {
//     font-size: 1.25rem;
//     font-weight: 400;
//     margin-bottom: 1.5rem;
//     opacity: 0.9;
//   }

//   p {
//     max-width: 800px;
//     margin: 1.5rem auto;
//     line-height: 1.6;
//     opacity: 0.9;
//   }
// `;

// const PrimaryButton = styled.button`
//   background: #ffffff;
//   color: #522676;
//   padding: 1rem 2.5rem;
//   border: none;
//   border-radius: 8px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.2s;
//   font-size: 1rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
//   }
// `;

// const JobCard = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//   margin-bottom: 1.5rem;
//   transition: transform 0.2s, box-shadow 0.2s;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
//     cursor: pointer;
//   }

//   h3 {
//     color: #522676;
//     margin-bottom: 0.75rem;
//     font-size: 1.5rem;
//   }

//   .job-meta {
//     color: #4a5568;
//     margin-bottom: 1rem;
//     font-size: 0.9rem;
//     display: flex;
//     gap: 1rem;
//   }

//   p {
//     color: #718096;
//     line-height: 1.6;
//     font-size: 1rem;
//   }
// `;

// const FilterSection = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 2rem;
//   margin-bottom: 3rem;
// `;

// const SearchInput = styled.input`
//   padding: 1rem;
//   border: 2px solid #e2e8f0;
//   border-radius: 8px;
//   width: 100%;
//   font-size: 1rem;
//   transition: border-color 0.2s;

//   &:focus {
//     outline: none;
//     border-color: #522676;
//     box-shadow: 0 0 0 3px rgba(82, 38, 118, 0.1);
//   }
// `;

// const CheckboxLabel = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   margin-bottom: 1rem;
//   cursor: pointer;

//   input {
//     width: 1.2rem;
//     height: 1.2rem;
//     accent-color: #522676;
//   }
// `;

// const CareerPage = () => {
//   const [filters, setFilters] = useState({
//     remoteJob: true,
//     jobType: ["Full time"],
//     searchTitle: "",
//     searchLocation: "",
//   });

//   const handleCheckboxChange = (type, value) => (e) => {
//     if (type === "remoteJob") {
//       setFilters((prev) => ({ ...prev, remoteJob: e.target.checked }));
//     } else {
//       const updated = e.target.checked
//         ? [...prev.jobType, value]
//         : prev.jobType.filter((item) => item !== value);
//       setFilters((prev) => ({ ...prev, jobType: updated }));
//     }
//   };

//   const handleSearchChange = (type) => (e) => {
//     setFilters((prev) => ({ ...prev, [type]: e.target.value }));
//   };

//   return (
//     <Container>
//       <CareerHeader>
//         <h1>Find the Career of Your Dreams</h1>
//         <h2>We're more than just a workplace. We're a family.</h2>
//         <p>
//           Discover meaningful opportunities in a supportive environment that
//           values growth and collaboration. Start your journey with us today.
//         </p>
//         <PrimaryButton
//           onClick={() => document.getElementById("jobs").scrollIntoView()}
//         >
//           View Openings
//         </PrimaryButton>
//       </CareerHeader>

//       <FilterSection>
//         <div>
//           <SearchInput
//             type="text"
//             placeholder="Job title or keywords"
//             value={filters.searchTitle}
//             onChange={handleSearchChange("searchTitle")}
//           />
//         </div>
//         <div>
//           <SearchInput
//             type="text"
//             placeholder="Location"
//             value={filters.searchLocation}
//             onChange={handleSearchChange("searchLocation")}
//           />
//         </div>
//       </FilterSection>

//       <div id="jobs">
//         <JobCard>
//           <h3>Sales Telemarketer</h3>
//           <div className="job-meta">
//             <span>🏠 Remote</span>
//             <span>⏱️ Full-time</span>
//             <span>📅 Posted 2 days ago</span>
//           </div>
//           <p>
//             Join our dynamic sales team and help connect businesses with
//             innovative solutions. We're looking for motivated individuals with
//             excellent communication skills and a passion for customer service.
//           </p>
//         </JobCard>

//         <JobCard>
//           <h3>Software Engineer</h3>
//           <div className="job-meta">
//             <span>🏢 On-site</span>
//             <span>⏱️ Full-time</span>
//             <span>📅 Posted 5 days ago</span>
//           </div>
//           <p>
//             Help build our next-generation platform using modern technologies.
//             We value clean code, collaborative problem-solving, and continuous
//             learning.
//           </p>
//         </JobCard>
//       </div>
//     </Container>
//   );
// };

// export default CareerPage;
import React, { useState } from "react";
import styled from "@emotion/styled";

// Styled components
const Container = styled.div`
  font-family: "Inter", sans-serif;
  color: #2d3748;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CareerHeader = styled.section`
  background: linear-gradient(135deg, #522676 0%, #3a1a4f 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  border-radius: 0 0 20px 20px;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  p {
    max-width: 800px;
    margin: 1.5rem auto;
    line-height: 1.6;
    opacity: 0.9;
  }
`;

const PrimaryButton = styled.button`
  background: #ffffff;
  color: #522676;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const JobCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  h3 {
    color: #522676;
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
  }

  .job-meta {
    color: #4a5568;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    display: flex;
    gap: 1rem;
  }

  p {
    color: #718096;
    line-height: 1.6;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ApplyButton = styled.button`
  background: #522676;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #3a1a4f;
    transform: translateY(-1px);
  }
`;

const FormModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: auto;
  position: relative;

  iframe {
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 8px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2d3748;

  &:hover {
    color: #522676;
  }
`;

// Replace these with your actual Google Form IDs
const JOB_FORMS = {
  sales: "1FAIpQLSfYOUR_FORM_ID_1",
  software: "1FAIpQLSfYOUR_FORM_ID_2",
};

const CareerPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Sales Telemarketer",
      meta: ["🏠 Remote", "⏱️ Full-time", "📅 Posted 2 days ago"],
      description:
        "Join our dynamic sales team and help connect businesses with innovative solutions...",
      formId: JOB_FORMS.sales,
    },
    {
      id: 2,
      title: "Software Engineer",
      meta: ["🏢 On-site", "⏱️ Full-time", "📅 Posted 5 days ago"],
      description:
        "Help build our next-generation platform using modern technologies...",
      formId: JOB_FORMS.software,
    },
  ];

  const openApplicationForm = (formId) => {
    setSelectedForm(formId);
    setShowForm(true);
  };

  const closeApplicationForm = () => {
    setShowForm(false);
    setSelectedForm("");
  };

  return (
    <Container>
      <CareerHeader>
        <h1>Find the Career of Your Dreams</h1>
        <h2>We're more than just a workplace. We're a family.</h2>
        <p>
          Discover meaningful opportunities in a supportive environment that
          values growth and collaboration. Start your journey with us today.
        </p>
        <PrimaryButton
          onClick={() => document.getElementById("jobs").scrollIntoView()}
        >
          View Openings
        </PrimaryButton>
      </CareerHeader>

      <div id="jobs">
        {jobs.map((job) => (
          <JobCard key={job.id}>
            <h3>{job.title}</h3>
            <div className="job-meta">
              {job.meta.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
            <p>{job.description}</p>
            <ApplyButton onClick={() => openApplicationForm(job.formId)}>
              Apply Now
            </ApplyButton>
          </JobCard>
        ))}
      </div>

      {showForm && (
        <FormModal onClick={closeApplicationForm}>
          <FormContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeApplicationForm}>&times;</CloseButton>
            <iframe
              title="job-application-form"
              src={`https://docs.google.com/forms/d/e/${selectedForm}/viewform?embedded=true`}
            >
              Loading...
            </iframe>
          </FormContainer>
        </FormModal>
      )}
    </Container>
  );
};

export default CareerPage;
