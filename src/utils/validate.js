export default {
  // 检验非空
  isEmpty(str) {
    return str === '' || str === null || str === undefined;
  },

  // 检验数字
  isNum(val){
    return !isNaN(val) && typeof val === 'number';
  },

  // 检验数字是否大于0
  isMoreThenZero(val){
    return !isNaN(val) && Number(val) > 0;
  },

  // 检验正整数
  isInt(val){
    return val.toString().indexOf('.') == -1;
  } 
} 
