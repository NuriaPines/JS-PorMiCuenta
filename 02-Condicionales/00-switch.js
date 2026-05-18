let dia = 3; 

switch (dia) {
    case 1:
        console.log("Lunes");
        break; // ¡VITAL! Si no pones break, seguirá ejecutando el siguiente caso
    case 2:
        console.log("Martes");
        break;
    default: // Es el "else" del switch, se ejecuta si nada de lo anterior coincide
        console.log("Día no válido");
}

