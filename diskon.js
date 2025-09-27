function hitungHargaAkhir(totalBelanja) {
    let diskon = 0;

    if (totalBelanja > 1000000) {
        diskon = 0.15;
    } else if (totalBelanja > 50000) {
        diskon = 0.10;
    }
    const hargaAkhir = totalBelanja - (totalBelanja * diskon);
    return hargaAkhir;
}


console.log("Total belanja Rp1.200.000, bayar: Rp" + hitungHargaAkhir(1200000));
console.log("Total belanja Rp750.000, bayar: Rp" + hitungHargaAkhir(750000));
console.log("Total belanja Rp400.000, bayar: Rp" + hitungHargaAkhir(400000));