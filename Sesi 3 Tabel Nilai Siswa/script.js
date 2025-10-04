 // Data yang diketahui: nama, tugas, uts, dan uas
const nama = ["Asep", "Iwan", "Cepi", "Agus", "Dadang"];
const tugas = [80, 75, 70, 65, 60];
const uts = [95, 75, 80, 40, 70];
const uas = [85, 90, 90, 55, 60];

// Rumus Nilai Akhir (NA)
// na = 40% tugas + 30% uts + 30% uas

/**
 * Fungsi untuk menghitung Nilai Akhir (NA)
 * @param {number} nilaiTugas
 * @param {number} nilaiUts
 * @param {number} nilaiUas
 * @returns {number} Nilai Akhir (dibulatkan ke 1 tempat desimal)
 */
function hitungNilaiAkhir(nilaiTugas, nilaiUts, nilaiUas) {
    // Menghitung NA sesuai rumus
    const na = (0.40 * nilaiTugas) + (0.30 * nilaiUts) + (0.30 * nilaiUas);
    
    // Membulatkan hasil ke satu desimal
    return parseFloat(na.toFixed(1));
}

// 1. Membuat array untuk menyimpan Nilai Akhir (NA)
const naArray = [];
for (let i = 0; i < nama.length; i++) {
    const na = hitungNilaiAkhir(tugas[i], uts[i], uas[i]);
    naArray.push(na);
}


// 2. Fungsi untuk membuat dan menampilkan tabel
function tampilkanTabelNilai() {
    // Mendapatkan elemen container di HTML
    const container = document.getElementById('tabel-nilai-container');
    
    // Membuat elemen tabel
    const table = document.createElement('table');
    
    // Membuat header tabel
    const header = table.createTHead();
    const headerRow = header.insertRow();
    const headers = ["NO", "NAMA SISWA", "TUGAS", "UTS", "UAS", "NA"];
    
    headers.forEach(text => {
        let th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    
    // Membuat body tabel
    const body = table.createTBody();
    
    // Mengisi baris data
    for (let i = 0; i < nama.length; i++) {
        const row = body.insertRow();
        
        // NO
        let cellNo = row.insertCell();
        cellNo.textContent = i + 1;
        
        // NAMA SISWA
        let cellNama = row.insertCell();
        cellNama.textContent = nama[i];
        cellNama.classList.add('text-left'); // Tambahkan class untuk rata kiri

        // TUGAS
        let cellTugas = row.insertCell();
        cellTugas.textContent = tugas[i];
        
        // UTS
        let cellUts = row.insertCell();
        cellUts.textContent = uts[i];
        
        // UAS
        let cellUas = row.insertCell();
        cellUas.textContent = uas[i];
        
        // NA (Nilai Akhir)
        let cellNa = row.insertCell();
        cellNa.textContent = naArray[i]; // Menggunakan nilai yang sudah dihitung
    }
    
    // Menambahkan tabel ke container
    container.appendChild(table);
}

// Memanggil fungsi untuk menampilkan tabel saat script dimuat
tampilkanTabelNilai();