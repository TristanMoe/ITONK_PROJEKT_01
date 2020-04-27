<template>
 <div class="container viewscope">
        <img class="mb-4" src="https://i.ibb.co/nsx8Wvr/stocklogo.png" width="200" height="200">
        <h1>Would you like to start trading today?</h1>
        <h3>Please enter your information to sign up</h3>

        <div class="row justify-content-md-center" style="margin-top:20px;">
            <label class="col-sm-2" style="margin-right:10px; font-size:22px;">User Id:</label>
            <input class="col-sm-3 rounded inputcolor" type="email" v-model="user.userId" />
        </div>

        <div class="row justify-content-md-center" style="margin-top:20px;">
            <label class="col-sm-2" style="margin-right:10px; font-size:22px;">Password:</label>
            <input class="col-sm-3 rounded inputcolor" type="password" v-model="user.password"/>
        </div>

        <div class="row justify-content-md-center" style="margin-top:20px; color:red">
            {{error}}
        </div>

         <div class="row justify-content-md-center">
            <button class="btn btn-lg btn-success btn-block col-sm-5 mt-2"
                    style="margin: 10px 10px 10px 10px" type="submit" v-on:click="signUp">
                Sign Up
            </button>
        </div>
 </div>
</template>

<script src="../components/CreateUser.ts"></script>

<style scoped>
.viewscope{
    text-align:center;   
    margin-top: 100px;
}

.inputcolor {
  background-color: #e8fbe8;;
}

</style>