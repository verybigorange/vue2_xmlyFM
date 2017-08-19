<template>
  <footer class="footer">
		<router-link :to="{name:'index'}" tag="div" active-class="active">
			<span class="iconfont">&#xe828;</span>
			<p>首页</p>
		</router-link>
		<router-link :to="{name:'collect'}" tag="div" active-class="active">
			<span class="iconfont">&#xe6a0;</span>
			<p>收藏</p>
		</router-link>
		<div class="iconfont play" v-if="$store.state.play" @click="handlePlay" ref="playicon">
			&#xe609;
		</div>
		<div class="iconfont play pause" v-if="!$store.state.play"  @click="handlePlay" ref="playicon">
			&#xe647;
		</div>
		<router-link :to="{name:'community'}" tag="div" active-class="active">
			<span class="iconfont">&#xe7ce;</span>
			<p>社区</p>
		</router-link>
		<router-link :to="{name:'person'}" tag="div" active-class="active">
			<span class="iconfont">&#xe6b8;</span>
			<p>我的</p>
		</router-link>
  </footer>
</template>

<script>
export default {
	// 如果当前有数据，把播放图片换了
	mounted(){
		if(this.$store.state.audiodata && this.$store.state.audiodata.cover_url_142){
			this.$refs.playicon.style.background = "url(" +this.$store.state.audiodata.cover_url_142 + ")";
		}
		//将dom元素挂store上
		this.$store.state.playiconDOM = this.$refs.playicon;
	},
	data(){
		return{
			
		}
	},
	getters:{
		
	},
	methods:{
		handlePlay(){
			
			this.$store.dispatch("controlAudio")
		}
	}
}
</script>

<style lang="less" scoped>
@foot-height:2.5rem;
@size:1.6rem;
footer{
	color:#000;
	background: #e1e1df;
	box-sizing: border-box;
	border-top:1px solid #cbcbcb;
	position: fixed;
	bottom:0;
	left: 0;
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
		font-size: 1.2rem;
		color: #fff;
		width: @size;
		height: @size;
		line-height: @size;
		cursor: pointer;
		border-radius: 50%;
		background-repeat: no-repeat;
		border: 1px solid #fff;
		text-align: center;
		background-size: contain;
	}
}
.pause{
	animation: rotation 3s linear infinite;
}
@keyframes rotation{
	from{
		transform-origin:center center;
		transform:rotateZ(0deg);
	}
	to{
		transform-origin:center center;
		transform:rotateZ(360deg);
	}
}
</style>

