import React from 'react';
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import {PlusIcon} from "@heroicons/react/solid";

function Card({ image, name, price, colors }) {
    return (
        <div className='bg-white rounded-xl h-32 w-[100%]  flex items-center space-x-4 text-[#35373B] py-2 pr-4'>
           <div className='-ml-8 mt-14'>
               <Image src={image} height={240} width={240} objectFit='contain' alt={name} />
           </div>

           <div className='flex w-full'>
               <div>
                   <h3 className='font-bold text-[14px] uppercase no-wrap'>{name}</h3>
                   <div className='flex text-[#ffc72d]'>
                       <StarIcon className='h-4 w-4'/>
                       <StarIcon className='h-4 w-4'/>
                       <StarIcon className='h-4 w-4'/>
                       <StarIcon className='h-4 w-4'/>
                       <StarIcon className='h-4 w-4 text-gray-400'/>
                   </div>
                   <h2 className='font-bold text-[14px]'>${price}</h2>
                   <h2 className='text-[16px] font-semibold text-gray-500'>{colors}</h2>
               </div>

               <div className='mt-14'>
                   <PlusIcon className='h-6 w-6'/>
               </div>
           </div>


        </div>

    );
}

export default Card;