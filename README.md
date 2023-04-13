# TomasPonceMensajeSecreto
Ingresar una frase y con funciones resolver el siguiente ejercicio
Descripción del problema
Dos amigas necesitan enviarse por correo

electrónico mensajes muy importantes y extrema-
damente reservados. Ante el temor de que alguien

pueda leer los correos, deciden codificar los men-
sajes.

La estrategia que utilizan es la siguiente:
ciertos trozos disjuntos (o sea sin superposición)
del texto los escriben en orden inverso y los
encierran entre paréntesis, de manera tal de no
olvidar que esos trozos deben ser leídos al revés.
Para facilitarles la tarea se te pide que escribas
un programa SECRETO.EXE que permita
decodificar los mensajes enviados. El programa
leerá el mensaje a decodificar del archivo
SECRETO.IN y grabará el mensaje decodificado
en el archivo SECRETO.OUT.
Aclaraciones
• El mensaje original a transmitir está formado
por caracteres que pueden ser letras, números
y/o signos de puntuación pero no paréntesis.
De esta manera se evitan problemas en el
momento del encriptado.

Datos de entrada
Se recibe un archivo de texto SECRETO.IN
del directorio actual, que contiene una única línea
con una cantidad máxima de 500 caracteres. Esta

línea consta de letras, números, signos de pun-
tuación y posiblemente paréntesis producto del

encriptado.
Datos de salida
El programa SECRETO.EXE debe generar el

archivo SECRETO.OUT con el mensaje deco-
dificado, en el directorio actual.

Ejemplo
Si el archivo SECRETO.IN contiene:
Hoy (.sh 22 sal a) (ed asac ne sominuer son) Marcelo.

El archivo SECRETO.OUT deberá contener:
Hoy a las 22 hs. nos reunimos en casa de Marcelo.
