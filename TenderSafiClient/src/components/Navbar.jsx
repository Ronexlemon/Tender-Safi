import React from "react";
// import { LogoTenderSafi } from './assets/images/LogoTenderSafi'
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between items-center my-8 mx-2 sm:mx-16">
      <div>
        {/* <img src={LogoTenderSafi} alt="" /> */}
        <svg
          width="170"
          height="34"
          viewBox="0 0 170 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.152 8.528H56.84V11.216H52.328V26H49.544V11.216H45.152V8.528ZM62.1804 26.264C60.9804 26.264 59.9564 26.032 59.1084 25.568C58.2604 25.104 57.6124 24.464 57.1644 23.648C56.7164 22.816 56.4924 21.88 56.4924 20.84C56.4924 19.816 56.7484 18.896 57.2604 18.08C57.7724 17.264 58.4604 16.616 59.3244 16.136C60.2044 15.64 61.1724 15.392 62.2284 15.392C63.6204 15.392 64.7644 15.8 65.6604 16.616C66.5724 17.416 67.1804 18.552 67.4844 20.024L59.3004 22.784L58.6764 21.272L65.0604 18.992L64.5084 19.304C64.3324 18.824 64.0444 18.408 63.6444 18.056C63.2604 17.704 62.7164 17.528 62.0124 17.528C61.4524 17.528 60.9564 17.664 60.5244 17.936C60.0924 18.192 59.7484 18.56 59.4924 19.04C59.2524 19.504 59.1324 20.056 59.1324 20.696C59.1324 21.352 59.2684 21.928 59.5404 22.424C59.8124 22.92 60.1804 23.304 60.6444 23.576C61.1084 23.832 61.6364 23.96 62.2284 23.96C62.6444 23.96 63.0444 23.888 63.4284 23.744C63.8124 23.6 64.1724 23.408 64.5084 23.168L65.7324 25.16C65.2044 25.496 64.6204 25.768 63.9804 25.976C63.3564 26.168 62.7564 26.264 62.1804 26.264ZM72.5533 15.848L72.7933 18.032L72.6973 17.744C73.0493 17.04 73.5693 16.48 74.2573 16.064C74.9613 15.632 75.7933 15.416 76.7533 15.416C77.7133 15.416 78.5053 15.696 79.1293 16.256C79.7533 16.816 80.0733 17.552 80.0893 18.464V26H77.4013V19.424C77.3853 18.912 77.2413 18.504 76.9693 18.2C76.6973 17.88 76.2653 17.712 75.6733 17.696C75.1293 17.696 74.6413 17.864 74.2093 18.2C73.7773 18.52 73.4333 18.968 73.1773 19.544C72.9373 20.104 72.8173 20.752 72.8173 21.488V26H70.1293V15.848H72.5533ZM87.9453 26.264C86.9853 26.264 86.1293 26.04 85.3773 25.592C84.6253 25.144 84.0333 24.504 83.6013 23.672C83.1693 22.84 82.9533 21.872 82.9533 20.768C82.9533 19.632 83.1853 18.664 83.6493 17.864C84.1133 17.064 84.7453 16.456 85.5453 16.04C86.3613 15.608 87.2733 15.392 88.2813 15.392C89.0173 15.392 89.7213 15.536 90.3933 15.824C91.0653 16.096 91.6013 16.496 92.0013 17.024L91.9533 17.936V7.28H94.6173V26H91.9293V23.72L92.1933 24.368C91.6813 24.912 91.0653 25.368 90.3453 25.736C89.6413 26.088 88.8413 26.264 87.9453 26.264ZM88.8093 23.984C89.3373 23.984 89.8013 23.896 90.2013 23.72C90.6173 23.544 90.9693 23.296 91.2573 22.976C91.5613 22.64 91.7853 22.248 91.9293 21.8V19.64C91.8013 19.224 91.5853 18.856 91.2813 18.536C90.9933 18.216 90.6333 17.968 90.2013 17.792C89.7693 17.616 89.3053 17.528 88.8093 17.528C88.2333 17.528 87.7053 17.664 87.2253 17.936C86.7613 18.208 86.3853 18.584 86.0973 19.064C85.8093 19.544 85.6653 20.096 85.6653 20.72C85.6653 21.328 85.8093 21.88 86.0973 22.376C86.3853 22.872 86.7693 23.264 87.2493 23.552C87.7293 23.84 88.2493 23.984 88.8093 23.984ZM103.173 26.264C101.973 26.264 100.949 26.032 100.101 25.568C99.2526 25.104 98.6046 24.464 98.1566 23.648C97.7086 22.816 97.4846 21.88 97.4846 20.84C97.4846 19.816 97.7406 18.896 98.2526 18.08C98.7646 17.264 99.4526 16.616 100.317 16.136C101.197 15.64 102.165 15.392 103.221 15.392C104.613 15.392 105.757 15.8 106.653 16.616C107.565 17.416 108.173 18.552 108.477 20.024L100.293 22.784L99.6686 21.272L106.053 18.992L105.501 19.304C105.325 18.824 105.037 18.408 104.637 18.056C104.253 17.704 103.709 17.528 103.005 17.528C102.445 17.528 101.949 17.664 101.517 17.936C101.085 18.192 100.741 18.56 100.485 19.04C100.245 19.504 100.125 20.056 100.125 20.696C100.125 21.352 100.261 21.928 100.533 22.424C100.805 22.92 101.173 23.304 101.637 23.576C102.101 23.832 102.629 23.96 103.221 23.96C103.637 23.96 104.037 23.888 104.421 23.744C104.805 23.6 105.165 23.408 105.501 23.168L106.725 25.16C106.197 25.496 105.613 25.768 104.973 25.976C104.349 26.168 103.749 26.264 103.173 26.264ZM113.545 15.848L113.785 18.728L113.689 18.32C113.977 17.712 114.369 17.192 114.865 16.76C115.377 16.312 115.897 15.976 116.425 15.752C116.953 15.512 117.385 15.392 117.721 15.392L117.601 18.08C116.833 18.016 116.161 18.16 115.585 18.512C115.025 18.848 114.585 19.296 114.265 19.856C113.961 20.416 113.809 21.008 113.809 21.632V26H111.121V15.848H113.545Z"
            fill="#1F1C9B"
          />
          <path
            d="M137.881 12.08C137.257 11.76 136.593 11.488 135.889 11.264C135.185 11.024 134.513 10.904 133.873 10.904C133.009 10.904 132.321 11.096 131.809 11.48C131.313 11.864 131.065 12.392 131.065 13.064C131.065 13.544 131.241 13.968 131.593 14.336C131.945 14.688 132.393 15 132.937 15.272C133.481 15.528 134.057 15.776 134.665 16.016C135.193 16.208 135.713 16.44 136.225 16.712C136.753 16.968 137.225 17.288 137.641 17.672C138.057 18.056 138.385 18.536 138.625 19.112C138.881 19.672 139.009 20.368 139.009 21.2C139.009 22.112 138.777 22.952 138.312 23.72C137.849 24.472 137.185 25.072 136.321 25.52C135.457 25.968 134.401 26.192 133.153 26.192C132.433 26.192 131.721 26.112 131.017 25.952C130.329 25.792 129.673 25.576 129.049 25.304C128.425 25.016 127.849 24.696 127.321 24.344L128.569 22.16C128.953 22.448 129.393 22.712 129.889 22.952C130.385 23.192 130.897 23.384 131.425 23.528C131.953 23.656 132.449 23.72 132.913 23.72C133.409 23.72 133.897 23.64 134.377 23.48C134.873 23.32 135.281 23.056 135.601 22.688C135.937 22.32 136.105 21.832 136.105 21.224C136.105 20.728 135.961 20.304 135.673 19.952C135.385 19.6 135.009 19.296 134.545 19.04C134.097 18.768 133.601 18.528 133.057 18.32C132.513 18.112 131.953 17.88 131.377 17.624C130.817 17.368 130.297 17.056 129.817 16.688C129.337 16.304 128.945 15.84 128.641 15.296C128.337 14.752 128.185 14.08 128.185 13.28C128.185 12.32 128.409 11.488 128.857 10.784C129.305 10.08 129.921 9.52 130.705 9.104C131.505 8.688 132.425 8.464 133.465 8.432C134.697 8.432 135.745 8.584 136.609 8.888C137.489 9.176 138.265 9.528 138.937 9.944L137.881 12.08ZM146.401 26.264C145.441 26.264 144.569 26.064 143.785 25.664C143.017 25.264 142.409 24.672 141.961 23.888C141.513 23.088 141.289 22.104 141.289 20.936C141.289 19.784 141.521 18.8 141.985 17.984C142.465 17.152 143.089 16.512 143.857 16.064C144.641 15.616 145.489 15.392 146.401 15.392C147.377 15.392 148.161 15.584 148.753 15.968C149.361 16.352 149.833 16.808 150.169 17.336L150.025 17.72L150.289 15.848H152.761V26H150.073V23.528L150.337 24.176C150.273 24.272 150.145 24.432 149.953 24.656C149.761 24.864 149.497 25.096 149.161 25.352C148.825 25.608 148.425 25.824 147.961 26C147.513 26.176 146.993 26.264 146.401 26.264ZM147.145 24.056C147.625 24.056 148.057 23.968 148.441 23.792C148.841 23.616 149.177 23.368 149.449 23.048C149.737 22.728 149.945 22.344 150.073 21.896V19.688C149.945 19.272 149.737 18.912 149.449 18.608C149.161 18.288 148.809 18.04 148.393 17.864C147.993 17.688 147.545 17.6 147.049 17.6C146.505 17.6 146.001 17.736 145.537 18.008C145.073 18.28 144.697 18.656 144.409 19.136C144.137 19.616 144.001 20.168 144.001 20.792C144.001 21.4 144.145 21.952 144.433 22.448C144.721 22.944 145.105 23.336 145.585 23.624C146.065 23.912 146.585 24.056 147.145 24.056ZM157.361 26V18.2H155.633V15.824H157.361V11.84C157.361 10.432 157.713 9.328 158.417 8.528C159.137 7.712 160.177 7.304 161.537 7.304C161.921 7.304 162.345 7.36 162.809 7.472C163.273 7.584 163.681 7.76 164.033 8L162.905 9.944C162.761 9.784 162.593 9.672 162.401 9.608C162.209 9.544 162.017 9.512 161.825 9.512C161.281 9.512 160.849 9.696 160.529 10.064C160.209 10.432 160.049 11.048 160.049 11.912V15.824H162.833V18.2H160.049V26H157.361ZM164.513 15.848H167.225V26H164.513V15.848ZM164.393 12.2C164.393 11.784 164.553 11.44 164.873 11.168C165.209 10.896 165.569 10.76 165.953 10.76C166.337 10.76 166.681 10.896 166.985 11.168C167.289 11.44 167.441 11.784 167.441 12.2C167.441 12.616 167.289 12.96 166.985 13.232C166.681 13.488 166.337 13.616 165.953 13.616C165.569 13.616 165.209 13.488 164.873 13.232C164.553 12.96 164.393 12.616 164.393 12.2Z"
            fill="#FE873F"
          />
          <path
            d="M1.93692 16.8521L11.9958 10.9881C13.0017 10.4017 14.0122 9.82456 15.0111 9.22419C15.1471 9.11904 15.3129 9.05909 15.485 9.05283C15.6571 9.04656 15.8269 9.0943 15.9702 9.18929C20.2635 11.7071 24.5623 14.2164 28.8666 16.7172C28.9064 16.7428 28.9251 16.8009 28.9531 16.8452C28.8455 17.164 28.5321 17.2384 28.2911 17.3804C24.298 19.719 20.2932 22.0344 16.3024 24.3893C15.7737 24.7012 15.3667 24.757 14.7936 24.4196C10.7373 22.0135 6.65524 19.6492 2.58491 17.271C2.41882 17.1709 2.2574 17.0546 1.93692 16.8521Z"
            fill="#1F1C9B"
          />
          <path
            d="M20.6019 3.26703L0.849158 14.7811C0.0444496 15.2465 0.0117055 15.2302 0.00702698 14.3157C0.00702698 12.9521 0.00702698 11.5861 0.00702698 10.2225C0.00702698 9.04036 0.474885 8.21194 1.54627 7.61157C5.70549 5.26749 9.84053 2.89238 13.9514 0.486249C15.0181 -0.135063 15.9983 -0.181598 17.0626 0.469966C18.2767 1.21228 19.5353 1.88712 20.7727 2.5922C21.3084 2.96685 20.8008 3.07855 20.6019 3.26703Z"
            fill="#FE873F"
          />
          <path
            d="M0.343888 18.6835C0.542725 18.7929 0.748585 18.9022 0.947423 19.0186C4.81658 21.2758 8.67871 23.5423 12.5572 25.7809C13.1257 26.109 13.1654 26.3138 12.59 26.6372C11.0718 27.4982 9.54892 28.3639 8.05413 29.2481C7.9091 29.341 7.7386 29.3866 7.56631 29.3787C7.39402 29.3708 7.22847 29.3097 7.09268 29.2039C5.18695 28.0854 3.27032 26.9832 1.34276 25.8972C0.93655 25.6924 0.596497 25.378 0.361521 24.9899C0.126544 24.6019 0.00613525 24.1558 0.0140568 23.7029C-0.00699664 22.2229 0.0140568 20.7429 0.0140568 19.2629C0.0117175 19.0302 -0.0748417 18.7138 0.343888 18.6835Z"
            fill="#FE873F"
          />
          <path
            d="M30.9883 12.233C30.9883 12.9567 30.9579 13.6851 30.9883 14.4065C31.0187 15.1278 30.7918 15.1348 30.2538 14.8183C27.5527 13.2313 24.8438 11.6497 22.1272 10.0736C20.8944 9.35916 19.6662 8.64011 18.4311 7.9327C17.9188 7.63949 17.8931 7.4161 18.4311 7.11359C19.9532 6.26656 21.4667 5.40246 22.9716 4.5213C23.3646 4.2886 23.6734 4.37935 24.0266 4.57715C25.9121 5.67084 27.7952 6.76919 29.69 7.83497C30.1067 8.0495 30.4511 8.38059 30.681 8.78745C30.9109 9.1943 31.016 9.65916 30.9836 10.1247C30.9743 10.8391 30.986 11.5349 30.9883 12.233Z"
            fill="#FE873F"
          />
          <path
            d="M30.986 19.5026C30.986 18.5346 30.9649 18.516 30.1064 19.0186C23.5658 22.838 17.0252 26.6574 10.4846 30.4768C9.94424 30.791 9.94424 30.9725 10.4846 31.2703C11.8882 32.0499 13.2707 32.8504 14.6626 33.6439C15.2521 34.1093 15.8322 34.1256 16.4193 33.6439C20.8031 31.1012 25.1869 28.5586 29.5707 26.0159C30.5532 25.4481 31.0304 24.6616 31.0047 23.5237C30.9649 22.174 30.9907 20.8406 30.986 19.5026Z"
            fill="#FE873F"
          />
        </svg>
      </div>
      <div className="block sm:hidden">
        <i class="bx bx-menu bx-md text-black" onClick={toggleMenu}></i>
      </div>
      <div
        className="absolute top-0 sm:block p-5 sm:p-0 min-w-[200px] w-[100%]"
        style={showMenu ? { display: "block" } : { display: "none" }}
      >
        <nav>
          <i class="bx bx-x bx-sm text-black" onClick={toggleMenu}></i>
          <ul className=" flex flex-col sm:flex-row justify-around font-josefin text-base md:text-lg text-black font-extrabold w-auto">
            <Link to={"/"}>
              <li className="my-2 mx-1 w-[100%] min-w-[100px] ">Home</li>
            </Link>
            <Link to={"/features"}>
              <li className="my-2 mx-1 w-[100%] min-w-[100px] ">Features</li>
            </Link>
            <Link to={"/contact"}>
              <li className="my-2 mx-1 w-[100%] min-w-[100px] ">Contact Us</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="hidden sm:block">
        <nav>
          <ul className=" flex flex-col sm:flex-row justify-around font-josefin text-base md:text-lg text-black font-extrabold w-auto">
            <Link to={"/"}>
              <li className="mx-1 w-[100%] min-w-[100px] ">Home</li>
            </Link>
            <Link to={"/features"}>
              <li className="mx-1 w-[100%] min-w-[100px] ">Features</li>
            </Link>
            <Link to={"/contact"}>
              <li className="mx-1 w-[100%] min-w-[100px] ">Contact Us</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="hidden sm:block">
        <button className="bg-blue-800 text-white py-2 px-3 rounded-full">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
