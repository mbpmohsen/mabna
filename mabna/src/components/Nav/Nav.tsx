import React from 'react';
import {Outlet, Link} from "react-router-dom";
import {useDebounce} from '../../hooks/useDebounce/useDebounce';
import {AssetType} from "@Services/test-server";
import {SearchContext} from "../../Contexts/SearchBox/SearchBox";

const Navbar = () => {
    const [searchValue, setSearchValue] = React.useState("");
    const debouncedSearchValue = useDebounce(searchValue, 500);
    const response = React.useContext<AssetType[]>(SearchContext);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;

        setSearchValue(value);
    }


    return (
        <React.Fragment>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-3 dark:bg-gray-800">
                <div className="container mx-4 flex justify-between items-between">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">لیست دارایی ها</span>
                    </Link>
                    <div className="w-full mr-10">
                        <div className="relative">
                            <input type="text" id="search-navbar"
                                   className="block p-2 pr-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="جستجو نام نماد، نام شرکت" onChange={handleSearch}/>
                            <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </div>
                            {debouncedSearchValue && (
                                <div className="py-3 text-sm absolute z-20 bg-white shadow w-full top-16 rounded max-h-40 overflow-y-scroll">
                                    {response.filter(item => item?.value?.trade_symbol?.includes(debouncedSearchValue) || item?.value?.title?.includes(debouncedSearchValue)).map(item => (
                                        <div
                                            className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                            <div className="flex-grow font-medium px-2">{item?.value?.trade_symbol}</div>
                                            <div className="text-sm font-normal text-gray-500 tracking-wide">{item?.value?.title}</div>
                                        </div>))}
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </nav>
            <div className="px-6 pt-5 bg-zinc-100 h-screen">
                <Outlet/>
            </div>
        </React.Fragment>

    )
}

export default Navbar;