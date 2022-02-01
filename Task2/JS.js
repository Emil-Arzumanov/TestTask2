/** Plus button Func **/

function addOrDeleteFromCalendar() {
    if (this.id === "added") {
        this.querySelector(".plusImage").src = "imgs/plus.png";
        this.querySelector(".plusTopImage").src = "imgs/plusHover.png";
        this.id = "";
    } else {
        this.querySelector(".plusImage").src = "imgs/addedPlus.png";
        this.querySelector(".plusTopImage").src = "imgs/addedPlusHover.png";
        this.id = "added";
    }
}

document.querySelectorAll(".plus").forEach(plusButton => {
    plusButton.addEventListener("click", addOrDeleteFromCalendar);
});

function addOrDeleteFromCalendarListVersion() {
    if (this.querySelector(".buttonDiv__button__plus").id === "added") {
        this.className = "buttonDiv__button";
        this.querySelector(".plusImage").src = "imgs/plusHover.png";
        this.querySelector(".plusTopImage").src = "imgs/plusHover.png";
        this.querySelector(".buttonDiv__button__plus").id = "";
        this.querySelector(".buttonDiv__button__span").innerHTML = "Добавить";
    } else {
        this.className += " buttonDiv__buttonAdded";
        this.querySelector(".plusImage").src = "imgs/addedPlus2.png";
        this.querySelector(".plusTopImage").src = "imgs/addedPlusHover2.png";
        this.querySelector(".buttonDiv__button__plus").id = "added";
        this.querySelector(".buttonDiv__button__span").innerHTML = "Добавлено";
    }
    console.log(this.querySelector(".plusImage").src);
}

document.querySelectorAll(".buttonDiv__button").forEach(plusButton => {
    plusButton.addEventListener("click", addOrDeleteFromCalendarListVersion);
});

function addOrDeleteFromCalendarSmallListVersion() {
    if (this.querySelector(".buttonDivBottom__button__plus").id === "added") {
        this.className = "buttonDivBottom__button";
        this.querySelector(".plusImage").src = "imgs/plusHover.png";
        this.querySelector(".plusTopImage").src = "imgs/plusHover.png";
        this.querySelector(".buttonDivBottom__button__plus").id = "";
        this.querySelector(".buttonDivBottom__button__span").innerHTML = "Добавить";
    } else {
        this.className += " buttonDivBottom__buttonAdded";
        this.querySelector(".plusImage").src = "imgs/addedPlus2.png";
        this.querySelector(".plusTopImage").src = "imgs/addedPlusHover2.png";
        this.querySelector(".buttonDivBottom__button__plus").id = "added";
        this.querySelector(".buttonDivBottom__button__span").innerHTML = "Добавлено";
    }
    console.log(this.querySelector(".plusImage").src);
}

document.querySelectorAll(".buttonDivBottom__button").forEach(plusButton => {
    plusButton.addEventListener("click", addOrDeleteFromCalendarSmallListVersion);
});

/** listDay__timeAndDescription__description button func **/

document.querySelector(".programButton").addEventListener("click", function () {
    console.log(this.classList[1] == "active");
    if (this.classList[1] == "active") {
        document.querySelector(".listDay__timeAndDescription__description__ol").style.display = "none";
        this.className = "programButton";
    } else {
        document.querySelector(".listDay__timeAndDescription__description__ol").style.display = "block";
        this.className += " active";
    }
});

/** From table to list func **/

document.querySelector(".header__button").addEventListener("click", function () {
    if (this.id == "activeProgramIsList") {
        document.querySelector(".exhibitionProgramTable").style.display = "block";
        document.querySelector(".exhibitionProgramList").style.display = "none";
        this.innerHTML = "Вид расписания: Таблица";
        this.id = "activeProgramIsTable";
    } else if ("activeProgramIsTable") {
        document.querySelector(".exhibitionProgramTable").style.display = "none";
        document.querySelector(".exhibitionProgramList").style.display = "block";
        this.innerHTML = "Вид расписания: Список";
        this.id = "activeProgramIsList";
    }
})

/****/

let speakersArray = [
    {
        name: "Алексей Венгин",
        company: "Profi.Travel",
        imgSrc: "imgs/speaker1.png"
    },
    {
        name: "Магдалена Круч",
        company: "Польская туристическая организация в Москве",
        imgSrc: "imgs/speaker2.png"
    },
    {
        name: "Сергей Молдован",
        company: "LIVE RIGA",
        imgSrc: "imgs/speaker3.png"
    },
    {
        name: "Ян Кац",
        company: "Венгерская национальная управления по туризму",
        imgSrc: "imgs/speaker4.png"
    },
    {
        name: "Георгий Мавроматис",
        company: "Греческая Национальной Туристической Организации",
        imgSrc: "imgs/speaker5.png"
    }
];

function drawSpeakers(newSpeakerIndex, usingButton = false) {
    speakersArray.forEach(function (speakerObj, index) {
        if (index == newSpeakerIndex && usingButton) {
            document.querySelector(".listDay__scrollBar").children[0].remove();
            let div = document.createElement("div");
            div.className = "speakerDiv";
            let img = document.createElement("img");
            img.src = speakerObj.imgSrc;
            let textDiv = document.createElement("div");
            textDiv.className = "speakerDescriptionDiv";
            let h4 = document.createElement("h4");
            h4.innerHTML = speakerObj.name;
            let p = document.createElement("p");
            p.innerHTML = speakerObj.company
            document.querySelector(".listDay__scrollBar").append(div);
            div.append(img);
            div.append(textDiv);
            textDiv.append(h4);
            textDiv.append(p);
        } else if (usingButton == false) {
            let div = document.createElement("div");
            div.className = "speakerDiv";
            let img = document.createElement("img");
            img.src = speakerObj.imgSrc;
            let textDiv = document.createElement("div");
            textDiv.className = "speakerDescriptionDiv";
            let h4 = document.createElement("h4");
            h4.innerHTML = speakerObj.name;
            let p = document.createElement("p");
            p.innerHTML = speakerObj.company
            document.querySelector(".listDay__scrollBar").append(div);
            div.append(img);
            div.append(textDiv);
            textDiv.append(h4);
            textDiv.append(p);
        }
    });
}

drawSpeakers()
let newSpeakerIndex = 0;
document.querySelector("#scrollBarButton").addEventListener("click", function () {
    if (newSpeakerIndex == 5) {
        newSpeakerIndex = 0;
    }
    drawSpeakers(newSpeakerIndex, true);
    newSpeakerIndex++;
});