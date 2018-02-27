//HR lOGIN SYSTEM

function login(){
    var b=alert("Welcome to xyz site.Please click ok to proceed");
    var a = prompt("Kindly choose your user name to proceed \n 1)Admin \n 2)Finance Manager \n 3)User");
    if(a==1){
       var c= prompt("Welcome admin. Please put your password to proceed");
        if(c==54321){
            alert("Admin your login was succesful");
            
        }
        else if (c.length <=0){
            alert("Password can not be null");
        }
       
        else if (c!=54321){
           alert("Incorrect Password for admin account");
      }
      
        
    }
    else if( a==2){
        var d=prompt("Welcome Finance Manager.Please put your password to proceed");
        if(d==12345){
            alert("Finance Manager your login was succesful");
        }
        else if (d.length <=0){
            alert("Password can not be null");
        }
       
        else if (d!=12345){
           alert("Incorrect Password for finance account");
      }
    }
   
}
login();