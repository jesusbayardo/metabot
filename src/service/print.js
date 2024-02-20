const https = require("https");
const printScreen = async (message, screen, variable) => {
    var number = message["from"];
    screen.messages.forEach(m => {
  
       
      switch (m.type) {
  
  
        case "text":
            try {
                var data = JSON.stringify({
                    "messaging_product": "whatsapp",
                    "recipient_type": "individual",
                    "to": number,
                    "type": "text",
                    "text": {
                        "preview_url": false,
                        "body": m.body
                    }
                });
                
    

              
    
            } catch (error) {
              console.error("Error al enviar mensaje");
            }
            break;
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
  


    
   

  
  
  };
  
  module.exports = printScreen;