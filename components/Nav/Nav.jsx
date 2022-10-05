import React from 'react';
import {SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";

const SvgLogo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1000}
        height={1000}
        xmlSpace="preserve"
        {...props}
    >
        <rect width="20%" height="20%" fill="rgba(255,255,255,0)" />
        <g>
            <path
                style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeDashoffset: 0,
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    isCustomFont: "none",
                    fontFileUrl: "none",
                    fill: "#c48a8a",
                    fillOpacity: 0,
                    fillRule: "evenodd",
                    opacity: 1,
                }}
                transform="translate(45.452 45.452) scale(4.7163)"
                d="M0 0h192.756v192.756H0V0z"
                fill="none"
            />
            <path
                style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeDashoffset: 0,
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    isCustomFont: "none",
                    fontFileUrl: "none",
                    fill: "#fff",
                    fillRule: "evenodd",
                    opacity: 1,
                }}
                transform="translate(45.452 45.452) scale(4.7163)"
                d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z"
            />
        </g>
    </svg>
)

function Nav(props) {
    return (
        <div className='border-b border-white'>
           <div className='flex justify-between items-center px-14 md:px-32'>
               <div className=''>
                   <img className='w-24' src="/logo.svg" alt=""/>
               </div>
               <ul className='hidden md:flex space-x-6 uppercase text-[15px] font-semibold'>
                   <li><a href="#">Men</a></li>
                   <li><a href="#">Women</a></li>
                   <li><a href="#">Kids</a></li>
                   <li><a href="#">Customize</a></li>
                   <li><a href="#">Favorites</a></li>
               </ul>

               <div className="flex space-x-6">
                   <div className='w-10 h-10 bg-red-500 rounded-full flex items-center justify-center'>
                       <SearchIcon className='h-5 w-5'/>
                   </div>
                   <div className='w-10 h-10 bg-white text-[#35373B] rounded-full flex items-center justify-center'>
                       <ShoppingCartIcon className='h-5 w-5'/>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Nav;