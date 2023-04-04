const fromText = document.querySelector(".from-text"),
    toText = document.querySelector(".to-text"),
    exchageIcon = document.querySelector(".exchange"),
    selectTag = document.querySelectorAll("select"),
    icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),

    selectTag.forEach((tag, id) => {
        for (let country_code in countries) {
            let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
            let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
            tag.insertAdjacentHTML("beforeend", option);
        }
    });

exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
        tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
    if (!fromText.value) {
        toText.value = "";
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
    if (!text) return;
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if (data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
});

icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return;
        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            if (target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});


let textContainer = document.querySelector(".from-text");
let deleteKey = document.querySelector(".delete");
let enterKey = document.querySelector(".enter");
let spaceKey = document.querySelector(".space");
let capsLock = document.querySelector(".capslock");
let allKey = document.querySelectorAll(".key");
let isCaps = false;

deleteKey.addEventListener("click", function () {
    let textContainerContent = textContainer.innerHTML;
    if (textContainerContent.length == 0) {
        return;
    }
    console.log(textContainerContent);
    let newContent = textContainerContent.slice(0, textContainerContent.length - 1);
    textContainer.innerHTML = newContent;
})

enterKey.addEventListener("click", function () {
    let content = textContainer.innerHTML;
    let newContent = content + "\n";
    textContainer.innerHTML = newContent;
})

spaceKey.addEventListener("click", function () {
    let content = textContainer.innerHTML;
    let newContent = content + '\u00A0';
    textContainer.innerHTML = newContent;
})

capsLock.addEventListener("click", function () {
    if (isCaps) {
        capsLock.classList.remove("active");
        for (let key of allKey) {
            if (key.classList.contains("delete") || key.classList.contains("enter") ||
                key.classList.contains("space") || key.classList.contains("capslock")) {
                //nothing
            } else
                key.innerHTML = key.innerHTML.toLowerCase();
        }
    } else {
        capsLock.classList.add("active");
        for (let key of allKey) {
            if (key.classList.contains("delete") || key.classList.contains("enter") ||
                key.classList.contains("space") || key.classList.contains("capslock")) {
                //nothing
            } else
                key.innerHTML = key.innerHTML.toUpperCase();
        }
    }
    isCaps = !isCaps
})

for (let key of allKey) {
    key.addEventListener("click", function () {
        if (key.classList.contains("delete") || key.classList.contains("enter") ||
            key.classList.contains("space") || key.classList.contains("capslock")) {
            return;
        }
        textContainer.innerHTML += key.innerHTML;
    })
}

