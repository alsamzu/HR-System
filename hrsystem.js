//HR lOGIN SYSTEM

function login(){
    var b=alert("Welcome to xyz site.Please click ok to proceed");
    var a = prompt("Kindly choose your user name to proceed \n 1)Admin Password 54321 \n 2)Finance Manager Password 12345  \n 3)User Password 123456");
    if(a==1){
       var c= prompt("Welcome admin. Please put your password to proceed");
        if(c==54321){
            alert("Admin your login was succesful.Welcome to xyz inc HR system.");
            
        }
        else if (c.length <=0){
            alert("Admin Password can not be null");
        }
       
        else if (c!=54321){
           alert("Incorrect Password for admin account");
      }
      
        
    }
    else if( a==2){
        var d=prompt("Welcome Finance Manager.Please put your password to proceed");
        if(d==12345){
            alert("Finance Manager your login was succesful.Welcome to xyz inc HR system.");
        }
        else if (d.length <=0){
            alert("Finance Password can not be null");
        }
       
        else if (d!=12345){
           alert("Incorrect Password for finance account");
      }
    }
    
    else if( a==3){
        var e=prompt("Welcome User.Please put your password to proceed");
        if(e==123456){
            alert("User your login was succesful.Welcome to xyz inc HR system.");
        }
        else if (e.length <=0){
            alert("User Password can not be null");
        }
       
        else if (e!=123456){
           alert("Incorrect Password for user account");
      }
    }
   
}
login();