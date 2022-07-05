import axios from "axios";

export type TradesType =  {
    "entity": {
        "id": string,
        "meta": {
            "type": string
        }
    },
    "type": string,
    "value": {
        "start_date_time": string,
        "end_date_time": string,
        "instrument": {
            "id": string,
            "meta": {
                "type": string
            }
        },
        "close_price": number,
        "close_price_change": number,
        "close_price_change_percent": number,
        "open_price": number,
        "low_price": number,
        "high_price": number,
        "trade_count": number,
        "buyer_count": number,
        "volume": number,
        "value": number
    },
    "id": string,
    "meta": {
        "version": number,
        "state": string,
        "insert_date_time": string,
        "update_date_time": string,
        "type": string
    }
}

type GetTradesResponse = {
    data: TradesType[];
};

const getTrades = async (ids: string[]) => {
    try {

        const { data } = await axios.get<GetTradesResponse>(
            'http://localhost:3000/trades',
            {
                headers: {
                    Accept: 'application/json',
                },
                params: {
                    asset_id: ids.join(',')
                }
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

export { getTrades }