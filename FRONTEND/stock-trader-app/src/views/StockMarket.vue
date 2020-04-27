<template>
    <div>
        <b-card-group deck class="m-5">
            <div v-for="stock in stocks" :key="stock.id">
                <b-card
                    header-bg-variant="success"             
                    :header="stock.type"
                    header-text-variant="white"
                    class="text-center mb-5 mx-4"
                    footer="Owned: 2"
                    footer-tag="footer"
                    style="min-width: 25rem; min-height: 15rem;"
                >
                <b-card-text>
                <div class="container">
                    <div class="row">
                        <div class="col">Available: {{stock.available}}</div>
                        <div class="col">Price: {{stock.currentPrice}}</div>
                    </div>
                </div>
                </b-card-text>

                <div class="container">
                    <div class="row">
                        <button class="col btn bg-success mx-2">BUY</button>
                        <button class="col btn bg-danger mx-2">SELL</button>
                    </div>
                </div>
                </b-card>


            </div>
        </b-card-group>
    </div>
</template>

<script src="../components/StockMarket.ts"></script>

<style scoped>
</style>