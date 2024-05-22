import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/*
export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Get useNavigate hook

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(searchTerm !== '') {
        navigate(`/RecepeList/${searchTerm}`);
    }
  }

    return (
      <form onSubmit={handleSubmit} className='flex justify-center p-5'>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSubmit(event);
                }
              }}
          />
        <Button type="submit">Search</Button>
        </div>
      </form>
    );
}
*/

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Get useNavigate hook

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = searchTerm.trim();

        if (query){
            const searchParams = new URLSearchParams({ query });
            navigate(`/recipe-list?${searchParams.toString()}`); // Use Link approach
        }
    }

    return (
    <div className="dark:bg-gray-800">
        <div className="dark:bg-transparent">
            <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                    <h1
                        className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                        Sapori
                        <span className="text-green-500 px-2">vegetali</span>
                        che conquistano
                    </h1>
                    <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
                        Il gusto della natura in ogni piatto
                    </p>
                </div>
                <div className="flex w-11/12 md:w-8/12 xl:w-6/12 place-content-center">
                    {/* Qui parte la search bar*/}
                    <form onSubmit={handleSubmit} className='flex justify-center p-5'>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleInputChange}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                    handleSubmit(event);
                                    }
                                }}
                            />
                            <Button type="submit">Search</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}