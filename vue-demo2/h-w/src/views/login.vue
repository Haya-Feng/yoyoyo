<template>
  <div class="login">
   <div class="logo">
    	<div class="logo-box">
   </div>
   </div>

    <form v-if="!is">
        <div class="input-group" :class="{active:isactive == 1}">
		<label>用户名：</label>
		<input           
         @focus="isactive=1" type="text" v-model="username">
		</div>
		<div class="input-group ps" :class="{active:isactive == 2}">
		<label>密码：</label>
		<input style="margin-bottom:8px;" 
		@focus="isactive=2" type="password" v-model="userpassword">
		</div>
        	<div class="ic">
        		<div @click="remebe=!remebe" class="ic-item">
			<i class="iconfont" :class="{'icon-androidcheckboxoutlineblank':!remebe,'icon-androidcheckboxoutline':remebe}"></i>
			<span>记住密码</span>
            </div>
            	        		<div @click="autologin=!autologin" class="ic-item">
			<i class="iconfont" :class="{'icon-androidcheckboxoutlineblank':autologin,'icon-androidcheckboxoutline':!autologin}"></i>
			<span>自动登入</span>
			</div>
			</div>

		<div class="btn">
		<div class="btn-item">
		<button @click="reg">登入</button>
		</div>
		<div class="btn-item">
		<button @click.prevent="ing">注册</button>
		</div>
		</div>
		
	</form>
<form v-else>
        <div class="input-group" :class="{active:isactive == 3}">
		<label>用户名：</label>
		<input 
        @focus="isactive=3" type="text" v-model="username">
		</div>
		<div class="input-group" :class="{active:isactive == 4}">
		<label>密码：</label>
		<input 
        @focus="isactive=4" type="passwo" v-model="userpassword">
		</div>
		<div class="input-group re " :class="{active:isactive == 5}">
		<label class="re-t">重复一次密码：</label>
		<input 
        style="width:110px;" @focus="isactive=5" type="passwo" v-model="repeat">
		</div>
	    <div class="btn">
	    <div class="btn-item">
		<button @click="yep">确认</button>
		</div>
		<div class="btn-item">
		<button @click="not">取消</button>
		</div>
		</div>
	</form>
    
  </div>
</template>
<script>
 import '../assets/font/iconfont.css'
 import store from '@/store.js'

  export default{
  name:'login',
  store,
  data(){
    return{
    username:' ',
    userpassword:' ',
    repeat:' ',
    is:false,
    isactive:1,
    remebe:true,
    autologin:true
    }
  },
  mounted(){
   let abc = JSON.parse(localStorage.getItem('userpassword'));
   let ab = JSON.parse(localStorage.getItem('username'));
   this.username = ab;
   this.userpassword = abc;
  },
  methods:{


reg(){

    let userpassword = JSON.parse(localStorage.getItem('userpassword'));
   if(userpassword === this.userpassword){
	this.$router.push('/home/list')}else{
	alert('密码输错了哟~')
	};
	store.commit('inc',{username:this.username})

},
ing(){
	this.is=true
},
yep(){
	if(this.userpassword === this.repeat && this.userpassword!==0){
	localStorage.setItem('username', JSON.stringify(this.username));

	localStorage.setItem('userpassword', JSON.stringify(this.userpassword));
	}else{

	 alert('二次密码不一致')
	}
   
	},
not(){
	this.is = false
}
}

}
</script>
<style lang="scss" scoped>
body{
	background-color:#bdbebf;
}
.logo{
    padding:30px 0;
    .logo-box{
    width:230px;
    height:160px;
    margin: 0 auto;
    background:url(../assets/logo.png);
    background-size:100% 100%;
    }
}
.input-group{
	border:2px solid #444;
	border-radius:45px;
	width:250px;
	height:50px;
	margin:0 auto 30px;
	font-size:15px;
    line-height: 50px;
    font-weight:bold;
	input{
	outline:none;
	border:0 none;
	font-size:15px;
	}
}
.ps{
	margin-bottom:8px;
}
.ic{
	font-size:15px;
	display:flex;
	justify-content: space-around;
    width:250px;
    margin:0 auto;
    

}
.btn{
		height:50px;
        width:250px;
        display:flex;
        justify-content: space-between;
        margin:20px auto;
       .btn-item button{
       	border:2px solid #000;
        border-radius:45px;
        width:120px;
        height:48px;
        line-height: 45px;
        font-size:18px;
        font-weight:bold;
       }
      
}

.active{
	border:2px solid #000;
}
</style>