<script>
// @ts-nocheck

    import { onMount } from 'svelte'
    import { priceHistory } from './stores';
    import { cryptoPrices } from './stores';
    import Chart from 'chart.js/auto';

    let bitcoinChart, ethereumChart;
    let bitcoinCanvas, ethereumCanvas;

    onMount(() => {
        const btcCtx = bitcoinCanvas.getContext('2d');
        const ethCtx = ethereumCanvas.getContext('2d');

        bitcoinChart = new Chart(btcCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Bitcoin Price (USD)',
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    data: [],
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        ethereumChart = new Chart(ethCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Ethereum Price (USD)',
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    data: [],
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Update chart setiap kali data berubah
        priceHistory.subscribe(history => {
            const timestamps = history.bitcoin.map(d => new Date(d.time).toLocaleTimeString());

            // Update Bitcoin chart
            bitcoinChart.data.labels = timestamps;
            bitcoinChart.data.datasets[0].data = history.bitcoin.map(d => d.price);
            bitcoinChart.update();

            // Update Ethereum chart
            ethereumChart.data.labels = timestamps;
            ethereumChart.data.datasets[0].data = history.ethereum.map(d => d.price);
            ethereumChart.update();
        });
    })
</script>

<style>
    canvas {
        width: 100% !important;
        height: 300px !important; /* Batasi tinggi grafik */
        display: block;
    }

    .chart-container {
        width: 100%;
        max-width: 600px; /* Bisa diatur sesuai keinginan */
        height: 300px;
        margin: auto;
    }
</style>

<div class="container">
    <div class="chart-container">
        <div>
            {#await $cryptoPrices}
              <p>Loading...</p>
            {:then prices}
              <p>Bitcoin: ${prices.bitcoin?.usd} USD</p>
            {/await}
          </div>
        <canvas bind:this={bitcoinCanvas}></canvas>
    </div>
    
    <div class="chart-container">
        <div>
            {#await $cryptoPrices}
              <p>Loading...</p>
            {:then prices}
              <p>Ethereum: ${prices.ethereum?.usd} USD</p>
            {/await}
          </div>
        <canvas bind:this={ethereumCanvas}></canvas>
    </div>
</div>