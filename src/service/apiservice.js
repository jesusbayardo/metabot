
const Keyv = require("keyv");
const ttl = 180000;
const printScreen = require("./print");
const users = new Keyv();
 var datamessages = require("../controller/messages");

 async function  EnviarMensajeWhastpapp( objetoMensaje){






    var messages = objetoMensaje[0];

    var texto = messages["text"]["body"];
    var number = messages["from"];


    texto = texto.toLowerCase();
    let currentUser = await  users.get(number);


    if (currentUser ==undefined) {
         users.set(number, ["root"], ttl);

         printScreen( messages, datamessages["root"],"");



        
        

    }else{
   
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                  "text": "Selecciona la opción de tu consulta 👇" 
                },
                "action": {
                  "buttons": [
                    {
                      "type": "reply",
                      "reply": {
                        "id": "btnCuentas",
                        "title": "CUENTAS"
                      }
                    },
                    {
                      "type": "reply",
                      "reply": {
                        "id": "btnTarjetasCredito",
                        "title": "TARJETAS DE CREDITO"
                      }
                    },
                    {
                      "type": "reply",
                      "reply": {
                        "id": "btnCredito",
                        "title": "CREDITO"
                      }
                    }
                  ]
                }
              }
        });
    }




   
}

module.exports = {
    EnviarMensajeWhastpapp
}