var encryption = document.getElementById('key-code');
var decryption = "New singles from bldy rxse every Tuesday & Friday";
var code = encryption.innerHTML;

var arr = [];
for(var i = 0; i < decryption.length; i++) {
 arr.push(i);
}

String.prototype.replaceAt=function(index, character) {
 return this.substr(0, index) + character + this.substr(index+character.length);
}

function shuffle(a) {
   var j, x, i;
   for (i = a.length; i; i--) {
       j = Math.floor(Math.random() * i);
       x = a[i - 1];
       a[i - 1] = a[j];
       a[j] = x;
   }
}

shuffle(arr);

function run() {
 var rand = arr.pop();
 var text = $('#key-code').text();
 text = text.replaceAt(rand, decryption[rand]);
 $('#key-code').text(text);
 if(arr.length > 0) {
   setTimeout(run, 40);
 }
}
run();


$(window).load(function() {
  $('.hero .hero_info h1').fadeIn(2500, function() {
  });
});