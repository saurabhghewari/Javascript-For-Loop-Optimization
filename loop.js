(function(){
      var nums = [];
      console.time("Main");
      for(var i = 0; i<1000;++i) {
            nums.push(Math.floor((Math.random() * 34359738368) + 1));
      }
      // for(var i = 0; i<1000;i++) {
      //       nums.push(Math.floor((Math.random() * 34359738368) + 1));
      // }
      console.timeEnd("Main");

      //simple for loop with Post-Increment
      console.time("FOR");
      for(var j = 0; j < nums.length; j++) {
            square(nums[j]);
      }
      console.timeEnd("FOR");

      //simple for Loop with Pre-Increment.
      console.time("FOR-PRE");
      for(var q = 0; q < nums.length; ++q) {
            square(nums[q]);
      }
      console.timeEnd("FOR-PRE");

      //Optimized Loop
      console.time("FORRANDLENGTH");
      for(var p = 0, k = nums.length; p < k; ++p) {
            square(nums[p]);
      }
      console.timeEnd("FORRANDLENGTH");

      //simple for Reverse loop
      console.time("FOR");
      for(var s = nums.length; s > 0; --s) {
            square(nums[s]);
      }
      console.timeEnd("FOR");

      console.time("FOEEACH");
      nums.forEach(function(num){
            square(num);
      });
      console.timeEnd("FOEEACH");

})();

function square(num) {
      return num * num;
}
