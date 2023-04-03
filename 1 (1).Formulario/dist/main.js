import{validateString,validateTelefono, validate} from"./validate.js";
import{addStudent, modalAlert} from "./paint.js";
const btnEnviar = document.getElementById('btnEnviar');
const form= document.getElementById('fmContact');
/* Instanciar el Objeto "validate" */

let validator = new validate();

/* objeto Validacion */
const objectValid={
nameObject:false,
lastNameObject:false,
mailObject:false,
teleObject: true,
msnObject: true
};

/* Envio de Formulario */
 




form.addEventListener('change', function(event){
const inputId= event.target.id;
console.log(inputId);
const inputValue = event.target.value;
console.log(inputValue);
const inputClass = event.target.classList;
console.log(inputClass);
const validClass = () =>{
inputClass.add("is-valid");
inputClass.remove("is-valid");
}
const invalidClass= () =>{
inputClass.add("is-invalid");
inputClass.remove("is valid");
}
switch(inputId){
case "name":
objectValid.nameObject =  validator.validNames
(inputValue);

if(objectValid.nameObject) {
    validClass();
    
} 
else{
invalidClass();
}; 

console.log(Object.values(objectValid));
break;
case "lastName":
    objectValid.lastNameObject = validator.validNames(inputValue); /* Ternario , "?"" ==> si ;":" ==> si no" */
    objectValid.lastNameObject ? validClass() : invalidClass();
    consdole.log(Object.values(objectValid));
break;
case"mail":
   objectValid.mailObject = validator.validMail(inputValue); /* Ternario , "?"" ==> si ;":" ==> si no" */
    objectValid.mailObject ? validClass() : invalidClass();
    consdole.log(Object.values(objectValid));
    break;

    case "tele":
        objectValid.teleObject = validator.validTele(inputValue);
        objectValid.mailObject ? validClass() : invalidClass();
        console.log(Object.values(objectValid));
        break;






}

}
);

btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    const nombre= document.getElementById('name').value;
    const apellido = document.getElementById('lastName').value;
    const correo = document.getElementById('mail').value;
    const telefono= document.getElementById('telephone').value;
    const mensaje= document.getElementById('fm_contact').value;
if(validator.validForm(objectValid) === -1){
    
    {
        if(isNaN(parseInt(telefono))){
            addStudent(nombre,apellido,correo,telefono,mensaje);


        }else{
            modalAlert("Error revise el numero de telefono");
        }


       
    }
}

});