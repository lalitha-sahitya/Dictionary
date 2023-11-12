const inputEl = document.getElementById("input");
const textEl = document.getElementById("info-text");
const meaningEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meanEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
const phoneticEl = document.getElementById("phonetic");
const partsofspeechEl = document.getElementById("pos");

async function fetchAPI(word){
    textEl.innerText=`Searching for "${word}"....`;
    textEl.style.display="block";
    meaningEl.style.display="none";
    const apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result =await fetch(apiUrl);
    const data =await result.json();
    console.log(data);
    textEl.style.display="none";
    meaningEl.style.display="block";
    titleEl.innerText=`${word}`;
    meanEl.innerText=data[0].meanings[0].definitions[0].definition;
    phoneticEl.innerText=data[0].phonetic;
    partsofspeechEl.innerText=data[0].meanings[0].partOfSpeech;
    for(i=0;i<=2;i++){
    audioEl.src=data[0].phonetics[i].audio;
    }
}

inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value);
    }
});
