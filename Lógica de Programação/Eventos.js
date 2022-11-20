let month, day, idade, participantsList;
month = 11;
day = 25
idade = 19
participantsList = [" Felipe", " José", " Fernando"]

if (month = 11) //vou usar o dia atual e o mês atual para ver se o evento vai ocorrer no futuro
{
    if (day > 20 && day < 30) 
    {
        if (idade > 18)
        {
            console.log("A lista de participantes:" + participantsList + ".Há " + participantsList.length + " pessoas no total." )
            if (participantsList.length <= 100)
            {
                console.log("Entrada permitida.")
            }else
            {
                console.log("Entrada bloqueada, limite de participantes atingido.");
            }
        }else
        {
            console.log("Idade inválida.");
        }
    }else
    {
        console.log("Dia inválido.");
    }
}else
{
    console.log("Mês inválido.");
}