/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let ver1Array = version1.split('.')
  let ver2Array = version2.split('.')
  let last = Math.max(ver1Array.length, ver2Array.length)
  for (let i = 0; i < last; i++){
      let tmp1 = ver1Array[i] || 0
      let tmp2 = ver2Array[i] || 0
      //The + and - operators also have unary versions, where they operate only on one variable. When used in this fashion, + returns the number representation of the object, while - returns its negative counterpart.
      if(+tmp1 === +tmp2)continue;
      if(+tmp1 > +tmp2){
          return 1
      }else{
          return -1
      }
  }
  return 0
};