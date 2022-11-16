const limpiarBtn = () => {
	// Limpiar campos
	document.getElementById("valor").value = "";
	document.getElementById("enganche").value = "";
	document.getElementById("totalFinanciar").value = "";
	document.getElementById("planCredito").value = "-1";
	document.getElementById("pagoMensual").value = "";
};

const calcularBtn = () => {
	// Obtener valores
	const opcion = document.getElementById("planCredito").value;
	const valor = parseInt(document.getElementById("valor").value);
	let interes, meses;

	// Validar valor
	if (isNaN(valor) || valor <= 0) {
		document.getElementById("valor").type = "number";
		document.getElementById("valor").value = "";
		return alert("Introduzca un valor valido");
	}

	switch (opcion) {
		case "0":
			interes = 1.125;
			meses = 12;
			break;
		case "1":
			interes = 1.172;
			meses = 18;
			break;

		case "2":
			interes = 1.21;
			meses = 24;
			break;

		case "3":
			interes = 1.26;
			meses = 36;
			break;

		case "4":
			interes = 1.45;
			meses = 48;
			break;

		default:
			document.getElementById("planCredito").value = "-1";
			return alert("Seleccione una opcion valida");
	}

    let res = (valor - (valor * .30));

	// Calcular resultados y mostrarlos
	document.getElementById("enganche").value = (valor * 0.30).toFixed(2);
	const enganche = document.getElementById("enganche").value;
	document.getElementById("totalFinanciar").value = ((res*interes)).toFixed(2);
	const financiar = document.getElementById("totalFinanciar").value;
	//se actualizo el calculo de pago en meses
	document.getElementById("pagoMensual").value = ((res*interes) / meses).toFixed(2);
};

document.getElementById("btnCalcular").addEventListener("click",calcularBtn);
document.getElementById("btnLimpiar").addEventListener("click",limpiarBtn);
