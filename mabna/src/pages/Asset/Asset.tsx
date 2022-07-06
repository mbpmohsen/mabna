import React, {useMemo} from "react";
import {useParams} from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AssetInfo from "./components/AssetInfo";
import {Trades} from "./components/TradesInfo";
import {Bidasks} from "./components/Bidasks";
import {TradesContext} from "../../Contexts/TradeContext/TradeContext";
import {AssetType, getAsset} from "../../services/test-server/asset/asset";
import {getBidasks, BidasksType} from "../../services/test-server/bidasks/bidasks";
import {getTrades, TradesType} from "../../services/test-server/trades/asset";

type AssetParamsType = {
    asset_id: string
}

type ResponsesType = { asset: AssetType| undefined, bidasks: BidasksType| undefined, trade:TradesType| undefined}

const Asset:React.FC = () => {
    const params = useParams<AssetParamsType>(),
        [response, saveResponse] = React.useState<ResponsesType>({asset: undefined, bidasks: undefined, trade:undefined});

    const urls = [
        {id: 0,title: 'لیست دارایی ها', url: '/', current: false},
        {id: 0,title: 'لیست دارایی ها', url: '/', current: true,}
    ]

    const values = useMemo(() =>({...response}) , [response]);

    React.useEffect(() => {
        const {asset_id} = params;
        if (asset_id) {
            Promise.all([getAsset(asset_id), getBidasks([asset_id]), getTrades([asset_id])]).then((response: any) => {
                const [asset, bidasks, trade] = response;
                saveResponse({asset: asset.data[0], bidasks: bidasks.data[0], trade: trade.data[0]})
            })
        }
    }, [])

    return (
        <React.Fragment>
            <TradesContext.Provider value={values}>
                <Breadcrumb data={urls}/>
                <AssetInfo />
                <div className="flex mt-5">
                    <div className="w-1/2">
                        <Trades />
                    </div>
                    <div className="mx-2"/>
                    <div className="w-1/2">
                        <Bidasks />
                    </div>
                </div>
            </TradesContext.Provider>
        </React.Fragment>
    )
}

export default Asset;