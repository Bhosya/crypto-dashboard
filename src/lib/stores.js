import { writable } from "svelte/store";
import { fetchCryptoPrices } from "./api";

export const cryptoPrices = writable({});

export const priceHistory = writable({
    bitcoin: [],
    ethereum: [],
})

export async function updatePrices() {
    const data = await fetchCryptoPrices()
    cryptoPrices.set(data)

    priceHistory.update(history => {
        return {
            bitcoin: [...history.bitcoin, { time: Date.now(), price: data.bitcoin?.usd }],
            ethereum: [...history.ethereum, { time: Date.now(), price: data.ethereum?.usd }],
        };
    })
}