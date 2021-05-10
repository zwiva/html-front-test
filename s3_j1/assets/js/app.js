// datos usuario:

var firstName = prompt('Escriba su nombre', 'Andrea');
var lastName = prompt('Escriba su apellido', 'Castro');

var career = prompt('Escriba su carrera', 'Desarrollo Web');

var course1 = prompt('Escriba el ramo 1 a registrar', 'HTML');
var grade1HTML = prompt('Escriba la nota 1 - HTML', 4);
var grade2HTML = prompt('Escriba la nota 2 - HTML', 5);
var grade3HTML = prompt('Escriba la nota 3 - HTML', 4);

var course2 = prompt('Escriba el ramo 2 a registrar', 'CSS');
var grade1CSS = prompt('Escriba la nota 1 - CSS', 3);
var grade2CSS = prompt('Escriba la nota 2 - CSS', 4);
var grade3CSS = prompt('Escriba la nota 3 - CSS', 5);

var course3 = prompt('Escriba el ramo 3 a registrar', 'JavaScript');
var grade1JS = prompt('Escriba la nota 1 - JS', 2);
var grade2JS = prompt('Escriba la nota 2 - JS', 6);
var grade3JS = prompt('Escriba la nota 3 - JS', '-');

var appGrade = parseInt(prompt('Escriba nota de aprobación', '4'));

// promedios
var avgHTML = (parseInt(grade1HTML) + parseInt(grade2HTML) + parseInt(grade3HTML))/3;
var avgCSS = (parseInt(grade1CSS) + parseInt(grade2CSS) + parseInt(grade3CSS))/3;
var avgJS = (parseInt(grade1JS) + parseInt(grade2JS) + parseInt(grade3JS))/3;

// muestra promedios
console.log ('promedioHTML', avgHTML);
console.log ('promedioCSS', avgCSS);
console.log ('promedioJS', avgJS);

// dibujando
document.write("<div class='container'>");
document.write("<div class='mt-3 mb-3'>");
document.write("<h1>Notas finales</h1>")
document.write("<h5><strong>Nombre: </strong>"+firstName+" "+lastName+"</h5>")
document.write("<h5><strong>Carrera: </strong>"+career+"</h5>")
document.write("</div>");
document.write("<table class='table mt-3'>");
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>HTML</th>");
document.write("<td>" + grade1HTML + "</td>");
document.write("<td>" + grade2HTML + "</td>");
document.write("<td>" + grade3HTML + "</td>");
document.write("<td>" + (isNaN(avgHTML) ? '-': avgHTML) + "</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<th scope='row'>CSS</th>");
document.write("<td>" + grade1CSS + "</td>");
document.write("<td>" + grade2CSS + "</td>");
document.write("<td>" + grade3CSS + "</td>");
document.write("<td>" + (isNaN(avgCSS) ? '-': avgCSS) + "</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<th scope='row'>JavaScript</th>");
document.write("<td>" + grade1JS + "</td>");
document.write("<td>" + grade2JS + "</td>");
document.write("<td>" + grade3JS + "</td>");
document.write("<td>" + (isNaN(avgJS) ? '-' : avgJS) + "</td>");
document.write("<tr>");
document.write("</tbody>");
document.write("</table>");
document.write("<p>Para aprobar el ramo JavaScript con nota 4, necesitas obtener un 4.00 en la nota 3 </p>");
document.write('<button class="btn btn-dark" onclick="recalcuteAvgJS()">Ingresa nota 3 de JS</button>')
document.write("</div>");

function recalcuteAvgJS() {
  var newJSScore3 = prompt('ingresa nota 3 JS', 3);
  var avgJS2 = (parseInt(grade1JS) + parseInt(grade2JS) + parseInt(newJSScore3))/3;
  console.log('promedioJS2', avgJS2)

  alert(avgJS2 >= appGrade ? `Aprobaste! :D, tu promedio es de ${avgJS2}`:`No aprobaste :(, tu promedio es de ${avgJS2}`)
}

