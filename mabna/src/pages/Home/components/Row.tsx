import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {getTrades, TradesType} from "../../../services/test-server/trades/asset";
import {AssetType} from "../../../services/test-server";

const Row:React.FC<AssetType> = (item: AssetType) => {
    const [trades, setTrades] = React.useState<TradesType>();

    useEffect(() => {
        getTrades([item.entity.id]).then((response: any) => {
            setTrades(response.data[0]);
        })
    }, []);

    return (
        <tr className="bg-white border-b dark:border-gray-300" key={item.id}>
            <th scope="row" className="px-6 py-4 text-sky-500">
                <Link to={`/asset/${item.entity.id}?name=${item.value.trade_symbol}`}>
                    {item.value.trade_symbol}
                </Link>
            </th>
            <td className="px-6 py-4">
                {item.value.short_title}
            </td>
            <td className="px-6 py-4">
                {trades?.value?.close_price?.toLocaleString() ?? 'نامشخص'}
            </td>
            <td className="px-6 py-4">
                {trades?.value?.value?.toLocaleString() ?? 'نامشخص'}
            </td>
        </tr>
    )
}
export {Row}