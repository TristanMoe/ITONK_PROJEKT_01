import { Component, Prop, Vue } from 'vue-property-decorator';
import ApiService, { Word } from '../ApiService';

@Component
export default class HomeView extends Vue {  
    apiService = new ApiService(); 

    // Needs to be a seperate component
    async signIn() : Promise<void> {
        const response: Word = await this.apiService.testCallV2();        
    }
}