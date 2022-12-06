window.onload = function() { 
    alert('O numero dos candidatos são:\n09, 10, 12, 15, 19 e 22');
}

class funcoes {

    inserir(valor) {

        let campo_1 = document.querySelector('.campo1').value;
        let campo_2 = document.querySelector('.campo2').value;

        if (campo_1 == "") {
            document.querySelector('.campo1').value = valor;
        }
        else if (campo_2 == "") {
            document.querySelector('.campo2').value = valor;
        }

        this.setarJogador();
    }

    corrigir() {
        document.querySelector('.campo1').value = "";
        document.querySelector('.campo2').value = "";
        document.querySelector('.imgJogador').src = 'imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg'
        document.querySelector('.nome').value = "";
        document.querySelector('.pais').value = "";
        document.querySelector('.idade').value = "";
        document.querySelector('.voto').innerHTML = "...";
    }

    setarJogador() {
        this.gravarJogadores();

        let campo_1 = parseInt(document.querySelector('.campo1').value);
        let campo_2 = parseInt(document.querySelector('.campo2').value);
        let candidato = (campo_1 * 10) + campo_2;

        let texto = document.querySelector('.voto');

        switch (candidato) {
            case 9:
                document.querySelector('.imgJogador').src = 'Harry Kane.png';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Reino Unido';
                document.querySelector('.idade').value = '29';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 10:
                document.querySelector('.imgJogador').src = 'Neymar.png';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Brasil';
                document.querySelector('.idade').value = '30';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 12:
                document.querySelector('.imgJogador').src = 'Messi.png';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Argentina';
                document.querySelector('.idade').value = '35';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 15:
                document.querySelector('.imgJogador').src = 'Akram Hassan.png';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Catar';
                document.querySelector('.idade').value = '26';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 19:
                document.querySelector('.imgJogador').src = 'Serginho Dest.png';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Países Baixos';
                document.querySelector('.idade').value = '22';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 22:
                document.querySelector('.imgJogador').src = 'Robert Lewandowski.png';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Polônia';
                document.querySelector('.idade').value = '34';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 0:
                document.querySelector('.imgJogador').src = 'imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Nulo';
                document.querySelector('.idade').value = 'Nulo';
                document.querySelector('.voto').innerHTML = "Voto Anulado...";  
        }

    }

    gravarJogadores() {
        sessionStorage.setItem('9', 'Harry Kane');
        sessionStorage.setItem('10', 'Neymar');
        sessionStorage.setItem('12', 'Messi');
        sessionStorage.setItem('15', 'Akram Hassan');
        sessionStorage.setItem('19', 'Serginho Dest');
        sessionStorage.setItem('22', 'Robert Lewandowski');
        sessionStorage.setItem('0', 'Nulo');
    }

    votar() {
        let campo_1 = parseInt(document.querySelector('.campo1').value);
        let campo_2 = parseInt(document.querySelector('.campo2').value);
        let pegarCandidato = (campo_1 * 10) + campo_2;
        let setarCandidato = sessionStorage.getItem(pegarCandidato);


        let votos = 0;

        if (document.querySelector('.campo1').value == "" && document.querySelector('.campo2').value == "") {
            alert("Os campos Não Podem Ser Vazio!")
            return
        }

        else if (sessionStorage.getItem(setarCandidato) !== null) {
            votos = parseInt(sessionStorage.getItem(setarCandidato)) + 1;
            this.gravarVotos(setarCandidato, votos);
        }
        else {
            this.gravarVotos(setarCandidato, 1);
        }

        let popUp = window.open("teste.html", "_blank", "toolbar=no, scrollbars=no, menubar=no, resizable=no, width=600, height=400, left=" + (screen.width - 600) / 2 + ",top=" + (screen.height - 400) / 2);

        setTimeout(() => {
            popUp.close();
            document.querySelector('.imgJogador').src = 'imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg'
            document.querySelector('.nome').value = "";
            document.querySelector('.pais').value = "";
            document.querySelector('.idade').value = "";
            document.querySelector('.voto').innerHTML = "...";
            document.querySelector('.campo1').value = "";
            document.querySelector('.campo2').value = "";
        }, 2000);
    }

    gravarVotos(candidato, voto) {
        sessionStorage.setItem(candidato, voto);
    }

    branco() {
        let campo_1 = document.querySelector('.campo1').value;
        let campo_2 = document.querySelector('.campo2').value;
        let branco = 'Branco';

        let votos = 0;

        if (campo_1 == "" && campo_2 == "") {
            if (sessionStorage.getItem(branco) !== null) {
                votos = parseInt(sessionStorage.getItem(branco)) + 1;
                this.gravarVotos(branco, votos);
            }
            else {
                this.gravarVotos(branco, 1);
            }
        }

        let popUp = window.open("teste.html", "_blank", "toolbar=no, scrollbars=no, menubar=no, resizable=no, width=600, height=400, left=" + (screen.width - 600) / 2 + ",top=" + (screen.height - 400) / 2);

        setTimeout(() => {
            popUp.close();
            document.querySelector('.imgJogador').src = 'imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg'
            document.querySelector('.nome').value = "";
            document.querySelector('.pais').value = "";
            document.querySelector('.idade').value = "";
            document.querySelector('.voto').innerHTML = "...";
            document.querySelector('.campo1').value = "";
            document.querySelector('.campo2').value = "";
        }, 2000);
    }

    resultado() {

        document.querySelector('.resultado').innerHTML = "";

        for (let i = 0; i < 100; i++) {
            let nome = sessionStorage.getItem(i);

            if (sessionStorage.getItem(i) != null) {
                document.querySelector('.resultado').innerHTML += sessionStorage.getItem(i) + " tem " + sessionStorage.getItem(nome) + " votos<br>";
            }
        }

        document.querySelector('.resultado').innerHTML += "Votos Brancos " + sessionStorage.getItem('Branco') + "<br>";

        document.querySelector('.resultado').innerHTML += "Votos Nulos " + sessionStorage.getItem('Nulo') + "<br>";
    }
}

let urna = new funcoes();



document.querySelector('.close').addEventListener('click', e => {
    window.location.href = "/index.html"
});
