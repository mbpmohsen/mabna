import React from "react";
import {AssetType} from "../../services/test-server";
import {useScroll} from "../../hooks/useScroll/useScroll";
import {Row} from "./Row";

type Column = {
    id: number,
    name: string,
}

function Table({rows, columns, giveMeMore}: {rows: AssetType[], columns: Column[], giveMeMore: () => void}) {
    const data: any[] = React.useMemo(() => rows, [rows]);
    const [state] = useScroll('main');

    React.useEffect(() => {
        if (state) {
            giveMeMore();
        }
    }, [state]);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400" id={'main'}>
                <thead className="shadow-md text-xs text-gray-800 bg-white  dark:text-gray-800 mb-2 border-b border-gray-300">
                <tr>
                    {columns.map((data): JSX.Element => (
                        <th scope="col" className="px-6 py-3" key={data.id}>
                            {data.name}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className=" before:content-[@] before:block before:leading-3 before:indent-[-99999px]">
                {data.map((item) => (
                    <Row {...item}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export {Table}