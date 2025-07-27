let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
// To speak what is given
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB" // to change the voice from male to female
    window.speechSynthesis.speak(text_speak)
}


// speaking purpose
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

// taking command
function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello" || "hai")) {
        speak("hello sir , how can i help you")
    }
    else if (message.includes("who are you")) {
        speak("I am yantrika , a vitual assistant created by vivek kumar ");
    }

    else if (message.includes("who is my sister")) {
        speak("You have three sisters named paridhi, aaradhya and priyal")
    }
    else if (message.includes("who is ankit")) {
        speak("alpha the aura baby  is your younger brother..passionate to acquire knowledge continuosly");
        }
    else if (message.includes("babu kaun hai")) {
        speak("samarth baabua  hai. wo baahutt achaa ladka hai , apna homework complete kar liya hai");
    }
    else if (message.includes("thanks")) {
        speak("welcome sir . Have a nice day")
    }
    else if (message.includes("open youtube")) {
        speak("opening youtube.....")
        window.open("https://www.youtube.com")
    }
    else if (message.includes("open google")) {
        speak("opening google.....")
        window.open("https://www.google.com")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp.....")
        window.open("whatsapp://")
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator.....")
        window.open("calculator://")
    }
    else if (message.includes("who is my roommate")) {
        speak("dharamveer is your roommate, he is a good boy, he stays with you in your pg and is very sincere but laZy")
        window.open("calculator://")
    }
   

        else {
        let finaltext = "This is what i found on internet regarding" + message.replace("yantrika", "") || message.replace("Yantrika", "")
        speak(finaltext)
        window.open(https://www.google.com/search?q=${message.replace("yantrika", "")})
    }
}