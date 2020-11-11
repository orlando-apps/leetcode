function finalInstances(instances, averageUtil) {
  for (let i = 0; i < averageUtil.length; i++){
      let util = averageUtil[i];
      if (util < 25 && instances > 1){
          instances = Math.ceil(instances/2)
          i += 10
      } else if( 25 <= util && util<= 60){
          continue;
      } else if ( util > 60 && (2 * instances) < (2 * Math.pow(10, 8))) {
          instances = 2 * instances
          i += 10
      }
  }
  return instances
}