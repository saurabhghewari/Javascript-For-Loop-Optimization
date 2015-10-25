# JSLoopOptimizattion
Javascript FOR loop optimization.

# Why Code Optimization is needed?
  Code optimization is a set of methods of code modification to improve code quality and efficiency. A program may be   optimized so that it becomes of a smaller size, consumes less memory, executes more rapidly, or performs fewer       input/output operations.(From Google). 
  So giving a try to Optimize Javascript FOR Loop, making some experiment.
  
# Pre-Requisites
  Create the nums array with some random large numbers. More info in loop.js.
    var nums = [];
    for(var i = 0; i<1000;++i) {
      nums.push(Math.floor((Math.random() * 34359738368) + 1));
    }
  function square(num) {
    return num * num;
  }
    
# Simple FOR loop
  var demoArr = ["saurabh", "ghewari", "Pandharpur","Maharashtra", "bitroots"];
  console.time("FOR");
  for(var i = 0; i < demoArr.length; i++) {
    //Do stuff with the demoArray
  }
  console.timeEnd("FOR");
  
  This is the simple loop used by almost all developers specially freshers. No need to optimize this loop. But when   we deal with large size of array, having large numbers or complext logic withing the loop, definetly loop          optimization is neccessary. Following are some loop optimization method.

# simple for Loop with Pre-Increment.
    console.time("FOR-PRE");
    for(var i = 0; i < nums.length; ++i) {
      square(nums[i]);
    }
    console.timeEnd("FOR-PRE");
  Post-increment of i caches the value and uses cached value while iterating, which is bit memory consumption        process. So making PRE-Increment skips the Post-Increment process.
      
#ToDo
  Test the same with different browsers and enviornment.
