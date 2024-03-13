import Image from "next/image";

const About = () => {
  return (
    <>
    <div id="about" className="h-full ">
      <div className="container-fix">
        <div className="border-[#00968F] flex flex-col gap-8 border bg-black container-fix rounded-xl shadow-2xl shadow-[#00968F]/30">
          <div className="flex items-center justify-between md:gap-8">
            <Image
              alt="about-image-l"
              src={"/images/about-l-image.png"}
              className="w-10 md:w-20 h-fit"
              width={1920}
              height={1080}
            />
            <h1 className="text-lg md:text-2xl lg:text-7xl text-center">
              ABOUT THE EVENT
            </h1>                                                                                                                                                                                                                                             
            <Image
              alt="about-image-r"
              src={"/images/about-r-image.png"}
              className="w-10 md:w-20 h-fit"
              width={1920}
              height={1080}
            />
          </div>

          <p className="text-justify text-xs md:text-sm tracking-widest">
          HackVerse isn't just a hackathon, it's a community catalyst. We empower tech-savvy youth in India to develop broader problem-solving skills and foster meaningful connections. In a nation brimming with tech potential, HackVerse bridges the gap by cultivating an inclusive community with a global perspective.

              Join our Hybrid Event:
              Take Part in person as a part of our 24-hour in-person hackathon. Over 150 attendees,will collaborate and compete for exciting prizes.

              Embrace the Future of Web3:
              HackVerse, Chennai's biggest Web3 event, brings together over 700 enthusiasts and leading tech companies. We're excited to showcase the power of Web3 and its potential to shape the future.

              More Than Just Coding:
              HackVerse goes beyond coding challenges. We prioritize productivity and security, fostering effective teamwork and protecting intellectual property.

              Be a Part of the Movement:
              Over 2,000 individuals have already registered for HackVerse. Join us for 36 hours of non-stop innovation alongside 500 passionate Web3 developers.

              Join a Respectful Community:
              HackVerse fosters a respectful and inclusive environment. Participants retain ownership of their projects while granting HackVerse the right to showcase their work for non-commercial purposes.

              Make Your Mark:
              Be a part of the Web3 revolution at HackVerse! 
              Sign up now to work with us to create a more promising future.
          </p>
        </div>

        <div className="container bg-transparent">

          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-white">



            {/* Registration */}
            
            <div className="flex flex-row-reverse md:contents">
              <div
                className=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >
                <h3 className="font-semibold text-lg mb-1 ">March 18</h3><h5 className=' text-sm text-slate-600'>09:00 am</h5>
                <br />
                <p className="leading-tight text-justify">
                  Registration Starts .
                  Announcement of registration for our upcoming hackathon event begins on March 18. Get ready to showcase your skills, creativity, and innovation!
                </p>
              </div>




              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-blue-500 bg-blue-200 shadow-lg"
                ></div>
              </div>
            </div>



            {/* approval */}
            
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-blue-500 bg-blue-200 shadow-lg"
                ></div>
              </div>




              <div
                className=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >
                <h3 className="font-semibold text-lg mb-1">March 25 - 30</h3><h5 className=' text-sm text-slate-600'>09:00 am</h5>
                <br />
                <p className="leading-tight text-justify">
                Approvals will be rolled out between March 25 and March 30. Keep an eye on your inbox for confirmation 👀!
                </p>
              </div>
            </div>
            


            {/* check in */}

            
            <div className="flex flex-row-reverse md:contents">
              <div
                className=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >
                <h3 className="font-semibold text-lg mb-1">April 06 : Day 01</h3><h5 className=' text-sm text-slate-600'>09:00 am</h5>
                <br />
                <p className="leading-tight text-justify">
                Kickstart your day by checking in for the most anticipated hackathon event of the year. Meet fellow participants and get ready for an exhilarating experience .
                </p>
              </div> 

              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-start justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-blue-500 bg-blue-200 shadow-lg"
                ></div>
              </div>
            </div>


            {/* Speaker Session */}



            <div className="flex flex-row-reverse md:contents">
              <div
                className=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >   <h3 className="font-semibold text-lg mb-1 ">Inaguration </h3>            
                <h5 className=' text-sm text-slate-600'>10:00 am - 11:30 am</h5>
                <br />
                <p className="leading-tight text-justify">
                  Inaguration & Speakers' Session .Join us for the grand inauguration ceremony followed by enlightening speaker sessions. Gain insights, inspiration, and motivation from industry experts and thought leaders.
                </p>
              </div> 

              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-start justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-2 border-blue-500 bg-black shadow-lg"
                ></div>
              </div>
            </div>


            {/* hackathon starts */}


            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-2 border-blue-500 bg-black shadow-lg"
                ></div>
              </div>




              <div
                className=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              ><h3 className="font-semibold text-lg mb-1 ">Hackathon Begins</h3>
                <h5 className=' text-sm text-slate-600'>12:00 pm</h5>
                <br />
                <p className="leading-tight text-justify">
                Hacking begin! Dive into your projects, collaborate with your team, and start turning your ideas into reality.
                </p>
              </div>
            </div>

        
            {/* juding round 1 */}
            
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-2 border-blue-500 bg-black shadow-lg"
                ></div>
              </div>




              <div
                className=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >
                <h3 className="font-semibold text-lg mb-1">Juding Round 01 </h3><h5 className=' text-sm text-slate-600'>06:00 pm</h5>
                <br />
                <p className="leading-tight text-justify">
                Present your innovative ideas to our esteemed panel of judges. Showcase your creativity, problem-solving skills, and vision for your project.
                </p>
              </div>
            </div>
        


                {/* Dinner */}


             <div className="flex flex-row-reverse md:contents">
              <div
                className=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >
                <h3 className="font-semibold text-lg mb-1 ">Dinner </h3><h5 className=' text-sm text-slate-600'>08:00 pm</h5>
                <br />
                <p className="leading-tight text-justify">
                Take a break, refuel, and recharge with a delicious dinner. Connect with fellow participants and share your experiences so far.
                </p>
              </div>




              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-2 border-blue-500 bg-black shadow-lg"
                ></div>
              </div>
            </div>


            {/* Juding Round 2 */}

            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-2 border-blue-500 bg-black shadow-lg"
                ></div>
              </div>







              <div
                className=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >
                <h3 className="font-semibold text-lg mb-1">Judging Round 2</h3><h5 className=' text-sm text-slate-600'>08:00 pm</h5>
                <br />
                <p className="leading-tight text-justify">
                Demonstrate your progress and the functionality of your product to the judges. Highlight the unique features and functionalities that set your project apart.
                </p>
              </div>
            </div>



            {/* BreakFast */}


            <div className="flex flex-row-reverse md:contents">
              <div
                className=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >
                <h3 className="font-semibold text-lg mb-1">April 07 : Day 02</h3><h5 className=' text-sm text-slate-600'>10:00 am</h5>
                <br />
                <p className="leading-tight text-justify">
                  Continuing the hackathon journey with a hearty breakfast. Recharge and get ready for another day of innovation and creativity.
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-blue-500 bg-blue-200 shadow-lg"
                ></div>
              </div>
            </div>



            {/* Final Juding & Hackathon Ends */}




            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                 className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-2 border-blue-500 bg-black shadow-lg"
                ></div>
              </div>







              <div
               className=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >
                <h3 className="font-semibold text-lg mb-1">Final Judging </h3><h5 className=' text-sm text-slate-600'>12:00 pm</h5>
                <br />
                <p className="leading-tight text-justify">
                    Present your final project to the judges and the audience. Showcase the progress you've made and the features you've added. The most exciting part of the event is here!
                </p>
              </div>
            </div>



            {/* final juding Result Announcement  */}



            <div className="flex flex-row-reverse md:contents">
              <div
                className=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#00968f] shadow-[#509f9b54]"
              >
                <h3 className="font-semibold text-lg mb-1"> Result Announcement, Final Pitching & Wrapping of Hackverse'24</h3><h5 className=' text-sm text-slate-600'>01:00 pm to 02:00 pm</h5>
                <br />
                <p className="leading-tight text-justify">
                The moment of truth has arrived! Discover the winners as the results are announced. Showcase your project one last time during the final pitching session. Reflect on the incredible journey you've embarked on and celebrate the spirit of innovation and collaboration.

                Prepare to unleash your ingenuity, forge new connections, and make magic happen at our hackathon! We're eagerly awaiting your arrival to ignite a spark of innovation together.

                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-blue-500 bg-blue-200 shadow-lg"
                ></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
