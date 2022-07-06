import React from "react";
import {AssetType, getAssets} from "../../services/test-server";
import {flushSync} from "react-dom";

const SearchContext = React.createContext<any>({});

const SearchContextProvider = (props: any) => {
    const [response, saveResponse] = React.useState<AssetType[]>([]);

    function handleSaveResponse(data: AssetType[]) {
        flushSync(() => {
            saveResponse(data);
        });
    }

    React.useEffect(() => {
        getAssets().then((response: any) => {
            handleSaveResponse(response.data)
        })
    }, [])

    return <SearchContext.Provider value={response} {...props}/>
}
export {SearchContext, SearchContextProvider}