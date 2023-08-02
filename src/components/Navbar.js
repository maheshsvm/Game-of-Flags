import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-purple-900 py-3 sticky top-0 left-0 z-10 ' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            <header className="text-gray-600 body-font  flex justify-center">
            <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0" href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl text-white">Game of Flags</span>
                    </a>
            </header>
        </div>
    )
}

export default Navbar
