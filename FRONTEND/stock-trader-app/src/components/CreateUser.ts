import {Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CreateUser extends Vue {
    firstName = "Tristan";
    lastName = "Moeller"

    // Function template 
    get fullname(){
        return this.firstName + " " + this.lastName;
    }
    
}