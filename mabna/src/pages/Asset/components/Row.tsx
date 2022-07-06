import React from "react"
import {OrderType} from "@Services/test-server/bidasks/bidasks";

const Row:React.FC<OrderType> = (item: OrderType) => {

    return (
        <tr className="bg-white border-b dark:border-gray-300">
            <td className="px-6 py-4 text-emerald-600">
                {(item.bid_count)?.toLocaleString()}
            </td>
            <td className="px-6 py-4 text-emerald-600">
                {(item?.order_rank)?.toLocaleString()}
            </td>
            <td className="px-6 py-4 text-emerald-600">
                {(item?.ask_price)?.toLocaleString()}
            </td>
            <td className="px-6 py-4 text-rose-700">
                {(item?.ask_volume)?.toLocaleString()}
            </td>
            <td className="px-6 py-4 text-rose-700">
                {(item?.bid_price).toLocaleString()}
            </td>
            <td className="px-6 py-4 text-rose-700">
                {(item?.ask_count)?.toLocaleString()}
            </td>
        </tr>
    )
}
export {Row}