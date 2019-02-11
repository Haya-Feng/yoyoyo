

<template>
  <div class="list">
  <div id="main"></div>

  <ul>
   <li v-for="(item,index) in list" :key="index">
    {{item.title}}    {{item.content}}

   </li>
  </ul>


  </div>
 
</template>

<script>
import echarts from 'echarts'

import store from '@/store.js'
export default {
	name:'list',
	store,
	mounted(){
    let myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
        backgroundColor: '#fff',
    title: {
        text: '看看你都干了啥！',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#000'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'Bilibili',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'评论'},
                {value:310, name:'点赞'},
                {value:400, name:'投币'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.8)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#000',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]



    });



	},
	computed:{
	list(){
	return store.state.list
	}
	}

}

</script>
<style scoped>
#main{
	width:400px;
	height:400px;
}
</style>