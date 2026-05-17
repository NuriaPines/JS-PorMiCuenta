//break y continue
for (let i = 1; i <= 10; i++) 
{   
    if (i === 6)
    {
        break; //sale del bucle cuando i es 6
    }

    if (i % 2 === 0)
    {
        continue; //salta el resto del código cuando i es par
    }
    console.log("Número impar: " + i);
}