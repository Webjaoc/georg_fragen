const wheel1 = document.querySelector("#wheel_1");
const wheel2 = document.querySelector("#wheel_2");
const wheel3 = document.querySelector("#wheel_3");
const spinButton1 = document.querySelector("#btn1");
const spinButton2 = document.querySelector("#btn2");
const spinButton3 = document.querySelector("#btn3");
const questionDiv1 = document.querySelector("#question1");
const questionDiv2 = document.querySelector("#question2");
const questionDiv3 = document.querySelector("#question3");

// Lista de preguntas
const questions = [
  "Was ist deine Lieblingsfarbe?",
  "Was ist dein Lieblingsessen?",
  "Welche Superkraft hättest du gerne?",
  "Was ist dein Lieblingsfilm?",
  "Welchen Ort auf der Welt möchtest du besuchen?",
  "Was würdest du mit einer Million Euro machen?",
  "Was ist dein Lieblingstier?",
  "Was ist dein Lieblingsbuch?",
  "Was ist dein Lieblingssport?",
  "Welches Musikinstrument würdest du gerne spielen?",
  "Was ist dein Traumjob?",
  "Was würdest du tun, wenn du einen Tag unsichtbar wärst?",
  "Was ist dein Lieblingslied?",
  "Wer ist dein Vorbild?",
  "Was ist deine größte Angst?",
  "Was war dein schönster Urlaub?",
  "Welches historische Ereignis würdest du gerne miterleben?",
  "Was ist dein Lieblingsfach in der Schule?",
  "Was würdest du auf eine einsame Insel mitnehmen?",
  "Welche Sprache würdest du gerne lernen?",
  "Was ist dein Lieblingsgetränk?",
  "Was ist dein Lieblingsjahreszeit?",
  "Welche Person würdest du gerne treffen?",
  "Was ist dein Lieblingsspiel?",
  "Was würdest du tun, wenn du die Zeit zurückdrehen könntest?",
  "Was ist dein Lieblingsrestaurant?",
  "Was würdest du in deiner Stadt verändern?",
  "Was ist deine Lieblingsfrucht?",
  "Was ist dein Lieblingskuchen?",
  "Was ist dein Lieblingsfeiertag?",
  "Welche Fähigkeit würdest du gerne besitzen?",
  "Was machst du gerne in deiner Freizeit?",
  "Welche Stadt möchtest du besuchen?",
  "Was ist dein Lieblingsparfum?",
  "Welches Hobby würdest du gerne ausprobieren?",
  "Welche Farbe beschreibt deine Persönlichkeit?",
  "Was ist dein Lieblingstierfilm?",
  "Was ist deine Lieblingsblume?",
  "Was war das beste Geschenk, das du je bekommen hast?",
  "Welche TV-Serie schaust du am liebsten?",
  "Was war dein Lieblingsspielzeug als Kind?",
  "Was würdest du in der Zukunft gerne erfinden?",
  "Was ist dein Lieblingsessen, das deine Eltern kochen?",
  "Welche Sportart möchtest du ausprobieren?",
  "Was ist dein Lieblingskleidungsstück?",
  "Was ist dein Lieblingsort in deinem Zuhause?",
  "Welches Lied hörst du, wenn du traurig bist?",
  "Was ist dein Lieblingsmärchen?",
  "Was würdest du tun, wenn du fliegen könntest?",
  "Was ist dein Lieblingsdessert?",
  "Was ist deine Lieblingsfarbe in der Natur?",
  "Welches Buch würdest du jedem empfehlen?",
  "Was war dein lustigster Moment?",
  "Welche Tierart fasziniert dich am meisten?",
  "Was ist dein Lieblingsgericht zum Frühstück?",
  "Welches ist dein Lieblingsmuseum?",
  "Welches Land würdest du gerne entdecken?",
  "Was ist dein Lieblingswitz?",
  "Welche Fähigkeit würdest du gerne lernen?",
  "Was ist dein Lieblingsfest?",
  "Welche historische Person fasziniert dich?",
  "Was ist dein Lieblingsgetränk im Sommer?",
  "Welche Superkraft findest du am nützlichsten?",
  "Was ist dein Lieblingssportler oder deine Lieblingssportlerin?",
  "Was ist dein Lieblingseisgeschmack?",
  "Welchen Beruf wolltest du als Kind ausüben?",
  "Was ist dein Traumauto?",
  "Was ist dein Lieblingsort in der Natur?",
  "Welches Lied bringt dich zum Tanzen?",
  "Was war deine Lieblingsfernsehsendung als Kind?",
  "Was ist deine Lieblingssuppe?",
  "Welches Abenteuer möchtest du erleben?",
  "Was ist dein Lieblingszitat?",
  "Welche Stadt möchtest du unbedingt sehen?",
  "Was war dein glücklichster Tag?",
  "Welche Gewohnheit möchtest du ändern?",
  "Was ist dein Lieblingsinstrument?",
  "Welche Jahreszeit magst du am wenigsten?",
  "Was ist deine Lieblingspizza?",
  "Welches Tier wärst du gerne?",
  "Welche drei Dinge machen dich glücklich?",
  "Welches Gericht würdest du gerne kochen lernen?",
  "Was ist dein Lieblingsort am Wochenende?",
  "Was ist dein Lieblingsfilmgenre?",
  "Welche Farbe hat dein Zimmer?",
  "Was würdest du tun, wenn du einen Wunsch frei hättest?",
  "Was ist dein Lieblingstag der Woche?",
  "Welche Sportmannschaft unterstützt du?",
  "Was ist dein Lieblingsstrand?",
  "Was ist dein Lieblingsessen, das du selbst kochen kannst?",
  "Welche berühmte Person würdest du gerne treffen?",
  "Was ist dein Lieblingsmärchen aus deiner Kindheit?",
  "Was würdest du tun, wenn du für einen Tag König oder Königin wärst?",
  "Was ist deine Lieblingserinnerung aus der Kindheit?",
  "Was ist dein Lieblingsgemüse?",
  "Welches Tier findest du am süßesten?",
  "Welche Jahreszeit magst du am liebsten?"
];


spinButton1.addEventListener("click", () => {
  // Ocultar la pregunta anterior
  questionDiv1.classList.add("hidden");

  // Generar un giro aleatorio
  const randomDegrees = Math.floor(Math.random() * 360) + 720; // Al menos 2 giros completos
  wheel1.style.transform = `rotate(${randomDegrees}deg)`;

  // Calcular el resultado
  const selectedSection = Math.floor((randomDegrees % 360) / 60); // Cada sección ocupa 60 grados

  // Mostrar la pregunta después de 2 segundos
  setTimeout(() => {
    const question = questions[selectedSection];
    questionDiv1.textContent = question;
    questionDiv1.classList.remove("hidden");
  }, 2000);
});

spinButton2.addEventListener("click", () => {
  // Ocultar la pregunta anterior
  questionDiv2.classList.add("hidden");

  // Generar un giro aleatorio
  const randomDegrees = Math.floor(Math.random() * 360) + 720; // Al menos 2 giros completos
  wheel2.style.transform = `rotate(${randomDegrees}deg)`;

  // Calcular el resultado
  const selectedSection = Math.floor((randomDegrees % 360) / 60); // Cada sección ocupa 60 grados

  // Mostrar la pregunta después de 2 segundos
  setTimeout(() => {
    const question = questions[selectedSection];
    questionDiv2.textContent = question;
    questionDiv2.classList.remove("hidden");
  }, 2000);
});

spinButton3.addEventListener("click", () => {
  // Ocultar la pregunta anterior
  questionDiv3.classList.add("hidden");

  // Generar un giro aleatorio
  const randomDegrees = Math.floor(Math.random() * 360) + 720; // Al menos 2 giros completos
  wheel3.style.transform = `rotate(${randomDegrees}deg)`;

  // Calcular el resultado
  const selectedSection = Math.floor((randomDegrees % 360) / 60); // Cada sección ocupa 60 grados

  // Mostrar la pregunta después de 2 segundos
  setTimeout(() => {
    const question = questions[selectedSection];
    questionDiv3.textContent = question;
    questionDiv3.classList.remove("hidden");
  }, 2000);
});
