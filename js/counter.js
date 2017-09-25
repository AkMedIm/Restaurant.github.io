var timer = document.getElementById('counter');

var value = 6365;

var increment = function () {
  setInterval (function() {
  setTimeout (function () {
    if (value < 60514) {
      value++;
      timer.innerText = value;
      increment();
    }
  }, 20);
},300);
};

increment();
