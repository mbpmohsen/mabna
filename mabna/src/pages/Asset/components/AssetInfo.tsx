import React from "react";
import {TradesContext} from "../../../Contexts/TradeContext/TradeContext";

const AssetInfo = () => {
    const {asset, trade} = React.useContext(TradesContext)

    return (
        <React.Fragment>
            <div className="w-full block p-5 bg-white rounded-sm border border-gray-200 shadow-md mt-5">
                <div className="flex items-center mb-4">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-sky-500 mb-0">{asset?.value?.trade_symbol}</h5>
                    <span className={'text-lg mr-5'}>{(trade?.value?.value)?.toLocaleString()}</span>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">{asset?.value?.title}</p>
            </div>
        </React.Fragment>
    )
}

export default AssetInfo;