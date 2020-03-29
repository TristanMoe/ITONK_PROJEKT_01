<template>
  <div id="app" >
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <a class="navbar-brand"><router-link to="/" class="navlinkColor">Stock Trader App</router-link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li class="nav-item nav-link"><router-link to="/createuser" class="navlinkColor">Create User</router-link></li>
          <li class="nav-item nav-link"><router-link to="/createstock" class="navlinkColor">Create Stock</router-link></li>
          <li class="nav-item nav-link"><router-link to="/stockmarket" class="navlinkColor">Stock Market</router-link></li>
        </div>
      </div>
    </nav>

    <router-view/>

    <footer class="font-small bg-success footer">
      <!-- Copyright -->  
      <div class="footer-copyright text-center py-3 copyright">© 2020 Copyright:
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Cool-Kids.com</a>
      </div>
      <!-- Copyright -->

    </footer>
  </div>
</template>

<style>

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;           /* Footer height */ 
  padding-bottom: 10px;
}

.navlinkColor {
  color: #f2f2f2 
}

.copyright {
  color: white
}

.colorapp {
  height: 100%;
  background-color: #d2f8d2;
  color: #d2f8d2;
}

#app {
  min-height: 100vh;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #d2f8d2;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
