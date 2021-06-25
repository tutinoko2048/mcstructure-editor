var textarea = document.getElementById('textarea');
var copy = document.getElementById('copy');
var inputfile = document.getElementById('file');

alert('js loaded3');

inputfile.addEventListener('change', function(e) {
alert('change-v');
  var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
      var data = reader.result
      nbt.parse(data, function(error, data) {
        if (error) {
          throw error;
        }
        var textVal = JSON.stringify(data, null, 2);
        document.getElementById('textarea').value = textVal;
      });
    }
});
                          
copy.addEventListener('click', function () {
  var copyText = document.getElementsByTagName("textarea")[0];
  copyText.select();
  document.execCommand("copy");
  alert('コピーしました');
});
