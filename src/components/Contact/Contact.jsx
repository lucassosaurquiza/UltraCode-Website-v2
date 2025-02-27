import styles from "../../style";


const Contact = () => {
   return (
      <section
         id="home"
         className={`flex md:flex-row flex-col  py-24 lg:pt-8 xl:pt-16 sm:pt-20 mt-14 xl:mt-44 xl:mb-36 `}
      >
         <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex self-center md:self-start"></div>

            <div className="flex flex-col justify-between md:items-start items-center w-full mt-12 mb-12">
               <h1 className="flex-1 text-center md:text-start font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[75px] leading-[75px]">
                  Let us know what we can{" "}
                  <span className="border-b-4 border-[#3A7DE8]">help you with</span>{" "}
               </h1>
            </div>
            <div className="flex self-center md:self-start">
               <div className="sm:flex flex-1 text-center md:text-start font-poppins font-semibold text-[15px] hidden text-white ss:leading-[75px] leading-[75px]">
                  you can also contact us at{" "}
                  <a href="facebook.com" className="text-[#3A7DE8] pl-1">
                     UltraCodeHR@gmail.com
                  </a>
               </div>
            </div>
         </div>

         <div className={`flex-1 flex-col ${styles.flexCenter} md:my-0 my-10 relative`}>
            <form class="w-full max-w-lg  z-10 bg-white p-10 rounded-xl">
               <div class="flex flex-wrap -mx-3 mb-3">
                  <div class="w-full px-3 mb-3">
                     <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-email"
                     >
                        Email*
                     </label>
                     <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        placeholder="UltraCodeHR@gmail.com"
                     />
                  </div>
               </div>

               <div class="flex flex-wrap -mx-3 mb-3">
                  <div class="w-full px-3 mb-3">
                     <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-goals"
                     >
                        Your Goals*
                     </label>
                     <textarea
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-goals"
                        placeholder="Describe your goals here..."
                     ></textarea>
                  </div>
               </div>

               <div class="flex flex-wrap -mx-3 mb-3">
                  <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                     <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                     >
                        First Name*
                     </label>
                     <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-first-name"
                        type="text"
                        placeholder="John"
                     />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                     <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                     >
                        Last Name*
                     </label>
                     <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Smith"
                     />
                  </div>
               </div>

               <div class="flex flex-wrap -mx-3 mb-3">
                  <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                     <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-country"
                     >
                        Country*
                     </label>
                     <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-country"
                        type="text"
                        placeholder="Your Country"
                     />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                     <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-company"
                     >
                        Company
                     </label>
                     <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-company"
                        type="text"
                        placeholder="Your Company"
                     />
                  </div>
               </div>
               <button className="font-poppins font-medium text-[15px] mr-4 px-1 py-1 w-full md:w-full rounded-full bg-blue-gradient  text-white mt-3">
                  <span className="transition ease-in-out delay-45 w-full block bg-[#121212] hover:bg-stone-700 rounded-full px-6 py-3 2xl:text-2xl 2xl:px-8 2xl:py-4">
                     Send
                  </span>
               </button>
            </form>

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
         </div>
      </section>
   );
};

export default Contact;
