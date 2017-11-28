<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['attemptLogin']),
    doLogin () {
      const user = this.user
      this.$loader.show()
      this.attemptLogin({...user})
        .then(() => {
          this.$router.push('/')
          this.$loader.hide()
        })
    }
  },
  computed: {
    isValid () {
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password)
    }
  }
}
</script>

<template>
  <div class="login-box">
    <div class="login-logo">
      <b>Base</b>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <div class="form-group has-feedback">
        <input type="email" v-model="user.email" class="form-control" placeholder="Email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" v-model="user.password" class="form-control" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <button type="submit" v-on:click="doLogin" class="btn btn-primary btn-block btn-flat" :disabled="!isValid">Sign In</button>
      </div>
    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

