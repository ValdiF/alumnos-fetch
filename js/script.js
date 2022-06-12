function NumText(num){

    if (num<4) {
        return "Muy deficiente";
    } else if(num<5){
        return "Insuficiente";
    }else if(num<6){
        return "Suficiente";
    }else if(num<7){   
        return "Bien" ;
    }else if( num<9){
        return "Notable";
    }else if(num<=10){
        return "Sobresaliente";
    }else{
        return "";
    }
}//NumText()


function NotaMedia(myArray){
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return Math.trunc(summ / ArrayLen);
}// NotaMedia()

function llenarTabla(data) {
    var i;
    var textJson = data;
    var table="<tr><th>Nombre</th><th>Lenguaje</th><th>Matemáticas</th><th>Inglés</th><th>Educación Física</th><th>Ciencias</th><th>Media Final</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].NOMBRE +
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE3,
                               obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE3,
                               obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE3,
                               obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE3,
                               obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE3,
                            obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE3,
                            obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE3,
                            obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE3,
                            obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE3]))+
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

function loadAlumnos() {
	const options = {
	  method: "GET",
	};
	
	fetch("alumnos.json", options)
  		.then(response => response.text())
  		.then(data => llenarTabla(data));
}

function loadAlumno(alum) {
	const options = {
	  method: "GET",
	};
	
	fetch("alumnos.json", options)
  		.then(response => response.text())
  		.then(data => llenarAlumno(alum, data));
}

function llenarAlumno(alum, data) {
    var i;
    var textJson = data;
    var table="<tr><th>Nombre</th><th>Lenguaje</th><th>Matemáticas</th><th>Inglés</th><th>Educación Física</th><th>Ciencias</th><th>Media Final</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        if(obj[i].NOMBRE == alum){
        table += "<tr><td>" +
            obj[i].NOMBRE +
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE3]))+
            "</td><td>" +
            NotaMedia(array = [obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE3,
                               obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE3,
                               obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE3,
                               obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE3,
                               obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE3]) +"  "+NumText(NotaMedia(array = [obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[0].NOTAS.TRIMESTRE3,
                            obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[1].NOTAS.TRIMESTRE3,
                            obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[2].NOTAS.TRIMESTRE3,
                            obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[3].NOTAS.TRIMESTRE3,
                            obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE1,  obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE2, obj[i].ASIGNATURAS[4].NOTAS.TRIMESTRE3]))+
            "</td></tr>";
                               }
    }
    document.getElementById("demo").innerHTML = table;
}