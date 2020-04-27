import {Component, Prop, Vue } from 'vue-property-decorator';
import ApiService, { Stock, User } from '@/ApiService';

@Component
export default class StockMarket extends Vue {
    apiService = new ApiService(); 
    currentUser: User = this.$store.state.User; 
    stocks: Array<Stock> = new Array<Stock>();

    mounted(){
        this.fetchStocks(); 
    }
    
    fetchStocks() {
        this.stocks = this.apiService.getStocks()
    }  
}