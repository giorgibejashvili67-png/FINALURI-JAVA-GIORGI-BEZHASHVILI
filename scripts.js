/* ===== slider.js ===== */
class Slider {
    constructor(sliderId, interval = 3000) {
        this.slider = document.getElementById(sliderId);
        if (!this.slider) return;
        this.slides = this.slider.querySelectorAll(".slide");
        this.index = 0;
        this.showSlide(this.index);
        this.start(interval);
    }

    showSlide(i) {
        this.slides.forEach(slide => slide.classList.remove("active"));
        this.slides[i].classList.add("active");
    }

    nextSlide() {
        this.index = (this.index + 1) % this.slides.length;
        this.showSlide(this.index);
    }

    start(interval) {
        setInterval(() => this.nextSlide(), interval);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("siteSlider")) {
        new Slider("siteSlider");
    }
});

/* ===== burger.js ===== */
const _attachBurger = () => {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("navMenu");
    if (!burger || !nav) return;
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
        burger.classList.toggle("active");
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _attachBurger);
} else {
    _attachBurger();
}

/* ===== app.js (film popup / shared) ===== */
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
    },
    avatar2: {
        title: "ავატარი 2",
        year: "2023",
        desc: "ჯეიკ სული კაი შევიდა პანდორის სამყაროში გადარჩენის მისიისთვის."
    },
    captainamerica: {
        title: "კაპიტანი ამერიკა",
        year: "2011",
        desc: "სტივ როჯერსი, რომელმაც მიიღო ამერიკის გმირის სახელი, გვეხმარება სამყაროს გადასარჩენად."
    },
    avengers1: {
        title: "შურისმაძიებლები 1",
        year: "2012",
        desc: "გაერთიანებული გმირები ბრძოლაში ბოროტების წინააღმდეგ — დასაწყისი ეპიკური სერიისა."
    },
    fast5: {
        title: "ფორსაჟი 5",
        year: "2011",
        desc: "დომი, ბრაიანი და დანარჩენი გუნდი იღებენ რისკებს, რათა განაგრძონ თავგადასავალი."
    }
};

function showFilmDetails(id) {
    const film = films[id];
    if (!film) return;

    const filmTitleEl = document.getElementById("filmTitle");
    const filmYearEl = document.getElementById("filmYear");
    const filmDescEl = document.getElementById("filmDesc");
    const filmInfoEl = document.getElementById("filmInfo");
    const filmOverlayEl = document.getElementById("filmOverlay");
    if (filmTitleEl) filmTitleEl.innerText = film.title;
    if (filmYearEl) filmYearEl.innerText = film.year;
    if (filmDescEl) filmDescEl.innerText = film.desc;
    if (filmInfoEl) filmInfoEl.style.display = "block";
    if (filmOverlayEl) filmOverlayEl.style.display = "block";
}

function closeFilmInfo() {
    const filmInfoEl = document.getElementById("filmInfo");
    const filmOverlayEl = document.getElementById("filmOverlay");
    if (filmInfoEl) filmInfoEl.style.display = "none";
    if (filmOverlayEl) filmOverlayEl.style.display = "none";
}

if (document.getElementById("filmOverlay")) {
    document.getElementById("filmOverlay").addEventListener("click", closeFilmInfo);
}

/* ===== movie.js ===== */
const movies = [
    {id:1, title:"Interstellar", year:2014, genre:"დრამა • საბავშვო • სამეცნიერო ფანტასტიკა", description:"ფილმი ადამიანის ცნობისმოყვარეობისა და კოსმოსური მოგზაურობის შესახებ.", img:"img/m1.jpg"},
    {id:2, title:"Inception", year:2010, genre:"თრილერი • ფანტასტიკა • ექსპერიმენტული", description:"ფილმი მოგზაურობის შესახებ ადამიანის სიზმრებში.", img:"img/m2.jpg"},
    {id:3, title:"The Dark Knight", year:2008, genre:"ექშენი • თრილერი • დრამა", description:"ბეთმენი ებრძვის კრიმინალებს გოთემში.", img:"img/m3.jpg"}
];

function getMovieById(id) {
    return movies.find(m => m.id === id);
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const movie = getMovieById(id);
    if(movie) {
        const movieImage = document.getElementById("movieImage");
        const movieTitle = document.getElementById("movieTitle");
        const movieYear = document.getElementById("movieYear");
        const movieGenre = document.getElementById("movieGenre");
        const movieDescription = document.getElementById("movieDescription");
        if (movieImage) movieImage.src = movie.img;
        if (movieTitle) movieTitle.textContent = movie.title;
        if (movieYear) movieYear.textContent = movie.year;
        if (movieGenre) movieGenre.textContent = movie.genre;
        if (movieDescription) movieDescription.textContent = movie.description;
    }
});

/* ===== contact.js ===== */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("contactMsg");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const surname = document.getElementById("surname").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || surname === "" || email === "" || message === "") {
            if (msg) {
                msg.textContent = "გთხოვთ, შეავსოთ ყველა ველი!";
                msg.style.color = "red";
            }
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if(!emailRegex.test(email)) {
            if (msg) {
                msg.textContent = "გთხოვთ, შეიყვანოთ სწორი ელ.ფოსტა!";
                msg.style.color = "red";
            }
            return;
        }

        console.log({name, surname, email, message});
        if (msg) {
            msg.textContent = "შეტყობინება წარმატებით გაიგზავნა!";
            msg.style.color = "green";
        }

        form.reset();
    });
});

// ===== Login Handler =====
function handleLogin(event) {
    if (event) event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("loginMsg");

    if (username === "" || password === "") {
        if (msg) {
            msg.textContent = "გთხოვთ, შეავსოთ ყველა ველი!";
            msg.style.color = "red";
        }
        return;
    }

    if (msg) {
        msg.textContent = "წარმატებით შეხვედით!";
        msg.style.color = "green";
    }

    setTimeout(() => {
        if (msg) msg.textContent = "";
    }, 3000);
}
