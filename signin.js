var basedatos=[]

var guardarusuario= function(){
    var name=document.getElementById('nombreid').value
    var email=document.getElementById('correoid').value
    var password=document.getElementById('passwordid').value
    basedatos.push({nombre:name,mail:email,pass:password})
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