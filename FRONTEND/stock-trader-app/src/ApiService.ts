import { Component, Prop, Vue } from 'vue-property-decorator';

export interface User {
    userId: string; 
    password: string;
}

export interface Stock {
    id: string; 
    currentPrice: number; 
    type: string; 
    totalAmount: number; 
    available: number; 
}

export interface UserStock {
    id: string; 
    type: string; 
    amount: number; 
    refStock: string;
}

export interface Word {
    word: string;
    pronunciation: string; 
}

@Component
export default class ApiService extends Vue {
    url = 'https://owlbot.info/api/v4/dictionary/tiger'

    async testCallV2(): Promise<Word>{
        const response = await this.$http.get('https://owlbot.info/api/v4/dictionary/tiger', {
            headers: {Authorization: 'Token 926a20aef4ee2ddc979b384a1ebc1fc0ffe1d253'}
        });

        return await response.json();  
    }

    // Dummy data 
    getStocks(): Array<Stock> {
        const stock1 = {
            id: 'ABC1',
            currentPrice: 100, 
            type: 'Mærsk Inc', 
            totalAmount: 100,
            available: 77
        }

        const stock2 = {
            id: 'ABC2',
            currentPrice: 1200, 
            type: 'Nova Nordisk', 
            totalAmount: 350,
            available: 67
        }

        const stock3 = {
            id: 'ABC3',
            currentPrice: 1, 
            type: 'Martins Underbukser TM', 
            totalAmount: 350,
            available: 350
        }

        const stock4 = {
            id: 'ABC4',
            currentPrice: 1, 
            type: 'Martins Underbukser TM', 
            totalAmount: 350,
            available: 350
        }

        const stock5 = {
            id: 'ABC5',
            currentPrice: 1, 
            type: 'Martins Underbukser TM', 
            totalAmount: 350,
            available: 350
        }

        const array = new Array<Stock>(); 
        array.push(stock1);
        array.push(stock2);
        array.push(stock3);
        array.push(stock4);
        array.push(stock5);
        return array; 
    }

    createUser = async (user: User) => {
        console.log('It called create user');
    }
}