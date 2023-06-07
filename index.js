function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    const serviceID="service_7b23nxo"
const templateID="template_99zi88n"

emailjs.send("service_7b23nxo","template_99zi88n",params).then(
     function(res) {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully")
    })

    .catch(err =>console.log(err))
}