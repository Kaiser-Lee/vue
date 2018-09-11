<template>
    <div>
        <form class="form-horizontal" id="login-form">
            <div class="form-head">
                <div class="form-group-head">
                    <img src="" width=35 height=35>
                </div>
            </div>
            <div class="form-content">
                <div class="form-group">
                    <div class="form-group-items">
                        <i class="iconfont icon-yonghu"></i>
                        <input type="text" id="userName" name="userName" value="" placeholder="手机号/微信号/QQ号"/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-group-items">
                        <i class="iconfont icon-password"></i>
                        <input type="password" id="password" name="password" value="" placeholder="密码"/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-group-foot">
                        <a id="login-btn">登录</a>
                    </div>
                </div>

            </div>
        </form>
    </div>
</template>
<style>
  .form-horizontal{
    width: 80%;
    margin-top: 150px;
    margin-left: 10%;
    height: 90%;
  }
  .form-head{
      width: 80%;
      margin-left: 10%;
  }
  .form-group-head{
      width:100%;
  }
  .form-group-head img{
      width: 10%;
      margin-left: 45%;
  }
  .form-content{
      width: 80%;
      margin-left: 10%;
  }
  .form-group{
      width: 26%;
      margin-left: 36%;
      margin-top: 15px;
  }
  .form-group .form-group-items{
      width: 100%;
      height: 40px;
      border: 1px solid #B6B4B6;
      border-radius: 5px;
  }
  .form-group-items input{
      width: 80%;
      margin-left: 15px;
      height: 30px;
      border: 0px;
      margin-top: 5px;
      outline: none;
  }
  .form-group-items i{
      width: 10%;
      height: 20px;
      float: left;
      line-height: 40px;
      margin-left: 5px;
  }
  .form-group-foot{
      width: 100%;
  }
  .form-group-foot a{
      width: 100%;
      height: 40px;
      border-radius: 5px;
      outline: none;
      display: block;
      border: 1px solid #B6B4B6;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
  }
</style>
