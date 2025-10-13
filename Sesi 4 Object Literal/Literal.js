const film ={
    judul: "Interstellar",
    tahunRilis: 2014,
    sutradara: "Christopher Nolan",
    genre: ["Sci-Fi", "Adventure", "Drama"],

    tampilkanDetail: function() {
        return `
    Detail Film
    -----------------------
    judul     : ${this.judul}
    Tahun Rilis: ${this.tahunRilis}
    Sutradara  : ${this.sutradara}
    Genre      : ${this.genre.join(" , ")}`;
    }
};

console.log("-- Mengakses Properti Secara Langsung ---");
console.log("Sutradara:", film.sutradara);
console.log("Genre Kedua:", film.genre[1]);
console.log("\n--- Hasil Pemanggilan Method ---");

console.log(film.tampilkanDetail());