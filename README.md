# Javascript-For-Loop-Optimization

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
        
    Now Open the console of browser to get difference between loop execution based on time.
    
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
  
  Post-increment of i in Simple FOR loop caches the value and uses cached value while iterating, which is bit        memory consumption process. So making PRE-Increment skips the Post-Increment process.

# Caching Condition in Loop
      console.time("FORCACHE");
      for(var i = 0, len = nums.length; i < len; ++i) {
            square(nums[i]);
      }
      console.timeEnd("FORCACHE");
  
  Calculating the length of array and assigning to variable, is more beneficial then calculating the length of       array each time. This small trick is effective to make loop optimizations.
  
# ForEach Loop
    console.time("FOREACH");
    nums.forEach(function(num, index, array){
      square(num);
    });
    console.timeEnd("FOREACH");
  ForEach loop executes provided function once per array element. For Each loop is costly then other provided        above. For more info on for each loop visit this 
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 
#ToDo
  Test the same with different browsers and enviornment.
