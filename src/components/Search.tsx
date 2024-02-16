import React from 'react'
import { CiSearch } from "react-icons/ci";
import Google from '../images/Google_2015_logo.svg'

function Search ( ) {

  const searchAnimal = () => {
    alert('Buscando animal')
  }

    return (
      <div className='flex flex-col justify-center items-center m-60'>
      <div className="">
      <img src={Google} alt="Google" style={{margin: '0'}}/>
      </div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm"><CiSearch /> </span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-3xl border-md py-2.5 pl-7 pr-40 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
        />
      </div>
      <button className=' mt-6 px-4 py-2 rounded-md bg-gray-300 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ..."'
      onClick={searchAnimal}>Buscar</button>
    </div>
    )
} 

export default Search