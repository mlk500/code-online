import Link from 'next/link';
import React from 'react';
import Image from "next/image";

type TopbarProps = {
    role?: 'mentor' | 'student' | null;
};

const Topbar: React.FC<TopbarProps> = ({ role }) => {
    return (
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
            <Link href='/' className='h-[50px] flex-1 flex items-center'>
                <Image
                    src='/code-logo.png'
                    alt='Logo'
                    height={100}
                    width={100}
                    className='object-contain'
                />
            </Link>

            <div className='flex items-center space-x-4 flex-1 justify-end'>
                {role && (
                    <div className='cursor-pointer group relative'>
                        <Image src='/avatar.png' alt='Avatar' width={30} height={30} className='rounded-full' />
                        <div
                            className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-[#44BAE9] p-2 rounded shadow-lg 
                           z-40 group-hover:scale-100 scale-0 
                           transition-all duration-300 ease-in-out'
                        >
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                        </div>
                    </div>
                )}
            </div>
        </nav >
    );
}
export default Topbar;