import { CoinGeckoClient } from "coingecko-api-v3";

const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
});

const trending = await client.trending();

const btcprice = client.simplePrice(btc);

