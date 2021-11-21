/* titulo */
document.write('<div class="container">');
document.write ("<h1>Notas finales</h1>");

/*nombre y carrera */
var nameUser= prompt ("ingresa tu nombre y apellido");
document.write("<p> Nombre : ",nameUser,"</p>")
console.log(typeof nameUser)

var careerUser= prompt ("ingresa tu carrera");
document.write("<p> carrera : ",careerUser,"</p>")
console.log(typeof careerUser)

/*notas*/

var nota1 = prompt ("Nota 1 (HTML)");
var nota2 = prompt ("Nota 2 (HTML)");
var nota3 = prompt ("Nota 3 (HTML)");

var promedio1 = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3;
promedio1 = promedio1.toFixed(2);

var nota4 = prompt ("Nota 1 (CSS)");
var nota5 = prompt ("Nota 2 (CSS)");
var nota6 = prompt ("Nota 3 (CSS)");

var promedio2 = (parseInt(nota4) + parseInt(nota5) + parseInt(nota6))/3;
promedio2 = promedio2.toFixed(2);

var nota7 = prompt ("Nota 1 (JavaScrip)");
var nota8 = prompt ("Nota 2 (JavaScrip)");
var nota9 = ("-");

var promedio3 = (parseInt(nota7) + parseInt(nota8))/2;
promedio3 = promedio3.toFixed(2);


document.write("<table class='table'>");

/*cabecera de tabla */
document.write ('<thead class="table-dark">');
document.write ('<tr>');
document.write ('<th scope="col">Ramo</th>');
document.write ('<th scope="col">Nota 1</th>');
document.write ('<th scope="col">Nota 2</th>');
document.write ('<th scope="col">Nota 3</th>')
document.write ('<th scope="col">Promedio</th>')
document.write ('</tr>');
document.write ('</thead>');


/*cuerpo de tabla*/
document.write ('<tbody>');

document.write ('<tr>');
document.write ('<th>HTML</th>');
document.write ('<td>',nota1,'</td></thead>');
document.write ('<td>',nota2,'</td>');
document.write ('<td>',nota3,'</td>');
document.write ('<td>',promedio1,'</td>');
document.write ('</tr>');

document.write ('<tr>');
document.write ('<th>CSS</th>');
document.write ('<td>',nota4,'</td></thead>');
document.write ('<td>',nota5,'</td>');
document.write ('<td>',nota6,'</td>');
document.write ('<td>',promedio2,'</td>');
document.write ('</tr>');

document.write ('<tr>');
document.write ('<th>JavaScript</th>');
document.write ('<td>',nota7,'</td></thead>');
document.write ('<td>',nota8,'</td>');
document.write ('<td>',nota9,'</td>');
document.write ('<td>',promedio3,'</td>');
document.write ('</tr>');

document.write("</table>");
/*Mensaje Final*/

var m4 = (parseInt(12) - parseInt(nota7) - parseInt(nota8));
document.write ('Para aprobar el ramo de JavaScrip con nota 4.00, necesitas obtener un ',m4,' en la nota 3');

