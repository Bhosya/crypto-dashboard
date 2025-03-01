<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import { cryptoPrices, updatePrices } from './lib/stores';
  import CryptoChart from './lib/CryptoChart.svelte';

  onMount(() => {
    updatePrices()
    setInterval(updatePrices, 10000)
  })
</script>

<main>
  <h1>Crypto Dashboard</h1>

  <CryptoChart />

  <p>
    Check out <a href="https://github.com/Bhosya/crypto-dashboard" target="_blank" rel="noreferrer" style="color: rgb(255, 99, 132);">Github</a>, to get the source code!
  </p>
</main>

