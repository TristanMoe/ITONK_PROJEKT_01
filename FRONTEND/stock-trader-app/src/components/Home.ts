import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class HomeView extends Vue {
  
    // Needs to be a seperate component
    testCallOwlApi = async () => {
        return this.$http.get('https://owlbot.info/api/v4/dictionary/tiger', {
            headers: {Authorization: 'Token 926a20aef4ee2ddc979b384a1ebc1fc0ffe1d253'}
        })
        .then(response => {
            // Response from server 
            console.log(response);
            response.json(); 
        }, response => {
            // Error callback
        });
    }
}