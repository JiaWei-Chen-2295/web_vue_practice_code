
export const plugin1 = {
    // 调用时会传入两个参数
    // 第一部分 vue 构造函数
    // 第二部分 接收用户的输入 可变长参数
    install(vue, num1, num2){
        let res = num1 + num2;
        alert(res);
    }
}