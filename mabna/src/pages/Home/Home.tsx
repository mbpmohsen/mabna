import React from 'react';
import { getAssets, AssetType } from '../../services/test-server';
import { Table } from "../../components/Table/Table";
import {COLUMNS} from "./utils";
import {flushSync} from "react-dom";

const Home: React.FC = () => {
    const [response, saveResponse] = React.useState<AssetType[]>([]),
        [tableData, setTableData] = React.useState<AssetType[]>([]);

    console.log("response", response)
    console.log("tableData", tableData);

    function handleSaveResponse(data: AssetType[]) {
        flushSync(() => {
            saveResponse(data);
            if (data.length < 30) {
                setTableData(data);
                return;
            }
            setTableData(data.slice(0, 30));
            return;
        });
    }

    function handleGiveMore() {
        const tableLength = tableData.length
        if (response.length > tableLength) {
            const spliceData = response.slice(tableLength - 1, tableLength + 30)
            setTableData(data => [...data, ...spliceData]);
        }
    }

    React.useEffect(() => {
        getAssets().then((response: any) => {
            handleSaveResponse(response.data)
        })
    }, [])

    return (
        <React.Fragment>
            <Table rows={tableData} columns={COLUMNS} giveMeMore={handleGiveMore}/>
        </React.Fragment>
    )
}

export default Home;