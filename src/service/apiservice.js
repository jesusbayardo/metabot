const https = require("https");
const Keyv = require("keyv");
const ttl = 180000;

const users = new Keyv();
 var datamessages = require("../controller/messages");

 async function  EnviarMensajeWhastpapp(  objetoMensaje){



    try {
        currentUser = await users.get(number);
        console.log("Current user:", currentUser);
      } catch (error) {
        console.error("Error retrieving user:", error);
      }


   
    console.log(objetoMensaje);
    var messages = objetoMensaje[0];

    var texto = messages["text"]["body"];
    var number = messages["from"];


    texto = texto.toLowerCase();
    let currentUser = await  users.get(number);
 console.log("----");
 console.log(currentUser);

    if (currentUser ==undefined) {
         users.set(number, ["root"], ttl);
     

         var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "list": [
                    {
                        "title": "Consulta de Saldos ❔",
                        "description": "Obtener información sobre saldos.",
                        "payload": "consulta_saldos"
                    },
                    {
                        "title": "Ubicación del local. 📍",
                        "description": "Ver la ubicación de nuestro local.",
                        "payload": "ubicacion_local"
                    },
                    // Add more button options as needed
                ]
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
}

module.exports = {
    EnviarMensajeWhastpapp
}