<template>
  <div class="home">
    <!-- Logon Screen -->
    <div>
      <div class="text-center logon">
        <div class="form-signin">
        <img class="mb-4" src="https://i.ibb.co/nsx8Wvr/stocklogo.png" width="150" height="150">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <input type="email" id="inputEmail" class="form-control" placeholder="User Id" required autofocus>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-success btn-block" type="submit" v-on:click="signIn">Sign in</button>
          <p class="mt-3 mb-3 text-muted">&copy; 2020-2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../components/Home.ts"></script>

<style scoped>
.home {
  background-color: #d2f8d2
}

.logon {
  height: 100%;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #d2f8d2;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
  background-color: #e8fbe8;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>