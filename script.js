document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("gameBoard");
    const perguntas = { 
                 
   dificil: [
                    { pergunta: "Qual é o maior impacto ambiental das armas nucleares?", respostas: ["Contaminação do solo, água e ar", "Poluição sonora", "Aumento de temperatura", "Desmatamento"], correta: 0 },
                    { pergunta: "O que é uma corrida armamentista nuclear?", respostas: ["Países competindo por armas nucleares", "Corrida de foguetes", "Acordo de paz", "Promoção de energia limpa"], correta: 0 },
                    { pergunta: "Qual o risco de grupos terroristas com material nuclear?", respostas: ["Podem fabricar bombas nucleares", "Podem usá-los em medicina", "Podem evitar conflitos", "Podem gerar eletricidade"], correta: 0 },
                    { pergunta: "Qual é o efeito prolongado da radiação de armas nucleares?", respostas: ["Doenças genéticas", "Aumento da biodiversidade", "Estabilidade climática", "Crescimento econômico"], correta: 0 },
                    { pergunta: "Por que o Brasil é contra a proliferação de armas nucleares?", respostas: ["Compromisso com a paz", "Necessidade de território", "Desinteresse em tecnologia", "Isolamento geográfico"], correta: 0 },
                    { pergunta: "O que prevê o Tratado de Não Proliferação Nuclear (TNP)?", respostas: ["Impedir a disseminação de armas nucleares", "Proibir armas de fogo", "Proteger áreas verdes", "Reduzir gases poluentes"], correta: 0 },
                    { pergunta: "Qual é o principal argumento contra o Brasil ter armas nucleares?", respostas: ["Desarmamento e paz", "Avanço tecnológico", "Redução de impostos", "Interesse econômico"], correta: 0 },
                    { pergunta: "Como armas nucleares afetam a diplomacia?", respostas: ["Isolam e ameaçam países", "Facilitam acordos de paz", "Reduzem poluição", "Aumentam exportações"], correta: 0 },
                    { pergunta: "Qual é o risco de proliferação nuclear?", respostas: ["Corrida armamentista", "Aumento de exportações", "Redução de conflitos", "Melhoria na saúde"], correta: 0 },
                    { pergunta: "Qual o maior perigo dos testes nucleares?", respostas: ["Contaminação ambiental", "Redução da energia", "Aumento da fauna", "Formação de florestas"], correta: 0 },
                    { pergunta: "O que pode causar uma detonação nuclear?", respostas: ["Devastação em massa", "Melhor saúde", "Mais educação", "Crescimento econômico"], correta: 0 },
                    { pergunta: "Qual o maior custo do desenvolvimento de armas nucleares?", respostas: ["Desvio de recursos para saúde e educação", "Crescimento do PIB", "Redução de impostos", "Mais segurança"], correta: 0 },
                    { pergunta: "Qual país possui uma política de não proliferação nuclear?", respostas: ["Brasil", "Coreia do Norte", "Índia", "Paquistão"], correta: 0 },
                    { pergunta: "Qual é uma das consequências da radiação nuclear em humanos?", respostas: ["Doenças genéticas", "Melhoria do sistema imunológico", "Crescimento muscular", "Regeneração celular"], correta: 0 },
                    { pergunta: "Qual o impacto ambiental dos testes nucleares?", respostas: ["Contaminação do ecossistema", "Aumento da vegetação", "Diminuição da poluição", "Aumento da biodiversidade"], correta: 0 },
                    { pergunta: "Qual é o maior problema das armas nucleares para a humanidade?", respostas: ["Destruição em massa", "Economia sustentável", "Desenvolvimento rural", "Promoção da paz"], correta: 0 },
                    { pergunta: "Qual organização internacional promove o desarmamento nuclear?", respostas: ["AIEA", "NASA", "OEA", "OMS"], correta: 0 },
                    { pergunta: "Qual o principal desafio dos resíduos nucleares?", respostas: ["Perigo por milhares de anos", "Fácil de reciclar", "Uso na medicina", "Pouca quantidade"], correta: 0 },
                    { pergunta: "Qual foi o efeito de desastres como Chernobyl?", respostas: ["Contaminação de gerações", "Aumento da vegetação", "Promoção de turismo", "Melhoria de moradias"], correta: 0 },
                    { pergunta: "Qual país lidera por exemplo no uso pacífico da energia nuclear?", respostas: ["Brasil", "Estados Unidos", "Irã", "Coreia do Norte"], correta: 0 }
                ],
                medio: [
                    { pergunta: "Qual é uma aplicação pacífica da tecnologia nuclear?", respostas: ["Radioterapia", "Detonação de bombas", "Corrida espacial", "Desenvolvimento de armas"], correta: 0 },
                    { pergunta: "O que é radiofármaco?", respostas: ["Medicamento com substância radioativa", "Tipo de planta medicinal", "Equipamento nuclear", "Radiação para esterilizar alimentos"], correta: 0 },
                    { pergunta: "Para que serve a esterilização por radiação?", respostas: ["Esterilizar produtos médicos", "Tratar câncer", "Gerar eletricidade", "Explorar o espaço"], correta: 0 },
                    { pergunta: "Qual órgão internacional fiscaliza o uso da tecnologia nuclear?", respostas: ["AIEA", "ONU", "OTAN", "OEA"], correta: 0 },
                    { pergunta: "Qual técnica é usada no diagnóstico por imagem?", respostas: ["Cintilografia", "Raio-X comum", "Ultrassom", "Eletrocardiograma"], correta: 0 },
                    { pergunta: "O que é PET scan?", respostas: ["Tomografia por emissão de pósitrons", "Tipo de raio-X", "Tecnologia de ultrassom", "Radiação gama"], correta: 0 },
                    { pergunta: "Qual isótopo é usado no tratamento do hipertireoidismo?", respostas: ["Iodo-131", "Carbono-14", "Urânio-235", "Cobalto-60"], correta: 0 },
                    { pergunta: "O que é radioterapia?", respostas: ["Uso de radiação para tratar tumores", "Método de imagem do corpo", "Processo de descontaminação", "Sistema de controle nuclear"], correta: 0 },
                    { pergunta: "Qual uso nuclear ajuda na dor óssea?", respostas: ["Isótopos para dor óssea", "Ultrassom", "Ressonância", "Eletroterapia"], correta: 0 },
                    { pergunta: "Para que são usados reatores de tório?", respostas: ["Melhorar segurança nuclear", "Aumentar a destruição", "Reduzir eletricidade", "Causar radiação"], correta: 0 },
                    { pergunta: "Que técnica nuclear melhora segurança alimentar?", respostas: ["Esterilização", "PET scan", "Radioterapia", "Imagem por cintilação"], correta: 0 },
                    { pergunta: "A energia nuclear é considerada uma fonte de energia...", respostas: ["Baixa em carbono", "Alto poluente", "Ilimitada", "Naturalmente renovável"], correta: 0 },
                    { pergunta: "Qual técnica nuclear detecta câncer precocemente?", respostas: ["Tomografia por emissão de pósitrons", "Ultrassom", "MRI", "Radiografia"], correta: 0 },
                    { pergunta: "Para que serve a AIEA?", respostas: ["Fiscalizar uso pacífico da energia nuclear", "Criar armas nucleares", "Promover energia renovável", "Estudar física teórica"], correta: 0 },
                    { pergunta: "Que tipo de equipamento usa radiação para segurança médica?", respostas: ["Radiofármacos", "Termômetros", "Equipamentos de ultrassom", "Ressonância"], correta: 0 },
                    { pergunta: "A radiação nuclear é usada para...", respostas: ["Esterilizar instrumentos médicos", "Congelar amostras biológicas", "Medir pressão arterial", "Crescer órgãos humanos"], correta: 0 },
                    { pergunta: "Que técnica ajuda no tratamento de câncer de tireoide?", respostas: ["Radiofármacos", "Exames de urina", "Transplantes", "Raio-X"], correta: 0 },
                    { pergunta: "Para que a energia nuclear é usada além da medicina?", respostas: ["Gerar eletricidade", "Aquecer casas", "Fabricar móveis", "Desenhar mapas"], correta: 0 },
                    { pergunta: "Qual é um dos riscos da energia nuclear?", respostas: ["Resíduos perigosos", "Poluição sonora", "Superaquecimento", "Corrosão"], correta: 0 },
                    { pergunta: "Que técnica permite imagens internas do corpo?", respostas: ["Cintilografia", "Radioterapia", "Exame de sangue", "Microondas"], correta: 0 }
                ],
                facil: [
                    { pergunta: "Qual é uma vantagem da energia nuclear?", respostas: ["Baixa emissão de carbono", "Produz muitos resíduos", "É muito poluente", "Depende do clima"], correta: 0 },
                    { pergunta: "Que elemento é crucial para energia nuclear?", respostas: ["Urânio", "Hidrogênio", "Oxigênio", "Carbono"], correta: 0 },
                    { pergunta: "Qual o principal uso de radiofármacos?", respostas: ["Tratar doenças", "Produzir energia", "Explorar o espaço", "Fazer medicamentos de plantas"], correta: 0 },
                    { pergunta: "Qual tratamento nuclear alivia dores ósseas?", respostas: ["Uso de isótopos", "Cintilografia", "Radiação ultravioleta", "Tomografia"], correta: 0 },
                    { pergunta: "Qual técnica nuclear ajuda no tratamento do câncer?", respostas: ["Radioterapia", "Ultrassom", "Hemodiálise", "Cirurgia"], correta: 0 },
                    { pergunta: "Qual área médica usa a tecnologia nuclear?", respostas: ["Medicina nuclear", "Neurologia", "Dermatologia", "Odontologia"], correta: 0 },
                    { pergunta: "Qual é o objetivo da AIEA?", respostas: ["Garantir o uso seguro e pacífico da energia nuclear", "Construir usinas nucleares", "Criar armas nucleares", "Explorar planetas"], correta: 0 },
                    { pergunta: "O que é um radiofármaco?", respostas: ["Medicamento com radiação", "Medicamento de plantas", "Equipamento para cirurgia", "Produto de limpeza"], correta: 0 },
                    { pergunta: "Qual a principal desvantagem da energia nuclear?", respostas: ["Produz resíduos perigosos", "Depende do clima", "Não é confiável", "Produz pouca energia"], correta: 0 },
                    { pergunta: "Que tipo de radiação ajuda no diagnóstico por imagem?", respostas: ["Radiação gama", "Ultravioleta", "Infravermelha", "Microondas"], correta: 0 },
                    { pergunta: "Qual o papel da AIEA no setor nuclear?", respostas: ["Inspecionar o uso seguro e pacífico da energia nuclear", "Promover explosões nucleares", "Distribuir radiofármacos", "Fornecer exames clínicos"], correta: 0 },
                    { pergunta: "Que área da medicina usa a radiação para diagnóstico e tratamento?", respostas: ["Medicina nuclear", "Odontologia", "Nutrição", "Ortopedia"], correta: 0 },
                    { pergunta: "Qual é uma aplicação da energia nuclear além de produzir eletricidade?", respostas: ["Esterilização de produtos médicos", "Construir pontes", "Reduzir poluição sonora", "Diminuir o trânsito"], correta: 0 },
                    { pergunta: "Qual material radioativo é usado na medicina?", respostas: ["Iodo-131", "Cálcio", "Nitrogênio", "Ferro"], correta: 0 },
                    { pergunta: "Que radiação é usada na cintilografia?", respostas: ["Gama", "Luz visível", "Infravermelha", "Microondas"], correta: 0 },
                    { pergunta: "Qual tipo de energia nuclear tem menor risco de contaminação?", respostas: ["Reatores de tório", "Carvão", "Óleo", "Combustíveis fósseis"], correta: 0 },
                    { pergunta: "Para que é usado o Cobalto-60?", respostas: ["Tratamento de câncer", "Radiografias dentárias", "Estimular crescimento ósseo", "Curar diabetes"], correta: 0 },
                    { pergunta: "O que é um acelerador linear?", respostas: ["Equipamento para tratamento de câncer", "Máquina de radiografia", "Dispositivo de ultrassom", "Material para tratamento"], correta: 0 },
                    { pergunta: "Qual aplicação nuclear tem maior foco na agricultura?", respostas: ["Esterilização de sementes", "Cintilografia", "Tratamento de câncer", "Exploração de solo"], correta: 0 },
                    { pergunta: "Que aplicação da energia nuclear ajuda na segurança alimentar?", respostas: ["Radiação para esterilizar alimentos", "Uso de gado radiativo", "Clonagem de vegetais", "Controle de fertilizantes"], correta: 0 }
                ]
            };
          
    function embaralhar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    function criarCarta(nivel, perguntaObj) {
        const card = document.createElement("div");
        card.classList.add("card", nivel);
    
        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");
    
        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
    
        const logoContainer = document.createElement("div");
        logoContainer.classList.add("logo-container");
        const logoImage = document.createElement("img");
        logoImage.src = "imagens/logo.png";
        logoImage.alt = "Apollo Studios";
        logoImage.classList.add("logo-image");
    
        const logoText = document.createElement("div");
        logoText.classList.add("logo-text");
        logoText.innerText = "Apollo Studios";
    
        logoContainer.appendChild(logoImage);
        logoContainer.appendChild(logoText);
        cardFront.appendChild(logoContainer);
    
        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
    
        const questionEl = document.createElement("div");
        questionEl.classList.add("question");
        questionEl.innerText = perguntaObj.pergunta;
    
        const answersEl = document.createElement("div");
        answersEl.classList.add("answers");
    
        const respostasComIndice = perguntaObj.respostas.map((resposta, index) => ({ resposta, index }));
        embaralhar(respostasComIndice);
    
        respostasComIndice.forEach(({ resposta, index }) => {
            const answerButton = document.createElement("button");
            answerButton.innerText = resposta;
    
            answerButton.addEventListener("click", () => {
                if (index === perguntaObj.correta) {
                    answerButton.classList.add("correct");
                } else {
                    answerButton.classList.add("incorrect");
                }
            });
    
            answersEl.appendChild(answerButton);
        });
    
        cardBack.appendChild(questionEl);
        cardBack.appendChild(answersEl);
    
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    
        gameBoard.appendChild(card);
    }
    
    function carregarCartas() {
        gameBoard.innerHTML = "";
    
        let allCards = [
            ...perguntas.dificil.map(pergunta => ({ nivel: "dificil", ...pergunta })),
            ...perguntas.medio.map(pergunta => ({ nivel: "medio", ...pergunta })),
            ...perguntas.facil.map(pergunta => ({ nivel: "facil", ...pergunta }))
        ];

        embaralhar(allCards);
    
        allCards.forEach(({ nivel, pergunta, respostas, correta }) => {
            criarCarta(nivel, { pergunta, respostas, correta });
        });
    }
    
    carregarCartas();
});