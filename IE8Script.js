window.onload=function()
                 {
                     var inputBox= document.getElementById("input");
                     inputBox.value="Subscribe to the newsletter";
                     inputBox.onfocus=function(){
                     inputBox.value=""; 
                     inputBox.onblur=function(){
                                         if(!inputBox.value){
                                         inputBox.value="subscribe to the newsletter";
                                         }
                                    }
                     }
                 }
