let statusCandidato = "aprovada";

switch(statusCandidato){
    case "aprovada":
        console.log("Parabén, você foi aprovada!")
        break;
    case "lista":
        console.log("Você está na lista de espera")
        break;
    case "reprovada":
        console.log("Você foi reprovada!")
        break;
    default:
        console.log("Não se aplica.")
        break;
}