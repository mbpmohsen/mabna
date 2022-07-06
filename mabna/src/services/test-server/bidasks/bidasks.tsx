import axios from "axios";

export type OrderType = {
    order_rank: number,
    ask_count: number,
    ask_volume: number,
    ask_price: number,
    bid_count: number,
    bid_volume: number,
    bid_price: number
};

export type BidasksType = {
    entity: {
        id: string,
        meta: {
            type: string
        }
    },
    type: string,
    value: {
        start_date_time: string,
        end_date_time: string,
        instrument: {
            id: string,
            meta: {
                type: string
            }
        },
        orders: OrderType[]
    },
    id: string,
    meta: {
        version: number,
        state: string,
        insert_date_time: string,
        update_date_time: string,
        type: string
    }
}

type GetAssetResponse = {
    data: BidasksType[];
};

const getBidasks = async (ids: string[]) => {
    try {

        const { data } = await axios.get<GetAssetResponse>(
            'http://localhost:3000/bidasks',
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
            console.error('API request error on /asset', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export { getBidasks }