import React from "react";
import {Table} from "../../../components/Table/Table";
import {COLUMNS} from "./utils";
import {Row} from "./Row";
import {TradesContext} from "../../../Contexts/TradeContext/TradeContext";

const Bidasks:React.FunctionComponent = () => {
    const {bidasks} = React.useContext(TradesContext);

    return (
        <React.Fragment>
            <div>
                <div className="w-full block p-3 bg-white rounded-sm border border-gray-200 shadow-md">
                    <h6 className="mb-2 text-sm font-bold tracking-tight text-gray-800 mb-0">عرضه و تقاضا</h6>
                </div>
                <div className="w-full text-xs block p-3 bg-white rounded-sm border border-gray-200 shadow-md mt-3">
                    <Table rows={bidasks?.value?.orders ?? []} columns={COLUMNS} rowComponent={Row} headerSpace={false}/>
                </div>
            </div>
        </React.Fragment>
    )
}
export {Bidasks}