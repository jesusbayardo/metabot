const https = require("https");
const Keyv = require("keyv");
const ttl = 180000;

const users = new Keyv();
 var datamessages = require("../controller/messages");

 const   EnviarMensajeWhastpapp=function(objetoMensaje){
   

    objetoMensaje.onMessage(async message => {


        let currentUser =  await users.get(number);
        var texto = messages["text"]["body"];
        var number = messages["from"];

console.log("-----");
console.log(currentUser);
        if (!currentUser) {
            console.log("NO existe")
             users.set(message.from, ["root"], ttl);
         
    
             var data = JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": number,
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": "🚀 Hola, visita mi web anderson-bastidas.com para mas información.\n \n📌Por favor, ingresa un numero #️⃣ para recibir información.\n \n1️⃣. Información del Curso. ❔\n2️⃣. Ubicación del local. 📍\n3️⃣. Enviar temario en pdf. 📄\n4️⃣. Audio explicando curso. 🎧\n5️⃣. Video de Introducción. ⏯️\n6️⃣. Hablar con AnderCode. 🙋‍♂️\n7️⃣. Horario de Atención. 🕜"
                }
            });
    
        }else{
            console.log("existe")
        }





        const options = {
            host : "graph.facebook.com",
            path : "/v18.0/120525987808147/messages",
            method : "POST",
            body : data,
            headers : {
                "Content-Type" : "application/json",
                Authorization :"Bearer EAASsECeG2AkBOxYZCq8ogj7dFoE7ZBS4A0ZCUPa6RHj90JmqbbFPKOZAs8BQOhtExUZBMMt4wfOJUL1RQFFZCerTJiSZBST9cZBjSJrrdkPQZAEzeluf3VAxNzSTT7MbZCRbS31XKOOZCTE4rZAB1zMNGP32d3wamUV4h3BJXdDKZC0EU9KEm2mA17WkPNY4FpvvY7kZC9SNC5mArJElRTxvtSZAQUZD"
            }
        };
    
        const req = https.request(options,res => {
            res.on("data",d=>{
                process.stdout.write(d);
            });
        });

        req.write(data);
        req.end();
    });

   



   

   
}

module.exports = {
    EnviarMensajeWhastpapp
}