<template>
  <div>
    <h3>不搞有的没的，该登录了</h3>
    <div id="usernameDiv">
        <p>username:</p> <input v-model="username" class="input" type="text" placeholder="Text input">
    </div>

    <div id="passwordDiv">
        <p>password:</p> <input v-model="password" class="input" type="text" placeholder="Text input">
    </div>

    <div id="confirm">
        <button class="button" v-on:click=login()>Login</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',


 methods: {
    login(){
        console.log("tries to log in");
        var username = this.username;
        var password = this.password;
        // send to backend
        console.log(username);
        console.log(password);
        
    },
 }
}
</script>