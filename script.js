const wheel1 = document.querySelector("#wheel_1");
const wheel2 = document.querySelector("#wheel_2");
const wheel3 = document.querySelector("#wheel_3");
const spinButton1 = document.querySelector("#btn1");
const spinButton2 = document.querySelector("#btn2");
const spinButton3 = document.querySelector("#btn3");
const questionDiv1 = document.querySelector("#question1");
const questionDiv2 = document.querySelector("#question2");
const questionDiv3 = document.querySelector("#question3");
let countdownDiv = document.getElementById("countdown");

// Lista de preguntas
const questions = [
  "Was ist deine Lieblingsfarbe?",
  "Was ist dein Lieblingsessen?",
  "Welche Superkraft hättest du gerne?",
  "Was ist dein Lieblingsfilm?",
  "Welchen Ort möchtest du besuchen?",
  "Was ist dein Lieblingstier?",
  "Was ist dein Lieblingsbuch?",
  "Was ist dein Lieblingssport?",
  "Was würdest du mit viel Geld machen?",
  "Was ist dein Traumjob?",
  "Welches Lied magst du am meisten?",
  "Welche Jahreszeit magst du?",
  "Welche Sprache möchtest du lernen?",
  "Was war dein schönster Urlaub?",
  "Was ist dein Lieblingsgetränk?",
  "Was machst du gerne am Wochenende?",
  "Welche Farbe trägst du am liebsten?",
  "Was ist dein Lieblingssnack?",
  "Was ist dein Traumauto?",
  "Welches Land möchtest du bereisen?",
  "Was ist dein Lieblingsfest?",
  "Welche Serie magst du?",
  "Welches ist dein Lieblingsspiel?",
  "Was ist dein Lieblingszitat?",
  "Was ist dein Lieblingsobst?",
  "Was war dein erstes Haustier?",
  "Welches Instrument spielst du gerne?",
  "Welche Blume findest du schön?",
  "Welcher Sport interessiert dich?",
  "Was ist dein Lieblingsdessert?",
  "Welche Süßigkeit magst du?",
  "Welcher Ort macht dich glücklich?",
  "Was ist dein Lieblingspizza-Belag?",
  "Welcher Schauspieler gefällt dir?",
  "Welche Stadt möchtest du sehen?",
  "Was machst du gerne im Sommer?",
  "Welches Meer möchtest du besuchen?",
  "Was ist dein Lieblingspark?",
  "Welches Gemüse magst du nicht?",
  "Welches Spielzeug mochtest du als Kind?",
  "Welche Farbe beschreibt dich?",
  "Welcher Kuchen schmeckt dir?",
  "Was ist dein Lieblingslied?",
  "Welche App benutzt du am meisten?",
  "Welcher Wochentag ist dein Favorit?",
  "Welche Art von Musik hörst du?",
  "Welche Gerichte kochst du gerne?",
  "Was machst du am liebsten abends?",
  "Welches Tier fasziniert dich?",
  "Welche Jahreszeit magst du nicht?",
  "Welche Superheldenkraft möchtest du?",
  "Was ist deine größte Stärke?",
  "Was ist deine größte Schwäche?",
  "Welche Erinnerungen machen dich glücklich?",
  "Welche Sprache findest du schön?",
  "Was war dein erster Job?",
  "Was ist deine Lieblingsstadt?",
  "Welche Tradition magst du?",
  "Welcher Kontinent interessiert dich?",
  "Was ist dein Lieblingsfach?",
  "Welches Tier möchtest du haben?",
  "Welcher Film hat dich berührt?",
  "Was ist dein Lieblingsrestaurant?",
  "Was machst du bei Regenwetter?",
  "Welches Buch liest du gerade?",
  "Welcher Sportler inspiriert dich?",
  "Welches Hobby würdest du ausprobieren?",
  "Welche Farbe magst du nicht?",
  "Was war dein größter Erfolg?",
  "Welche Filme siehst du am liebsten?",
  "Welches Urlaubsziel ist dein Traum?",
  "Welche Eissorte isst du gerne?",
  "Welcher Vogel ist dein Favorit?",
  "Welcher Tag war unvergesslich?",
  "Welches Essen magst du nicht?",
  "Welche Spiele spielst du am PC?",
  "Welche Stadt in Deutschland magst du?",
  "Welcher Feiertag ist dein Favorit?",
  "Welches Getränk magst du nicht?",
  "Welche Berge möchtest du sehen?",
  "Welcher Musiker inspiriert dich?",
  "Welche Dinge machen dich glücklich?",
  "Was war dein mutigster Moment?",
  "Welche Blumen magst du am liebsten?",
  "Welches Haus ist dein Traumhaus?",
  "Welcher Film macht dich glücklich?",
  "Welches Land möchtest du nie besuchen?",
  "Was würdest du auf einer Insel machen?",
  "Welcher Sport interessiert dich nicht?",
  "Welche Farbe erinnert dich an Glück?",
  "Welcher Moment war dein lustigster?",
  "Welches Tier macht dir Angst?",
  "Welcher Beruf fasziniert dich?",
  "Welches Lied macht dich traurig?",
  "Was ist dein Lieblingsbrot?",
  "Welche Jahreszeit hat das beste Wetter?",
  "Was würdest du gerne erfinden?",
  "Welches Kleidungsstück magst du nicht?",
  "Welche Gewohnheit möchtest du ändern?",
  "Welches Obst schmeckt dir nicht?",
  "Welche Serie kannst du immer sehen?",
  "Welcher Strand ist der schönste?",
  "Was macht dir morgens Freude?",
  "Welcher Urlaub war enttäuschend?",
  "Welche Farbe hat dein Zimmer?",
  "Welches Tier ist das stärkste?",
  "Welches Getränk ist das gesündeste?",
  "Welche Feste feierst du gerne?",
  "Welches Buch hat dich inspiriert?",
  "Was war dein erster Film im Kino?",
  "Was machst du gerne draußen?",
  "Welche Farbe findest du beruhigend?",
  "Welcher Wochentag ist anstrengend?",
  "Welches Spiel war dein Favorit als Kind?",
  "Welches Gericht würdest du nie essen?",
  "Welche App ist die nützlichste?",
  "Welche Schuhe trägst du am liebsten?",
  "Welches Wetter magst du nicht?",
  "Welche Stadt möchtest du nochmal besuchen?",
  "Welches Hobby hast du aufgegeben?",
  "Welche Früchte isst du oft?",
  "Was war dein schönstes Geschenk?",
  "Welche Farbe findest du langweilig?",
  "Welche Länder möchtest du bereisen?",
  "Welcher Film hat die beste Musik?",
  "Welche Tiere magst du im Zoo?",
  "Welche Aktivität macht dir Spaß?",
  "Welches Spielzeug hast du gesammelt?",
  "Was würdest du bei Schnee machen?",
  "Welches Obst magst du nicht?",
  "Welche Superkraft findest du nutzlos?",
  "Was machst du gerne im Frühling?",
  "Welcher Vogel ist am buntesten?",
  "Was machst du am liebsten mit Freunden?",
  "Welche Stadt ist zu laut?",
  "Welches Essen bringt dich zum Lächeln?",
  "Welcher Film war sehr spannend?",
  "Welche Musik hörst du beim Lernen?",
  "Welcher Kuchen ist der beste?",
  "Was ist dein Lieblingsessen im Winter?",
  "Welcher Ort macht dich ruhig?",
  "Welche Blume hat die schönste Farbe?",
  "Welche Stadt hat das beste Essen?",
  "Was machst du gerne im Herbst?",
  "Welche Farben sind deine Favoriten?",
  "Welches Tier würdest du nie streicheln?",
  "Welche Landschaft fasziniert dich?",
  "Welches Fest ist das lustigste?",
  "Welcher Fluss ist der längste?",
  "Was ist dein Lieblingsmuseum?",
  "Welche Sprache klingt schön?",
  "Welche Möbel sind dir wichtig?",
  "Welcher Tag war besonders aufregend?",
  "Welches Wetter findest du am besten?",
  "Welche Snacks nimmst du ins Kino?",
  "Welche Farben findest du hässlich?",
  "Welches Land hat das beste Essen?",
  "Welche Erinnerungen sind dir wichtig?",
    "¿Cuál es tu color favorito?",
    "¿Qué comida te gusta más?",
    "¿Cuál es tu película favorita?",
    "¿Qué país te gustaría visitar?",
    "¿Tienes una mascota favorita?",
    "¿Qué libro recomendarías?",
    "¿Cuál es tu deporte favorito?",
    "¿Qué harías con un millón de dólares?",
    "¿Cuál es tu estación del año preferida?",
    "¿Qué idioma te gustaría aprender?",
    "¿Qué haces en tu tiempo libre?",
    "¿Cuál es tu fruta favorita?",
    "¿Qué canción escuchas más seguido?",
    "¿Cuál es tu animal favorito?",
    "¿Cuál es tu videojuego preferido?",
    "¿Qué lugar en tu ciudad te gusta más?",
    "¿Qué superpoder te gustaría tener?",
    "¿Cuál es tu postre favorito?",
    "¿Prefieres el día o la noche?",
    "¿Qué tipo de música prefieres?",
    "¿Cuál es tu bebida favorita?",
    "¿Qué serie estás viendo ahora?",
    "¿Cuál es tu comida rápida preferida?",
    "¿Te gusta la playa o la montaña?",
    "¿Qué deporte te gustaría practicar?",
    "¿Prefieres el frío o el calor?",
    "¿Qué harías en un día perfecto?",
    "¿Qué película te hace reír?",
    "¿Qué sabor de helado te gusta más?",
    "¿Qué tipo de libros lees?",
    "¿Cuál es tu actor favorito?",
    "¿Qué país tiene la mejor comida?",
    "¿Qué haces los fines de semana?",
    "¿Qué fiesta te gusta más celebrar?",
    "¿Cuál es tu verdura favorita?",
    "¿Qué mascota te gustaría tener?",
    "¿Cuál es tu programa de TV favorito?",
    "¿Qué app usas con frecuencia?",
    "¿Prefieres leer o escuchar música?",
    "¿Qué ciudad quieres visitar?",
    "¿Cuál es tu tipo de película favorita?",
    "¿Qué estación del año no te gusta?",
    "¿Qué idioma encuentras difícil?",
    "¿Qué sabor de pastel prefieres?",
    "¿Te gustan los días lluviosos?",
    "¿Qué lugar de tu casa te relaja?",
    "¿Qué color no te gusta?",
    "¿Qué deporte ves en la televisión?",
    "¿Qué película te hace llorar?",
    "¿Prefieres pizza o hamburguesa?",
    "¿Cuál es tu hobby favorito?",
    "¿Qué canción siempre recuerdas?",
    "¿Cuál es tu mayor miedo?",
    "¿Qué harías en una isla desierta?",
    "¿Qué país te gustaría conocer primero?",
    "¿Prefieres libros físicos o digitales?",
    "¿Qué redes sociales usas más?",
    "¿Qué harías con más tiempo libre?",
    "¿Qué comida no te gusta?",
    "¿Qué dulce te gusta más?",
    "¿Qué serie recomendarías?",
    "¿Qué instrumento te gustaría tocar?",
    "¿Qué harías si fueras invisible?",
    "¿Qué película has visto más veces?",
    "¿Qué trabajo te gustaría tener?",
    "¿Qué lugar te da tranquilidad?",
    "¿Qué animal te asusta?",
    "¿Qué actividad te relaja?",
    "¿Qué sabor no soportas?",
    "¿Qué deporte nunca practicarías?",
    "¿Cuál es tu prenda de ropa favorita?",
    "¿Qué flor te parece más bonita?",
    "¿Qué prefieres: café o té?",
    "¿Qué color te hace sentir feliz?",
    "¿Qué comida amas desde niño?",
    "¿Qué hiciste en tus últimas vacaciones?",
    "¿Qué cosa siempre llevas contigo?",
    "¿Qué comida prepararías para una cita?",
    "¿Qué música escuchas al trabajar?",
    "¿Qué estación del año prefieres para viajar?",
    "¿Qué harías si pudieras volar?",
    "¿Qué sabor de helado no te gusta?",
    "¿Qué deporte practicas?",
    "¿Qué país tiene las mejores playas?",
    "¿Qué lugar quisieras visitar otra vez?",
    "¿Qué cosa te hace reír mucho?",
    "¿Qué clima prefieres para descansar?",
    "¿Qué harías si fueras famoso?",
    "¿Qué prefieres: leer o ver películas?",
    "¿Qué cena prepararías para tus amigos?",
    "¿Qué harías con una máquina del tiempo?",
    "¿Qué comida típica te gusta más?",
    "¿Qué fiesta te gustaría organizar?",
    "¿Qué prenda no te gusta usar?",
    "¿Qué película recomendarías a todos?",
    "What is your favorite color?",
    "What is your favorite food?",
    "What is your favorite movie?",
    "What country would you like to visit?",
    "Do you have a favorite pet?",
    "What book would you recommend?",
    "What is your favorite sport?",
    "What would you do with a million dollars?",
    "What is your favorite season?",
    "What language would you like to learn?",
    "What do you do in your free time?",
    "What is your favorite fruit?",
    "What song do you listen to the most?",
    "What is your favorite animal?",
    "What is your favorite video game?",
    "What is your favorite place in your city?",
    "What superpower would you like to have?",
    "What is your favorite dessert?",
    "Do you prefer the day or the night?",
    "What type of music do you like?",
    "What is your favorite drink?",
    "What series are you watching now?",
    "What is your favorite fast food?",
    "Do you prefer the beach or the mountains?",
    "What sport would you like to try?",
    "Do you prefer cold or warm weather?",
    "What would you do on a perfect day?",
    "What movie makes you laugh?",
    "What is your favorite ice cream flavor?",
    "What kind of books do you read?",
    "Who is your favorite actor?",
    "Which country has the best food?",
    "What do you do on weekends?",
    "What holiday do you like to celebrate?",
    "What is your favorite vegetable?",
    "What pet would you like to have?",
    "What is your favorite TV show?",
    "What app do you use the most?",
    "Do you prefer reading or listening to music?",
    "What city do you want to visit?",
    "What is your favorite type of movie?",
    "What season do you dislike?",
    "What language do you find hard to learn?",
    "What is your favorite cake flavor?",
    "Do you like rainy days?",
    "What place in your home relaxes you?",
    "What color do you dislike?",
    "What sport do you watch on TV?",
    "What movie makes you cry?",
    "Do you prefer pizza or burgers?",
    "What is your favorite hobby?",
    "What song do you always remember?",
    "What is your biggest fear?",
    "What would you do on a deserted island?",
    "Which country would you visit first?",
    "Do you prefer physical or digital books?",
    "What social media do you use most?",
    "What would you do with more free time?",
    "What food do you dislike?",
    "What candy do you like the most?",
    "What series would you recommend?",
    "What instrument would you like to play?",
    "What would you do if you were invisible?",
    "What movie have you watched multiple times?",
    "What is your dream job?",
    "What place makes you feel calm?",
    "What animal scares you?",
    "What activity relaxes you?",
    "What flavor do you hate?",
    "What sport would you never try?",
    "What is your favorite piece of clothing?",
    "What flower do you find the prettiest?",
    "Do you prefer coffee or tea?",
    "What color makes you happy?",
    "What food have you loved since childhood?",
    "What did you do on your last vacation?",
    "What item do you always carry with you?",
    "What food would you cook for a date?",
    "What music do you listen to while working?",
    "What season do you prefer for traveling?",
    "What would you do if you could fly?",
    "What ice cream flavor do you dislike?",
    "What sport do you play?",
    "Which country has the best beaches?",
    "What place would you visit again?",
    "What makes you laugh a lot?",
    "What weather do you prefer for resting?",
    "What would you do if you were famous?",
    "Do you prefer reading or watching movies?",
    "What dinner would you cook for friends?",
    "What would you do with a time machine?",
    "What is your favorite traditional food?",
    "What party would you like to organize?",
    "What clothing item do you dislike?",
    "What movie would you recommend to everyone?",
    "What snack do you bring to the movies?",
    "What is your favorite childhood memory?",
    "What is your favorite way to spend a weekend?",
    "What kind of weather inspires you?",
    "What is your favorite thing to do outdoors?",
    "What is your favorite holiday tradition?",
    "What game did you love as a kid?",
    "What type of art do you enjoy?",
    "What place would you love to photograph?",
    "What is your favorite type of restaurant?",
    "What’s the best gift you’ve ever received?",
    "What animal do you find fascinating?",
    "What’s your favorite thing about nature?",
    "What would you do with unlimited time?",
    "What inspires you every day?",
    "What food reminds you of home?",
  
];

spinButton1.addEventListener("click", () => {
  // Ocultar la pregunta anterior
  questionDiv1.classList.add("hidden");
  spinButton2.disabled = true;
  spinButton3.disabled = true;

  // Generar un giro aleatorio
  const randomDegrees = Math.floor(Math.random() * 360) + 1000; // Al menos 2 giros completos
  wheel1.style.transform = `rotate(${randomDegrees}deg)`;

  // Calcular el resultado
  const selectedSection = Math.floor((randomDegrees % 360) / 1); // Cada pregunta ocupa 2 grados

  // Mostrar la pregunta después de 2 segundos
  setTimeout(() => {
    const question = questions[selectedSection];
    questionDiv1.textContent = question;
    questionDiv1.classList.remove("hidden");

    // Iniciar cuenta regresiva
    startCountdown1(70); // 70 segundos = 1 minuto y 10 segundos
  }, 2000);
});


spinButton2.addEventListener("click", () => {
  // Ocultar la pregunta anterior
  questionDiv2.classList.add("hidden");

  // Generar un giro aleatorio
  const randomDegrees = Math.floor(Math.random() * 360) + 1100; // Al menos 2 giros completos
  wheel2.style.transform = `rotate(${randomDegrees}deg)`;

  // Calcular el resultado
  const selectedSection = Math.floor((randomDegrees % 360) / 1); // Cada pregunta ocupa 1 grados

  // Mostrar la pregunta después de 2 segundos
  setTimeout(() => {
    const question = questions[selectedSection];
    questionDiv2.textContent = question;
    questionDiv2.classList.remove("hidden");
    startCountdown2(70);
  }, 2000);
});

spinButton3.addEventListener("click", () => {
  // Ocultar la pregunta anterior
  questionDiv3.classList.add("hidden");

  // Generar un giro aleatorio
  const randomDegrees = Math.floor(Math.random() * 360) + 1200; // Al menos 2 giros completos
  wheel3.style.transform = `rotate(${randomDegrees}deg)`;

  // Calcular el resultado
  const selectedSection = Math.floor((randomDegrees % 360) / 1); // Cada pregunta ocupa 1 grados

  // Mostrar la pregunta después de 2 segundos
  setTimeout(() => {
    const question = questions[selectedSection];
    questionDiv3.textContent = question;
    questionDiv3.classList.remove("hidden");
    startCountdown3(70);
  }, 2000);
  
});

function startCountdown1(duration) {
  spinButton2.disabled = true;
  spinButton3.disabled = true;
  let countdownDiv = document.getElementById("countdown");
  let remainingTime = duration; // Tiempo restante en segundos
  const timer = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    // Mostrar el tiempo en formato mm:ss
    countdownDiv.textContent = `time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (remainingTime <= 0) {
      clearInterval(timer); // Detener el temporizador cuando llegue a 0
      countdownDiv.textContent = "¡Fertig!";
      spinButton2.disabled = false;
      spinButton3.disabled = false;
    } else {
      remainingTime--;
    }
  }, 1000);
}
function startCountdown2(duration) {
  spinButton1.disabled = true;
  spinButton3.disabled = true;
  let countdownDiv = document.getElementById("countdown");
  let remainingTime = duration; // Tiempo restante en segundos
  const timer = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    // Mostrar el tiempo en formato mm:ss
    countdownDiv.textContent = `time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (remainingTime <= 0) {
      clearInterval(timer); // Detener el temporizador cuando llegue a 0
      countdownDiv.textContent = "¡Fertig!";
      spinButton1.disabled = false;
      spinButton3.disabled = false;
    } else {
      remainingTime--;
    }
  }, 1000);
}
function startCountdown3(duration) {
  spinButton1.disabled = true;
  spinButton2.disabled = true;
  let countdownDiv = document.getElementById("countdown");
  let remainingTime = duration; // Tiempo restante en segundos
  const timer = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    // Mostrar el tiempo en formato mm:ss
    countdownDiv.textContent = `time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (remainingTime <= 0) {
      clearInterval(timer); // Detener el temporizador cuando llegue a 0
      countdownDiv.textContent = "¡Fertig!";
      spinButton1.disabled = false;
      spinButton2.disabled = false;
    } else {
      remainingTime--;
    }
  }, 1000);
}