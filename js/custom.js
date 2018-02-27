//HR lOGIN SYSTEM

function login(){
    var b=alert("Welcome to xyz site.Please click ok to proceed");
    var a = prompt("Kindly choose your user name to proceed \n 1)Admin \n 2)Finance Manager \n 3)User");
    if(a=1){
       var c= prompt("Welcome admin. Please put your password to proceed");
        if(c==54321){
            alert("Login was succesful");
            
        }
        else if (c = null){
            alert("Password can not be null");
        }
        else{
            alert("Incorrect Password");
        }
        
    }
}
login();