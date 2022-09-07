var j = 1;
function add() {
    var heading1 = String (prompt("Enter the task"));
    var items = Number(prompt("Enter number of items"));
    var a1 =  new Array();
    for (var i = 0; i < items; i++) {
        a1[i] = prompt("Enter element " + (i+1));
    }
    var boxd = document.getElementById("boxpart");
    var box1 = document.createElement("div");
    box1.className = "box auto";
    box1.innerHTML += `<h3>${heading1}</h3><hr>`;
    for (var i = 0; i < items; i++) {
    if(a1[i]!=""){
            box1.innerHTML += `<h4>             
                                <input type="checkbox" id="id${j}" onclick="checklabel()">
                                <label for="id${j}" id="label${j}">${a1[i]}</label>
                        </h4>`;
            j++;
        }
    }
    if((heading1!=="" && items!=null))
            boxd.appendChild(box1); 
    }

function checklabel() {
    for (var i = 1; i <= j; i++) {
    var checkitem = document.getElementById("id" + i);
    if (checkitem.checked == true) {
    document.getElementById("label" + i).style.textDecorationLine = "line-through";
    document.getElementById("label" + i).style.color = "#C2C2C2";
    } else {
    document.getElementById("label" + i).style.textDecorationLine = "none";
    document.getElementById("label" + i).style.color = "#424242";
    }
    };
    }