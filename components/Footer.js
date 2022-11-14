import emailjs from "@emailjs/browser";
import React, { useRef, useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import HeadLogo from "../public/assets/whitelogohead.svg";
import LogoWord from "../public/assets/Whitelogoword.svg";
import Image from "next/image";
import { BsInstagram, BsWhatsapp, BsTelephone } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Footer() {
  const [opensuc, setOpensuc] = useState(false);
  const [openfail, setOpenfail] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendMail() {
    window.open("mailto:ivre.globals@gmail.com");
  }

  const handleChangeFN = (event) => {
    setFirstname(event.target.value);
  };
  const handleChangeLN = (event) => {
    setLastname(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleOpenfail = () => {
    setOpenfail(true);
  };

  const handleClosefail = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenfail(false);
  };

  const handleOpensuc = () => {
    setOpensuc(true);
  };

  const handleClosesuc = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpensuc(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      message.trim().length !== 0 &&
      subject.trim().length !== 0 &&
      firstname.trim().length !== 0 &&
      lastname.trim().length !== 0 &&
      email.trim().length !== 0
    ) {
      emailjs
        .sendForm(
          "service_sfovtbc",
          "template_p3s62ij",
          form.current,
          "FWVAGeO2yDUxUQd4R"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            handleOpensuc();
          },
          (error) => {
            console.log(error.text);
            console.log("errorrrrrr");
            handleOpenfail();
          }
        );
    } else {
      handleOpenfail();
      console.log("forms not filled");
    }
  };
  return (
    <div id="contact" className="bg-black w-full lg:pr-[40px] py-[20px]">
      {/* Snackbar Setup */}
      <Snackbar open={opensuc} autoHideDuration={6000} onClose={handleClosesuc}>
        <Alert
          onClose={handleClosesuc}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your Email was sent successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openfail}
        autoHideDuration={6000}
        onClose={handleClosefail}
      >
        <Alert
          onClose={handleClosefail}
          severity="error"
          sx={{ width: "100%" }}
        >
          Error sending your Email. Please make sure to fill in all the required
          fields properly
        </Alert>
      </Snackbar>

      {/* Overall footer div */}
      <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start justify-between">
        {/* socials section */}
        <div className="flex flex-col space-y-4 lg:items-start items-center">
          <div className="flex flex-row space-x-0">
            <Image
              src={HeadLogo}
              height={150}
              width={140}
              className="translate-y-[-60px]"
            />
            <Image
              src={LogoWord}
              height={100}
              width={230}
              className="translate-y-[-80px] translate-x-[-20px]"
            />
          </div>
          <div className="flex flex-row space-x-[50px] items-center lg:pl-[50px] translate-y-[-140px]">
            <a href="https://www.instagram.com/ivre.lb/">
              <BsInstagram className="w-[25px] h-[25px] text-cwhite/[0.8] hover:text-[#FE59D7] duration-150 ease-in cursor-pointer" />
            </a>

            {/* <a>
              <FaTiktok className="w-[25px] h-[25px] text-cwhite/[0.8] hover:text-[#30E1FF] duration-150 ease-in cursor-pointer" />
            </a> */}

            <a href="https://api.whatsapp.com/send?phone=96171699860">
              <BsWhatsapp className="w-[25px] h-[25px] text-cwhite/[0.8] hover:text-[#39D700] duration-150 ease-in cursor-pointer" />
            </a>

            <a>
              <AiOutlineMail
                onClick={sendMail}
                className="w-[25px] h-[25px] text-cwhite/[0.8] hover:text-[#EB4236] duration-150 ease-in cursor-pointer"
              />
            </a>
          </div>
          <div className="translate-y-[-80px] flex flex-row justify-center space-x-4 tracking-wide text-white/[0.6] hover:text-white lg:pl-[50px] text-lg font-semibold">
            <BsTelephone className="w-[25px] h-[25px]" />
            <p className="">+961 71-699860</p>
          </div>
          <div className="translate-y-[-80px] flex flex-row justify-center space-x-4 tracking-wide text-white/[0.6] hover:text-white lg:pl-[50px] text-lg font-semibold">
            <MdAlternateEmail className="w-[25px] h-[25px]" />
            <p className="">ivre.global@gmail.com</p>
          </div>
        </div>

        <div className="w-[200px] hidden xl:block">
          <div className="py-4 flex flex-col">
            <ul className="uppercase text-cwhite/[0.8] text-l">
              <Link href="/#home">
                <li className="py-4 text-sm hover:text-beige">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm hover:text-beige">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm hover:text-beige">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm hover:text-beige">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm hover:text-beige">Contact</li>
              </Link>
            </ul>
            <div className="pt-20"></div>
          </div>
        </div>

        {/* Email form */}
        <div className="lg:w-[620px] lg:h-[480px] pt-[30px] mb-[100px] lg:mb-0 px-4">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col space-y-24">
              <div className="grid grid-cols-2 grid-rows-2 gap-y-12 lg:gap-x-20 gap-x-12">
                <div class="relative">
                  <input
                    onChange={handleChangeFN}
                    id="first_name"
                    name="first_name"
                    type="text"
                    class="bg-transparent peer h-10 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-beige"
                    placeholder="john@doe.com"
                  />
                  <label
                    for="first_name"
                    class="cursor-text absolute left-0 -top-3.5 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white/[0.6] peer-focus:text-sm"
                  >
                    First Name
                  </label>
                </div>

                <div class="relative">
                  <input
                    onChange={handleChangeLN}
                    id="last_name"
                    name="last_name"
                    type="text"
                    class="bg-transparent peer h-10 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-beige"
                    placeholder="john@doe.com"
                  />
                  <label
                    for="last_name"
                    class="cursor-text absolute left-0 -top-3.5 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white/[0.6] peer-focus:text-sm"
                  >
                    Last Name
                  </label>
                </div>

                <div class="relative">
                  <input
                    onChange={handleChangeEmail}
                    id="email"
                    name="email"
                    type="text"
                    class="bg-transparent peer h-10 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-beige"
                    placeholder="john@doe.com"
                  />
                  <label
                    for="email"
                    class="cursor-text absolute left-0 -top-3.5 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white/[0.6] peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>

                <div class="relative">
                  <input
                    onChange={handleChangeSubject}
                    id="subject"
                    name="subject"
                    type="text"
                    class="bg-transparent peer h-10 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-beige"
                    placeholder="john@doe.com"
                  />
                  <label
                    for="subject"
                    class="cursor-text absolute left-0 -top-3.5 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white/[0.6] peer-focus:text-sm"
                  >
                    Subject
                  </label>
                </div>
              </div>

              <div class="relative">
                <textarea
                  onChange={handleChangeMessage}
                  id="message"
                  name="message"
                  class="bg-transparent peer h-14 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-beige"
                  placeholder="john@doe.com"
                />
                <label
                  for="message"
                  class="cursor-text absolute left-0 -top-6 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:text-white/[0.6] peer-focus:text-sm"
                >
                  Your Message
                </label>
              </div>

              <div className="flex justify-center items-center lg:relative w-full">
                <input
                  type="submit"
                  value="Send Message"
                  className="lg:absolute cursor-pointer lg:right-0 text-white border border-beige hover:bg-beige focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium text-m text-center ease-in duration-150 h-[60px] w-[200px] uppercase"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
