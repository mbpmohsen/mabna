import React from "react";
import {AssetType} from "../../services/test-server";
import {useScroll} from "../../hooks/useScroll/useScroll";

type Column = {
    id: number,
    name: string,
}

function Table({
                   rows,
                   columns,
                   giveMeMore,
                   virtualList,
                   rowComponent,
                   headerSpace
               }: { rows: AssetType[] | [], columns: Column[], giveMeMore?: () => void, virtualList?: boolean, rowComponent: React.FC<any>, headerSpace?: boolean }) {

    const data: any[] = React.useMemo(() => rows, [rows]);
    const [state] = useScroll('main');
    const RowComponent = rowComponent;

    React.useEffect(() => {
        if (state && virtualList && giveMeMore) {
            giveMeMore();
        }
    }, [state]);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400" id={'main'}>
                <thead
                    className="shadow-md text-xs text-gray-800 bg-white  dark:text-gray-800 mb-2 border-b border-gray-300">
                <tr>
                    {columns.map((data): JSX.Element => (
                        <th scope="col" className="px-6 py-3" key={data.id}>
                            {data.name}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className={headerSpace ? "before:content-[@] before:block before:leading-3 before:indent-[-99999px]" : ''}>
                {data.map((item, index) => (
                    <RowComponent {...item} key={index}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export {Table}