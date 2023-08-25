let id = "no";
gettabledata();
function validateData() {
    var cardnum = document.getElementById('cardnum').value;
    var pin = document.getElementById('pin').value;
  
    
       /*rezex*/

       
        /*rezex*/

        /*validations */
        if (cardnum == "") {
            document.getElementById("cardnumError").innerHTML = " required ";
            return false;
    
        }
        if (pin == "") {
            document.getElementById("pinError").innerHTML = " required ";
            return false;
    
        }
      
        /*validations */
        else{
            var personinfo = {
                cardnum: cardnum,
                pin: pin,
                
        };
        if (id == "no") {
            // debugger
            let persontlist = JSON.parse(localStorage.getItem("persontlist"));
            // console.log(persontlist);
            if(persontlist==null){
                persontlist = [];
            }
            persontlist.push(personinfo);
            localStorage.setItem("persontlist", JSON.stringify(persontlist));
            var cardnum = document.getElementById("cardnum").value = "";
            var pin = document.getElementById("pin").value = "";
            gettabledata();
        }
        else{
            
            let persontlist = JSON.parse(localStorage.getItem("persontlist"));
            persontlist[id] = personinfo;
            localStorage.setItem("persontlist", JSON.stringify(persontlist));
            
            gettabledata();
        }
    }
}
function gettabledata() {
    // debugger
    let persontlist = JSON.parse(localStorage.getItem("persontlist"));
    var html = "";
    var sno = 1;
    for (let i in persontlist) {
        html = html + `<tr><td>${sno}</td><td>${persontlist[i].cardnum}</td><td>${persontlist[i].pin}</td><td><a href="javascript:void(0)"onclick="editdata(${i})">edit</a> <a href="javascript:void(0)"onclick="deletedata(${i})">delete</a></td></tr>`;
        sno++;
    }
    // console.log(html);
    document.getElementById("root").innerHTML = html;
}
function editdata(eid) {
    id = eid;
    let persontlist = JSON.parse(localStorage.getItem("persontlist"));
    document.getElementById("cardnum").value = persontlist[eid].cardnum;
    document.getElementById("pin").value = persontlist[eid].pin;
    
}
function deletedata(did) {
    let persontlist = JSON.parse(localStorage.getItem("persontlist"));
    persontlist.splice(did,1);
    localStorage.setItem("persontlist", JSON.stringify(persontlist));
    gettabledata();
}


