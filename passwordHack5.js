function checkPassw() {
    x = document.getElementById('userPassInput').value;
    if (x == jIcGVX6BZNga + roawdrL412R8 + "TFe8iPcNPzdK") {
    alert("Nice you got the right password!");
    window.location = "https://shovaleinat.github.io/Password-Hack-1";
   }
   else if(document.getElementById("userPassInput").value == ""){
    alert("You need to type a password!");
   }
   else{
    alert("The password is incorrect, try again.");
    document.getElementById("userPassInput").value = "";
   };
};