import {Component, Prop, Vue } from 'vue-property-decorator';
import ApiService, { User } from '../ApiService';

@Component
export default class CreateUser extends Vue {
    user: User = {
        userId: '',
        password: ''
    }
    error = '';

    apiService = new ApiService(); 
    
    signUp() {
        if (this.user.userId !== '' || this.user.password !== '') {
            this.apiService.createUser(this.user);
            this.error = '';
        } else {
            this.error = 'Please input all information before submitting'            
        }
    }   

    
}