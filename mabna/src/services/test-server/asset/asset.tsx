import axios from "axios";

type Asset = {
    entity: {
        id: string,
        meta: {
            type: string
        }
    },
    type: string,
    value: {
        title: string,
        english_title: string,
        short_title: string,
        english_short_title: string,
        trade_symbol: string,
        english_trade_symbol: string
    },
    id: string,
    meta: {
        version: number,
        state: string,
        insert_date_time: string,
        type: string
    }
};

type GetAssetResponse = {
    data: Asset[];
};

const getAsset = async () => {
    try {

        const { data } = await axios.get<GetAssetResponse>(
            '/asset',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API request error on /assets', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export { getAsset }