import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#EBEFFF] flex justify-center items-center">
        <svg
          width="429"
          height="498"
          viewBox="0 0 429 498"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "0px",
          }}
        >
          <rect
            x="67.2554"
            y="510.089"
            width="635"
            height="377"
            rx="105.53"
            transform="rotate(-97.1699 67.2554 510.089)"
            fill="#656ED3"
          />
        </svg>

        <svg
          width="377"
          height="555"
          viewBox="0 0 377 555"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: "200px",
            top: "0px",
          }}
        >
          <rect
            y="555"
            width="635"
            height="377"
            rx="105.53"
            transform="rotate(-90 0 555)"
            fill="#AFB3FF"
          />
        </svg>
        <div className="w-[512px] h-[512px]">
          <img
            className="fixed w-[512px] h-[354px] top-0 left-0"
            alt="loading"
            src="https://c.animaapp.com/vwXq1qhZ/img/slow-loading.png"
            style={{
              position: "absolute",
              left: "150px",
              top: "370px",
            }}
          />
        </div>
      </div>
      <div className="w-1/2 bg-[#EBEFFF] flex justify-center items-center">
        <div className=" w-1/2 space-y-3">
          <h3 className="text-center text-base font-bold p-10">
            Please Fill out Form to Register!
          </h3>
          <div className="flex flex-col">
            <label className=" text-base font-normal" htmlFor="full name">
              Full name
            </label>
            <input className="w-full bg-transparent rounded-[50px] border border-[#656ED3] p-2 mt-3" />
          </div>
          <div className="flex flex-col">
            <label className=" text-base font-normal" htmlFor="username ">
              Username
            </label>
            <input className="w-full bg-transparent rounded-[50px] border border-[#656ED3] p-2 mt-3" />
          </div>
          <div className="flex flex-col">
            <label className=" text-base font-normal" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-transparent rounded-[50px] border border-[#656ED3] p-2 mt-3"
              placeholder="urspecial@gmail.com"
            />
          </div>
          <div className="flex flex-col">
            <label className=" text-base font-normal" htmlFor="password">
              Password
            </label>
            <input
              className="w-full bg-transparent rounded-[50px] border border-[#656ED3] p-2 mt-3"
              placeholder="Input password"
            />
          </div>
          <div className="">
            <button className="rounded-[50px] bg-[#656ED3] w-full text-slate-200 p-2 my-5">
              Register
            </button>
          </div>
          <h3 className="flex justify-center">
            Yes,I have an account?
            <Link
              to={"/Login"}
              style={{ fontFamily: "arial", marginLeft: "10px" }}
            >
              Login
            </Link>
          </h3>
          <div className=" flex justify-center w-full" style={{gap: "0px"}}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="25"
                viewBox="50 89 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              
              >
                <path
                  d="M24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.1533 4.42822 23.1631 10.2173 24.0723V15.6099H7.14111V12.1094H10.2173V9.44141C10.2173 6.40674 12.0239 4.73047 14.791 4.73047C16.1162 4.73047 17.502 4.9668 17.502 4.9668V7.94531H15.9746C14.4707 7.94531 14.0015 8.87891 14.0015 9.83643V12.1094H17.3599L16.8228 15.6099H14.0015V24.0723C19.7905 23.1631 24.2188 18.1533 24.2188 12.1094Z"
                  fill="#656ED3"
                />
              </svg>
            </a>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width=""
                height="25"
                viewBox="0 0 89 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
               
              >
                <path
                  d="M51.5986 3.17871C49.5527 1.12793 46.8281 0 43.9326 0C37.9561 0 33.0928 4.86328 33.0928 10.8398C33.0928 12.749 33.5908 14.6143 34.5381 16.2598L33 21.875L38.7471 20.3662C40.3291 21.2305 42.1113 21.6846 43.9277 21.6846H43.9326C49.9043 21.6846 54.875 16.8213 54.875 10.8447C54.875 7.94922 53.6445 5.22949 51.5986 3.17871ZM43.9326 19.8584C42.3115 19.8584 40.7246 19.4238 39.3428 18.6035L39.0156 18.4082L35.6074 19.3018L36.5156 15.9766L36.3008 15.6348C35.3975 14.1992 34.9238 12.5439 34.9238 10.8398C34.9238 5.87402 38.9668 1.83105 43.9375 1.83105C46.3447 1.83105 48.6055 2.76855 50.3047 4.47266C52.0039 6.17676 53.0488 8.4375 53.0439 10.8447C53.0439 15.8154 48.8984 19.8584 43.9326 19.8584ZM48.874 13.1104C48.6055 12.9736 47.2725 12.3193 47.0234 12.2314C46.7744 12.1387 46.5938 12.0947 46.4131 12.3682C46.2324 12.6416 45.7148 13.2471 45.5537 13.4326C45.3975 13.6133 45.2363 13.6377 44.9678 13.501C43.376 12.7051 42.3311 12.0801 41.2812 10.2783C41.0029 9.7998 41.5596 9.83398 42.0771 8.79883C42.165 8.61816 42.1211 8.46191 42.0527 8.3252C41.9844 8.18848 41.4424 6.85547 41.2178 6.31348C40.998 5.78613 40.7734 5.85938 40.6074 5.84961C40.4512 5.83984 40.2705 5.83984 40.0898 5.83984C39.9092 5.83984 39.6162 5.9082 39.3672 6.17676C39.1182 6.4502 38.4199 7.10449 38.4199 8.4375C38.4199 9.77051 39.3916 11.0596 39.5234 11.2402C39.6602 11.4209 41.4326 14.1553 44.1523 15.332C45.8711 16.0742 46.5449 16.1377 47.4043 16.0107C47.9268 15.9326 49.0059 15.3564 49.2305 14.7217C49.4551 14.0869 49.4551 13.5449 49.3867 13.4326C49.3232 13.3105 49.1426 13.2422 48.874 13.1104Z"
                  fill="#656ED3"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="89px"
                height="25"
                viewBox="55 0 89 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
               style={{maxWidth:'140'}}
             >
                <path
                  d="M76.1094 0C69.4199 0 64 5.41992 64 12.1094C64 18.7988 69.4199 24.2188 76.1094 24.2188C82.7988 24.2188 88.2188 18.7988 88.2188 12.1094C88.2188 5.41992 82.7988 0 76.1094 0ZM82.0566 8.2959L80.0693 17.6611C79.9229 18.3252 79.5273 18.4863 78.9756 18.1738L75.9482 15.9424L74.4883 17.3486C74.3271 17.5098 74.1904 17.6465 73.8779 17.6465L74.0928 14.5654L79.7031 9.49707C79.9473 9.28223 79.6494 9.16016 79.3271 9.375L72.3936 13.7402L69.4053 12.8076C68.7559 12.6025 68.7412 12.1582 69.542 11.8457L81.2168 7.34375C81.7588 7.14844 82.2324 7.47559 82.0566 8.2959Z"
                  fill="#656ED3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
