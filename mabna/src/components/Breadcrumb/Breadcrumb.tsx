import React from "react";
import {Link} from "react-router-dom";

type BreadCrumbType = {id: number,title: string, url: string, current: boolean};

const Breadcrumb = ({data}: {data: BreadCrumbType[]}) => {

    return (
        <React.Fragment>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    {data.map((data, index) => {
                        if (data.current) {
                            return (
                                <li aria-current="page" key={index}>
                                    <div className="flex items-center">
                                        <span className={'mx-2 text-stone-400'}>/</span>
                                        <span className="ml-1 text-sm font-medium text-sky-500 md:ml-2">{data.title}</span>
                                    </div>
                                </li>
                            )
                        }
                        return (
                            <li className="inline-flex items-center" key={index}>
                                <Link to={data.url}
                                      className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600">
                                    {data.title}
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </React.Fragment>
    )
}

export default Breadcrumb;