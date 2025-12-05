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
        document.getElementById("movieImage").src = movie.img;
        document.getElementById("movieTitle").textContent = movie.title;
        document.getElementById("movieYear").textContent = movie.year;
        document.getElementById("movieGenre").textContent = movie.genre;
        document.getElementById("movieDescription").textContent = movie.description;
    }
});
