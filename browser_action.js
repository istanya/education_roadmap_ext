(function () {

    el.addEventListener("click", function(){

    text = document.getElementById("query-field").value;
    const req = new XMLHttpRequest();
    const baseUrl = "http://arina-8c2f80b7.localhost.run/chrome_extension";

    req.open("POST", baseUrl, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(text);

    alert(text); });
})();
