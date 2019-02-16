;(function(){
	'use strict';
	new Vue({
    el:'#main',
    data:{
        l_id:0,
    	list:[],
    	current:{},
      
    },
 
      // mounted:function(){
      // 	this.list = ms.get('list') || [];
      // },
      	mounted:function(){
            var me = this;
      this.list = ms.get('list') || [];
      this.l_id = ms.get('l_id') || this.l_id;
      setInterval(function(){
        me.check_at();
      },1000);
    },

     // var a = ms.get('list')zz
     // console.log(a);
    methods:{
      
        check_at(){
            var me = this;
            this.list.forEach(function(row,i){
                 var alert = row.alert_at;
                 if(!alert || row.alert_confirm) return;
                 var alert_at = (new Date(alert)).getTime();
                 var now = (new Date()).getTime();
                 if(now >= alert_at){
                   var confirmed = confirm(row.title);
                   Vue.set(me.list[i],'alert_confirm',confirmed);
                 }

            })
            // var alert_at = list.alert_at;
        
        },
    	merge:function(){
    		var is_update = this.current.id;
    		if(is_update){
              var index = this.list.findIndex(function(item){
                  return item.id == is_update;
               })
              
              Vue.set(this.list,index,this.current);
    		}else{
    		var title = this.current.title;
    		if (!title && title!==0) return;
    		var todo = Object.assign({},this.current);
            this.l_id++;
            ms.set('l_id',this.l_id);
    		todo.id = this.l_id;
    		this.list.push(todo);
    	}
    	// ms.set('list',this.list);
    	// this.moutend();
    	this.res_current();
    	},
    	remove(id){
    		var index = this.find_index(id);
    		this.list.splice(index,1);
    		// this.moutend();
    		// ms.set('list',this.list);
    	},
        show_d(id){
            // console.log(id);
          var index = this.find_index(id);
          Vue.set(this.list[index],'show_detail',!this.list[index].show_detail);
        },
    	next_id(){
    	  return this.list.length + 1;
    	},
    	set_current(todo,index){
             this.current = Object.assign({},todo);
             // var index = todo.findIndex(function(item){return item})
             Vue.set(this.list[index],'show_detail_two',!this.list[index].show_detail_two);
    	},
    // 	moutend:function(){
    //   this.list = ms.get('list') || [];
    // },P
    	res_current(){
    		this.current = Object.assign({});
    	},
    	find_index(id){
    		return this.list.findIndex(function(item){
    			return item.id == id;
    		});
    	},
    	toggle_completed(id){
              var i = this.find_index(id);
              Vue.set(this.list[i],'completed',!this.list[i].completed);
    	},

    	
    },
    watch:{
    	list:{
    		deep:true,
    		handler:function(n,o){
    			if(n){
    				ms.set('list',n);
    			}else{
    				ms.set('list',[]);
    			}
    		}
    	}
    }
	});
	
})();
