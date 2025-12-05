

const films = {
    ironman: {
        title: "რკინის კაცი",
        year: "2008",
        desc: "მილიარდერი ტონი სტარკი გახდა რკინის კაცი, რათა კაცობრიობა დაეცვა ბოროტი ძალებისგან."
    },
    badboys2: {
        title: "ცუდი ბიჭები 2",
        year: "2003",
        desc: "დეტექტივები მაიკა და მარკუსი დაბრუნდნენ რათა ებრძოლონ ნარკოკარტელს მაიამის ქუჩებში."
    },
    terminator2: {
        title: "ტერმინატორი 2",
        year: "1991",
        desc: "სიბერისა და მომავლის ბრძოლა: რობოტი უნდა დაიცვას ჯონ კონორის მომავალი."
    },
    kidnapping60: {
        title: "გატაცება 60 წამში",
        year: "2000",
        desc: "ჯარიმა და მძარცველები შეხმატკბილებულად ცდილობენ მანქანის გატაცებას ერთ საათში."
    }
};

function showFilmDetails(id) {
    const film = films[id];
    if (!film) return;

    document.getElementById("filmTitle").innerText = film.title;
    document.getElementById("filmYear").innerText = film.year;
    document.getElementById("filmDesc").innerText = film.desc;

    document.getElementById("filmInfo").style.display = "block";
}

function closeFilmInfo() {
    document.getElementById("filmInfo").style.display = "none";
}
