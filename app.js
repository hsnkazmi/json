var output = document.getElementById('output');
var ajaxhttp = new XMLHttpRequest();
var url = 'https://api.myjson.com/bins/loyy';

ajaxhttp.open("GET", url, true);
ajaxhttp.setRequestHeader("content-type", "application/jason");
ajaxhttp.onreadystatechange = function () {
    var done = 4, ok = 200;
    if(ajaxhttp.readyState == done && ajaxhttp.status == ok){
            var jcontent = JSON.parse(ajaxhttp.responseText);
            output.innerHTML = jcontent.firstName;
            console.log(jcontent);
        }
};
ajaxhttp.send(null);