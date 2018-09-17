<template>
    <div>
        <center>
            <form role="form" class="form">
                <div class="form-head">
                    <h3>登录</h3>
                    <p>还没有账号？<a href="">立即注册</a></p>
                </div>
                <br>
                <div class="form-group">
                    <div class="ui-input">
                        <input ng-model="username" type="text"  class="user" id="userName" placeholder="手机号">
                        <br>
                    </div>
                    <div>&nbsp;</div>
                    <div class="ui-input">
                        <input ng-model="password" type="password"   placeholder="密码">
                        <br>
                    </div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <button class="ui-button ui-button--primary" @click="login()">登录</button>
                </div>
            </form>
        </center>
    </div>
</template>
<script>
import { APIS } from 'configPort'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      logo: '../../static/images/Logo.jpg',
      inputColor: '#8ECBEB'
    }
  },
  methods: {
    login () {
      let self = this
      let param = {
        url: APIS.userLogin,
        param: {
          userName: '0039260',
          password: '123456'
        },
        type: 'post'
      }
      self.inintLoginInfo(param)
      // nativeApi.initAjax(param)
    },
    ...mapActions([
      'loginName',
      'inintLoginInfo'
    ])
  }
}
</script>
<style type="text/css">
form, input {
  margin: 0;
  padding: 0;
}
input:focus {
    border-bottom: 1px solid #30C37C;
}
body {
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  overflow-y: hidden;
}
a {
  text-decoration: none;
}
input{
  border:0px;
  width: 378px;
  height: 58px;
  outline: none;
}
.form{
  width: 460px;
  height: 502px;
  margin-top: 90px;
}
.ui-input{
  position: relative;
  border-bottom: 1px solid #aaa;
  width: 380px;
  height: 60px;
}
.ui-button{
  width: 380px;
  height: 40px;
  border: 0;
  font-size: 14px;
  outline: none;
  cursor: pointer;
}
.ui-button:hover {
    border: 1px solid #30C37C;
}
</style>
