document.getElementById("en").addEventListener("click", changeLngEn);
document.getElementById('ita').addEventListener("click", changeLngIta);
var greeting = document.querySelector('#hi');
var mid = document.getElementById('mid');
var parone = document.querySelector("#par1");
var partwo = document.querySelector("#par2");
var parthree = document.querySelector("#par3");
var partfour = document.querySelector("#par4");
var partfive = document.querySelector("#par5");
var languages = document.querySelector("#lngslist");
var mainlanguages = document.querySelector("#mainlngs");
var english = document.querySelector("#enlng");
var codinglist = document.querySelector("#codinglist");
var skills = document.querySelector("#skills");
var skone = document.querySelector("#sk1");
var sktwo = document.querySelector("#sk2");
var skthree = document.querySelector("#sk3");
var tools = document.querySelector("#tools");
var projectstitle = document.querySelector("#projectstitle");
var mobileMatch = window.matchMedia("(max-width: 480px)");
function changeLngEn() {
  greeting.innerHTML = "Hi! I'm Igor"
  mid.innerHTML = "A web and app developer"
  parone.innerHTML = "Building website is a hobby i have since i was 15 years old. My first website i've built was for a sturtup, during that period i didnt knew how to code. Wix and WordPresss were my first softwares i used in order to learn how to make a website. Unfortunately due to private issues like my school studies and other reasons, i had to suspend my projects."
  partwo.innerHTML = "For now, i'm learning the main programming languages that are used to build webistes.(html, CSS, php, MySQL, Js)."
  parthree.innerHTML = "My main goal is to get as much experience as possible and to build a career in order to become an professional web dev."
  partfour.innerHTML = "I'm a very social person and i love being a part of a team."
  partfive.innerHTML = "I'm open to work."
  languages.innerHTML = "Languages i speak"
  mainlanguages.innerHTML = "Native language: Italian and Russian."
  english.innerHTML = "English: expert."
  codinglist.innerHTML = "Coding languages"
  skills.innerHTML = "Skills"
  skone.innerHTML = "Fast learner"
  sktwo.innerHTML = "I also build apps (Android, iOS and HTML5)"
  skthree.innerHTML = "E-commerce knowledge (Shopify, WooCommerce, AmazonFBA)"
  tools.innerHTML = "Tools"
  projectstitle.innerHTML = "Websites and apps i've built:"
};
if (mobileMatch.matches) {
  greeting.style.cssText = "color: black; font-family: 'GlacialIndifferenceRegular'; font-size: 5vw"
};
function changeLngIta() {
  greeting.innerHTML = "Ciao! Mi chiamo Igor."
  mid.innerHTML = "Sviluppo siti web ed app."
  parone.innerHTML = "Sviluppare siti web e app è la mia passione da quando ho 15 anni. Il mio primo sito era per una startup di medicina, durante quel periodo non sapevo usare linguaggi di programmazione. Wix e WordPresss erano i primi software con i quali ho iniziato a studiare la mia passione. Purtroppo, a causa degli studi e altri motivi personali, ho dovuto sospendere i miei progetti."
  partwo.innerHTML = "Attualmente sto studiando i linguaggi principali che vengono usati per siti web(html, CSS, php, MySQL, Js)."
  parthree.innerHTML = "Sono una persona seria con tanta voglia di lavorare e fare più esperienza possibile in questo campo lavorativo con l'obiettivo di diventare un espero e creare una carriera."
  partfour.innerHTML = "Mi piace comunicare con le persone ed aumentare le mie conoscenze e abilità in modo costante."
  partfive.innerHTML = "Sono disponibile a lavorare."
  languages.innerHTML = "Lingue"
  mainlanguages.innerHTML = "Madrelingua: Italiano e Russo."
  english.innerHTML = "Inglese: esperto."
  codinglist.innerHTML = "Linguaggi di programmazione"
  skills.innerHTML = "Abilità"
  skone.innerHTML = "Veloce ad imparare"
  sktwo.innerHTML = "Sviluppo app (Android, iOS e HTML5)"
  skthree.innerHTML = "Conoscenza E-commerce (Shopify, WooCommerce, AmazonFBA)"
  tools.innerHTML = "Strumenti che uso"
  projectstitle.innerHTML = "Siti web e app che ho sviluppato:"
};
