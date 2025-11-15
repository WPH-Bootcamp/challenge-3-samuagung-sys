// code here, goodluck!!
"use strict";

const prompt = require("prompt-sync")();

function calculation(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    if (b === 0) return "Error: Division by zero!";
    return a / b;
  } else {
    return "Operator tidak dikenali";
  }
}

// Fungsi untuk Analisis Hasil
function analyzeResult(result) {
  console.log("\n=== Data Analysis ===");

  // 1. Cek tipe data hasil
  console.log(`Tipe data hasil: ${typeof result}`);

  // 2. Jika hasil berupa angka
  if (typeof result === "number") {
    // Positif / Negatif / Nol
    if (result > 0) console.log("✅ Angka ini positif");
    else if (result < 0) console.log("⚠️ Angka ini negatif");
    else console.log("⚪ Angka ini nol");

    // Integer / Float
    console.log(
      Number.isInteger(result)
        ? "🔹 Termasuk bilangan bulat (integer)"
        : "🔸 Termasuk bilangan pecahan (float)"
    );

    // Genap / Ganjil (pakai ternary)
    console.log(result % 2 === 0 ? "🟢 Genap" : "🟣 Ganjil");

    // Gabungan kondisi pakai logical operator
    if (result > 0 && result % 2 === 0) {
      console.log("🌟 Angka ini positif DAN genap");
    } else if (result < 0 || result === 0) {
      console.log("⚙️ Angka ini negatif atau nol");
    }

    // 3. Jika hasil string (misal error message)
  } else if (typeof result === "string") {
    console.log(`⚠️ ${result}`);

    // 4. Jika hasil undefined
  } else {
    console.log(
      result ?? "❌ Result is undefined or null, something went wrong!"
    );
  }

  console.log("======================\n");
}

// Program utama
console.log("=== Program Kalkulator Sederhana ===");

while (true) {
  const a = Number(prompt("Masukkan angka pertama: "));
  const b = Number(prompt("Masukkan angka kedua: "));
  const operator = prompt("Masukkan operator (+, -, *, /): ");

  if (isNaN(a) || isNaN(b)) {
    console.log("❌ Input tidak valid! Masukkan angka.");
    continue;
  }

  const hasil = calculation(a, b, operator);
  console.log(`Hasil: ${hasil}`);

  // Fungsi Analisis hasil
  analyzeResult(hasil);

  const lagi = prompt("Hitung lagi? (ya/tidak): ").toLowerCase();
  if (lagi === "tidak") break;
}
