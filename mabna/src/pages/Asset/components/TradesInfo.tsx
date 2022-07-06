import React from "react";
import {TradesContext} from "../../../Contexts/TradeContext/TradeContext";

const Trades = () => {
    const {trade} = React.useContext(TradesContext);

    return (
        <React.Fragment>
            <div>
                <div className="w-full block p-3 bg-white rounded-sm border border-gray-200 shadow-md">
                    <h6 className="mb-2 text-sm font-bold tracking-tight text-gray-800 mb-0">اطلاعات معاملات</h6>
                </div>
                <div className="w-full text-xs block p-3 bg-white rounded-sm border border-gray-200 shadow-md mt-3">
                    <div className="flex items-center justify-between py-2 mb-2 text-sm font-bold tracking-tight text-gray-800 mb-0 border-b">
                        <span>پایانی</span>
                        <span>{(trade?.value?.close_price)?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2 py-2 text-sm font-bold tracking-tight text-gray-800 mb-0 border-b">
                        <span>بیشترین</span>
                        <span>{(trade?.value?.high_price)?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2 py-2 text-sm font-bold tracking-tight text-gray-800 mb-0 border-b">
                        <span>کمترین</span>
                        <span>{(trade?.value?.low_price)?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 mb-2 text-sm font-bold tracking-tight text-gray-800 mb-0 border-b">
                        <span>اولین</span>
                        <span>{(trade?.value?.open_price)?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2 py-2 text-sm font-bold tracking-tight text-gray-800 mb-0 border-b">
                        <span>آخرین</span>
                        <span>{(trade?.value?.real_close_price)?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2 py-2 text-sm font-bold tracking-tight text-gray-800 mb-0 border-b">
                        <span>حجم</span>
                        <span>{(trade?.value?.volume)?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2 py-2 text-sm font-bold tracking-tight text-gray-800 mb-0">
                        <span>ارزش</span>
                        <span>{(trade?.value?.value)?.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export {Trades}