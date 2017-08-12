<template>
  <footer class="footer">
		<router-link to="" tag="div" active-class="active">
			<span class="iconfont">&#xe828;</span>
			<p>首页</p>
		</router-link>
		<router-link to="" tag="div">
			<span class="iconfont">&#xe6a0;</span>
			<p>收藏</p>
		</router-link>
		<div class="iconfont play">
			&#xe65a;
		</div>
		<router-link to="" tag="div">
			<span class="iconfont">&#xe7ce;</span>
			<p>社区</p>
		</router-link>
		<router-link to="" tag="div">
			<span class="iconfont">&#xe6b8;</span>
			<p>我的</p>
		</router-link>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@foot-height:50px;
footer{
	border-top:1px solid #cbcbcb;

	width: 100%;
	height: @foot-height;
	display: flex;
	justify-content: space-around;
	padding-top: 0.3rem;
	div{
		text-align: center;
		p{
			margin:0;
			margin-top: 0.2rem;
			font-size: 0.3rem;
		}
	}
	div.active{
		color:#5e61f8;
	}
	div.play{
		font-size: 1.5rem;
		color: #f2ca27;
	}
}
</style>

