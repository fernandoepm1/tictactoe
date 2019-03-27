$(document).ready(function() {
    var turno = 1;
    var gameOver = false;

    $("#board tr td").click(function() {
        if ($(this).text() == "" && !gameOver) {
            if (turno % 2 == 1) {
                $(this).append("X");
            }
            else {
                $(this).append("O");
			}
            turno++;
		}

		if (checarVencedor() != -1 && checarVencedor() != "") {
			if (checarVencedor() == "X") {
				alert("Jogador X venceu!");
			}
			else {
				alert("Jogador O venceu!");
			}
		}
		else {
			if(turno >= 10) {
				alert("Deu velha!");
			}
		}
    });

    function checarVencedor() {
		//Pega os textos em cada espaço da tabela
		var espaco1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
		var espaco2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
		var espaco3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
		var espaco4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
		var espaco5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
		var espaco6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
		var espaco7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
		var espaco8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
		var espaco9 = $("#board tr:nth-child(3) td:nth-child(3)").text();

		//Checar linhas
		if (espaco1 == espaco2 && espaco2 == espaco3) {
			return espaco1;
		} else if (espaco4 == espaco5 && espaco5 == espaco6) {
			return espaco4;
		} else if (espaco7 == espaco8 && espaco8 == espaco9) {
			return espaco7;
		}

		//Checar colunas
		else if (espaco1 == espaco4 && espaco4 == espaco7) {
			return espaco1;
		} else if (espaco2 == espaco5 && espaco5 == espaco8) {
			return espaco2;
		} else if (espaco3 == espaco6 && espaco6 == espaco9) {
			return espaco3;
		}

		//Checar diagonais
		else if (espaco1 == espaco5 && espaco5 == espaco9) {
			return espaco1;
		} else if (espaco3 == espaco5 && espaco5 == espaco7) {
			return espaco3;
		}

		//Não há vencedor
		return -1;
	}

	$("#resetBtn").click(function() {
		$("#board tr:nth-child(1) td:nth-child(1)").text() = "";
		$("#board tr:nth-child(1) td:nth-child(2)").text() = "";
		$("#board tr:nth-child(1) td:nth-child(3)").text() = "";
		$("#board tr:nth-child(2) td:nth-child(1)").text() = "";
		$("#board tr:nth-child(2) td:nth-child(2)").text() = "";
		$("#board tr:nth-child(2) td:nth-child(3)").text() = "";
		$("#board tr:nth-child(3) td:nth-child(1)").text() = "";
		$("#board tr:nth-child(3) td:nth-child(2)").text() = "";
		$("#board tr:nth-child(3) td:nth-child(3)").text() = "";
	});
});