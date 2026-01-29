
let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("search");
let inp = "fetch_products";

loadproducts();

function loadproducts(){
    let query = {
        action: inp
    };
     let xhttp = new XMLHttpRequest();
    xhttp.open("post", "../controlls/fetch_products.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(query));
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            let tbody = document.querySelector("tbody");
            tbody.innerHTML = "";
            for(let i=0 ; i < data.length; i++){
                console.log(data[i]);
                
                tbody.innerHTML += `
                <tr>
                    <td>${data[i]['name']}</td>
                    <td>${data[i]['profit']}</td>
                    <td>
                        <a href="edit.php?name=${data[i]['name']}&BP=${data[i]['buying_price']}&SP=${data[i]['selling_price']}" style="margin-right: 10px;">Edit</a>
                        <a href="delete.php?name=${data[i]['name']}&BP=${data[i]['buying_price']}&SP=${data[i]['selling_price']}">Delete</a>
                    </td>
                </tr>
            `;
            }
            
        }
    }
}
searchBtn.addEventListener("click", function(){
    inp = searchInput.value;
loadproducts();
});