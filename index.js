            //let lielement = document.createElement("li");
            //let textNode = document.createTextNode("coffee");
          //  lielement.appendChild(textNode);

        //    document.getElementById("ulmain").appendChild(lielement);
            

      //      document.getElementById("ulmain").appendChild(lielement);
    //        document.getElementsBytagName("li")[0].style.backgroundcolor = "red"
















 let myBody = document.getElementsByTagName("body")[0]; 
 let mybutton = document.createElement("button");
 let textNode = document.createTextNode("add todo");
 myBody.appendChild(mybutton);
 let myUl = document.createElement("ul");
 myUl.setAttribute("id","myul");
 
 myBody.appendChild(myUl);
 
 
 mybutton.appendChild(textNode);
 mybutton.addEventListener("click",myfunc);



 function myfunc(){
     let strTodo = prompt("Enter the next todo:","");
     let myli = document.createElement("li");
     let mylitextnode = document.createTextNode(strTodo);
     myli.appendChild(mylitextnode);
    myUl.appendChild(myli);
    }