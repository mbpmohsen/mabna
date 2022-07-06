import React from 'react';
import { AssetType } from '../../services/test-server';
import { Table } from "../../components/Table/Table";
import {COLUMNS} from "./utils";
import {Row} from "./components/Row";
import {SearchContext} from "../../Contexts/SearchBox/SearchBox";

const Home: React.FC = () => {
    const response = React.useContext<AssetType[]>(SearchContext),
        [tableData, setTableData] = React.useState<AssetType[]>([]);

    function handleSaveResponse(data: AssetType[]) {
        if (data.length < 30) {
            setTableData(data);
            return;
        }
        setTableData(data.slice(0, 30));
        return;
    }

    function handleGiveMore() {
        const tableLength = tableData.length;
        if (response.length > tableLength) {
            const spliceData = response.slice(tableLength - 1, tableLength + 30)
            setTableData(data => [...data, ...spliceData]);
        }
    }

    React.useEffect(() => {
        if(response.length) {
            handleSaveResponse(response)
        }
    }, [response])

    return (
        <React.Fragment>
            <Table rows={tableData} columns={COLUMNS} giveMeMore={handleGiveMore} rowComponent={Row} virtualList/>
        </React.Fragment>
    )
}

export default Home;