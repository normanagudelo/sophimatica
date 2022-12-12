var basedatos=[]

var guardarusuario= function(){

    var email=document.getElementById('correoid').value
    var password=document.getElementById('passwordid').value
    basedatos.push({email,pass:password})
    localStorage.setItem("base", JSON.stringify(basedatos))

}

var cargardatos=function() {
var misdatos=localStorage.getItem("base")
if(misdatos==null){
    basedatos=[]
}
else{
    basedatos=JSON.parse(misdatos)
}


cargardatos()

}