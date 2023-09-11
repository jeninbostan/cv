"use client";
import Marquee from "react-fast-marquee";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxCopy } from "react-icons/rx";
import { useState } from "react";
import { AnimationDownToUp, Typed } from "@/components/animation";
import Image from "next/image";
import { BsInstagram, BsTelephone, BsWhatsapp } from "react-icons/bs";
import { AiOutlineGithub, AiOutlineGitlab } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";

export default function Test() {
  const [copyText, setCopyText] = useState("jenin.bostan@gmail.com");
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text: any) {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <main className="">
      <div className="bg-color">
        <div className="bg-sq"></div>
        <div className="content"></div>
      </div>
      <section className="py-24 flex justify-center relative z-50">
        <div className="md:w-[566px]">
          <div className="text-center md:px-10 px-4 mt-7">
            <h1 className="text-5xl font-semibold mb-5">Jenin A. Bostan</h1>

            <p>
              Experienced Front-end developer based in the PS known for creating
              website and mobile
            </p>
            <div className="flex justify-center mt-4">
              <button
                disabled={isCopied ? true : false}
                onClick={() => copyTextToClipboard(copyText)}
                className="flex items-center gap-2 h-10 bg-[#1c1c1c] transition-all bg-opacity-40 hover:bg-opacity-60 rounded-md text-sm font-semibold border-[#282828] border px-5"
              >
                <RxCopy />
                {isCopied ? <span>Copied!</span> : <span>E-Mail</span>}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="md:w-[566px] mx-auto px-4">
        <AnimationDownToUp>
          <section className="mt-4 relative z-50">
            <div className="absolute -right-16 -top-16">
              <Image
                src={"/assets/Highlight_03.svg"}
                width={80}
                height={0}
                alt=""
                className="hidden md:block"
              />
            </div>
            <div className="bg-[#1c1c1c] rounded-md border-[#282828] border px-4 pt-4 pb-8">
              <h3 className="font-semibold text-xl tracking-widest">
                Experience
              </h3>
              <div className="mt-4">
                <div className="flex gap-4">
                  <div className="bg-white w-16 h-16 p-2 rounded-md flex justify-center items-center">
                    <Image
                      src={"/assets/machine-learning_5815378.png"}
                      width={1000}
                  
                      alt=""
                      height={0}
                      quality={100}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Self Learning</h4>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 h-full">
                  <div className="bg-transparent w-14 flex justify-center">
                    <div className="w-14 mt-2">
                      <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
                      <div className="h-[90%] mt-3 border opacity-40 w-[0.5px] mx-auto"></div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">
                      Frontend Developer
                    </h5>
                    <span className="text-sm text-[#7c7f82]">Full-time</span>
                    <span className="text-sm block text-[#7c7f82]">
                      Apr 2023 - Present
                    </span>
                    <ul className=" text-sm mt-2">
                      <li className="mb-2">
                        - Translating designs and wireframes into high-quality
                        code.
                      </li>
                      <li className="mb-2">
                        - Debugging and maintaining applications.
                      </li>

                      <li className="mb-2">
                        - Team working and code reviewing.
                      </li>

                      <li className="mb-2">
                        - Integration with backend (Restful APIs).
                      </li>
                    </ul>
                    <div className="mt-4 font-medium">
                      <p>Skills: Html . Css . Next.js . React.js ...etc</p>
                    </div>
                  </div>
                </div>
            
                <div className="ml-[72px] mt-8">
                  <Swiper
                    // scrollbar={{
                    //   hide: false,
                    // }}

                    modules={[Scrollbar]}
                    spaceBetween={16}
                    breakpoints={{
                      0: {
                        slidesPerView: 1.3,
                      },
                      640: {
                        slidesPerView: 2.5,
                      },
                      768: {
                        slidesPerView: 2.5,
                      },
                      1024: {
                        slidesPerView: 2.5,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="bg-black/30 p-2 rounded-md">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-md">
                            <Image
                              src={"/assets/world-wide-web_841364.png"}
                              width={50}
                              alt=""
                              height={0}
                              quality={100}
                            />
                          </div>
                          <a target="_blank" href={""}>
                            <h6>Website 1</h6>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        </AnimationDownToUp>
        {/* <div className="relative mt-4">
          <div className="absolute right-14 -top-4">
            <Image
              src={"/assets/asset 16 2.svg"}
              width={90}
              height={0}
              alt=""
            />
          </div>
          <div className="absolute left-14 -top-4">
            <Image
              src={"/assets/asset 16 2.svg"}
              width={90}
              height={0}
              alt=""
            />
          </div>
        </div> */}
        <AnimationDownToUp>
          {" "}
          <section className="mt-4  relative z-50">
            <div className="bg-[#1c1c1c] rounded-md  border-[#282828] border px-4 pt-4 pb-8">
              <h3 className="font-semibold text-xl tracking-widest">
                Education
              </h3>
              <div className="mt-4">
                <div className="flex gap-4">
                  <div className=" bg-white flex items-center justify-center w-16 h-16 rounded-md overflow-hidden">
                    <Image
                      src={"/assets/LOGO-WWB.png"}
                      alt=""
                      height={0}
                      width={1000}
                      quality={100}
                      className=" w-full h-[40px]"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">
                    University College of Applied Sciences
                    </h4>
                    <span className="text-sm block text-[#7c7f82]">
                      2020 - Present
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 h-full">
                  <div className="bg-transparent w-14 flex justify-center">
                    <div className="w-14 mt-2">
                      <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
                    </div>
                  </div>
                  <div>
                    <p className="">
                      Bachelor’s student at the College of Engineering majoring
                      in Computer Systems, second year .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimationDownToUp>
        <AnimationDownToUp>
          {" "}
          <section className="mt-4 relative z-50">
            <div className="gap-4 grid grid-cols-4">
              <a href="https://www.instagram.com/jenin.bostan" target="_blank">
                <div className="bg-[#1c1c1c] transition-all hover:border-[#3d3d3d] rounded-md border-[#282828] border h-[78px] flex justify-center items-center">
                  <BsInstagram className="text-xl" />
                </div>
              </a>
              <a
                href="https://github.com/jenin-bostan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-[#1c1c1c] transition-all hover:border-[#3d3d3d] rounded-md border-[#282828] border h-[78px] flex justify-center items-center">
                  <AiOutlineGithub className="text-3xl" />
                </div>
              </a>

              <a href="https://wa.me/972567562899" target="_blank">
                <div className="bg-[#1c1c1c] transition-all hover:border-[#3d3d3d] rounded-md border-[#282828] border h-[78px] flex justify-center items-center">
                  <BsWhatsapp className="text-2xl" />
                </div>
              </a>

              <a href="tel:+972567562899">
                <div className="bg-[#1c1c1c] transition-all hover:border-[#3d3d3d] rounded-md border-[#282828] border h-[78px] flex justify-center items-center">
                  <BsTelephone className="text-2xl" />
                </div>
              </a>
            </div>
          </section>
        </AnimationDownToUp>
        <AnimationDownToUp>
          <section className="mt-4 relative z-50">
            <div className="absolute -left-16 -bottom-16 rotate-180">
              <Image
                src={"/assets/Highlight_03.svg"}
                width={80}
                height={0}
                alt=""
                className="hidden md:block"
              />
            </div>
            <div className="bg-[#1c1c1c] rounded-md border-[#282828] border px-4 pt-4 pb-8">
              <h3 className="font-semibold text-xl tracking-widest">Skills</h3>
              <Marquee
                speed={20}
                className="mt-4 shadow-slider"
                pauseOnHover={true}
              >
                <div className="flex">
                  <div className="bg-[#fd8a32] w-14 h-14 mx-2 rounded-xl flex justify-center items-center">
                    <Image
                      src={"/assets/html-1.svg"}
                      width={35}
                      height={0}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#5bafea] w-14 h-14 mx-2 rounded-xl flex justify-center items-center">
                    <Image
                      src={"/assets/css-3.svg"}
                      width={35}
                      height={0}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#7a41ff] w-14 h-14 mx-2 rounded-xl flex justify-center items-center">
                    <Image
                      src={"/assets/bootstrap-4.svg"}
                      width={35}
                      height={0}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#ffffc0] w-14 h-14 mx-2 rounded-xl flex justify-center items-center">
                    <Image
                      src={"/assets/javascript-1.svg"}
                      width={35}
                      height={0}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#fff] w-14 h-14 mx-2 rounded-xl flex justify-center items-center">
                    <Image
                      src={"/assets/next-js.svg"}
                      width={35}
                      height={0}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#ff9c77] w-14 h-14 mx-2 rounded-xl flex justify-center items-center">
                    <Image
                      src={"/assets/react-query-seeklogo.com.svg"}
                      width={35}
                      height={0}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#b1e7fb] w-14 h-14 mx-2 rounded-xl flex justify-center items-center">
                    <Image
                      src={"/assets/tailwind-css-2.svg"}
                      width={35}
                      height={0}
                      alt=""
                    />
                  </div>

                  <div className="bg-[#edf9fa] w-14 h-14 mx-2 rounded-xl flex justify-center items-center">
                    <Image
                      src={"/assets/react-2.svg"}
                      width={35}
                      height={0}
                      alt=""
                    />
                  </div>

                  <div className="bg-[#bacaf8] w-14 h-14 mx-2 rounded-xl flex justify-center items-center">
                    <Image
                      src={"/assets/typescript-2.svg"}
                      width={35}
                      height={0}
                      alt=""
                    />
                  </div>
                </div>
              </Marquee>
            </div>
          </section>
        </AnimationDownToUp>
      </div>
    </main>
  );
}
