const strategies = {
    isNonEmpty:function(value,errorMsg){
        if(value === ''){
            return errorMsg;
        }
    },
    minLength:function(value,length,errorMsg) {
        if(value.length < length){
            return errorMsg;
        }
    },
    isMobile:function(value,errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)){
            return errorMsg;
        }
    }
}
const Validator = function(){
    this.cache = [];
}
Validator.prototype.add = function(val,rule,errorMsg) {
    var ary = rule.split(":");
    this.cache.push(function(){
        var startegy = ary.shift();
        ary.unshift(val);
        ary.push(errorMsg);
        return strategies[startegy].apply(null,ary);
    })
}
Validator.prototype.start = function(){
    for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息 
        if ( msg ){ // 如果有确切的返回值，说明校验没有通过
            return msg;
        }
    }

}
export default Validator