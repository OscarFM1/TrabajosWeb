const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const addStudent= (name, lastName, mail,tele, msn) =>{
    let person={
        pname:name,
        plastName: lastName,
        pmail: mail,
        ptele: tele,
        psmn: msn

    }

    let text =`¿Esta seguro ${person.pname} ${person.plastName} de enviar la peticion?`;
    modalAlert(text, "aceptar", person);



}
function modalAlert(cadena,tipo,persona){
    const alerta= document.createElement("div");
    const texto= document.createElement("p");
    const btnCerrar= document.createElement("input");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class", "alerta");
    texto.setAttribute("class","textAlerta");
    texto.innerHTML =`<strong>${cadena}</strong>`;
    btnCerrar.setAttribute("type", "buttom");
    btnCerrar.setAttribute("class","btnAlerta");
    btnCerrar.setAttribute("value","cerrar");
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo === "aceptar"){
        const btnEnviar=document.createElement("input");
        btnCerrar.setAttribute("type", "buttom");
       btnCerrar.setAttribute("class","btnAlerta");
       btnCerrar.setAttribute("value", "Enviar");
       document.body.appendChild(alerta);
       btnEnviar.onclick = function(){
          paintCard(persona,"estudiante");
          document.getElementById("alerta").remove();

       }
    }else{
        document.appendChild(alerta);
    }

   btnCerrar.onclick= function(){
    document.getElementById("alerta").remove();


   }    
  
    


    }
    const paintCard =(datos, tipo) =>{
        tipo= tipo.toUpperCase();
        const frament =document.createDocumentFragment();
        const temEstudiante = document.getElementById('templateEstudiante').content;
        if(tipo ==="ESTUDIANTE"){
            let tempTemplate= temEstudiante.cloneNode(true);
            tempTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR <hr>`;
            tempTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} 
            ${datos.plastName}`;
            tempTemplate.querySelector('.text-mail').innerHTML = `Correo Electronico ${datos.pmail}`;
            tempTemplate.querySelector('.text-msn').innerHTML = `Mensaje : ${datos.psmn}`;
            fragmento.appendChild(tempTemplate);

        }
        cardsEstudiantes.appendChild(fragmento);
    }

    export{ addStudent,modalAlert}

    
