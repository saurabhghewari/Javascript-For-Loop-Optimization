(function(){
      var rand = [];
      console.time("Main");
      for(var i = 0; i<1000;++i) {
            rand.push(Math.floor((Math.random() * 34359738368) + 1));
      }
      // for(var i = 0; i<1000;i++) {
      //       rand.push(Math.floor((Math.random() * 34359738368) + 1));
      // }
      console.timeEnd("Main");

      //simple for loop with Post-Increment
      console.time("FOR");
      for(var j = 0; j < rand.length; j++) {
            square(rand[i]);
      }
      console.timeEnd("FOR");

      //simple for Loop with Pre-Increment.
      console.time("FOR-PRE");
      for(var q = 0; q < rand.length; ++q) {
            square(rand[j]);
      }
      console.timeEnd("FOR-PRE");

      //Optimized Loop
      console.time("FORRANDLENGTH");
      for(var p = 0, k = rand.length; p < k; ++p) {
            square(rand[p]);
      }
      console.timeEnd("FORRANDLENGTH");

      //simple for Reverse loop
      console.time("FOR");
      for(var s = rand.length; s > 0; --s) {
            square(rand[s]);
      }
      console.timeEnd("FOR");

})();

function square(num) {
      return num * num;
}
