const MAYDAY = {}


Object.defineProperty(MAYDAY, 'vocal', {

    get : function(){
        return temp;
    },

    // 这里的 value 已经被用来修改对象的值了
    // 所以不需要使用 this.value 传值
    set : function(value){
        temp = value;
    }
});

MAYDAY.vocal = "玛莎"
console.log(MAYDAY.vocal)