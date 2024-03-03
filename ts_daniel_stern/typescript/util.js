var Utility2;
(function(Utility2) {
  var useful = (function () {
    function useful () {

    }
    useful.prototype.timesTwo = function (n) {
      return n* 2;
    }
    return useful;
  })();
  Utility2.useful = useful;
})(Utility2 || (Utility2 = {}));
/// <reference path="timesTwo.ts" />
var uses = new Utility2.useful();
console.log(uses.timesTwo(9));