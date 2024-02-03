// Jangan sentuh code disini
function TentukanLuasDanKelilingBelahKetupat(s, d1, d2) {

    // declare variable
    const sisi = s;
    const diagonal1 = d1;
    const diagonal2 = d2;
 
    // TODO: buat logic dibawah sini dimana sisinya adalah 5, diagonal 1-nya adalah 8, dan diagonal 2-nya adalah 7
  
    // logic penghitungan luas dan keliling belah ketupat
    var luas = 0.5 * d1 *d2;
    var kel = 4 *s;
  
    // menampilkan hasil
    console.log("Sisi belah ketupat:", sisi, "cm");
    console.log("Diagonal 1 belah ketupat:", diagonal1, "cm");
    console.log("Diagonal 2 belah ketupat:", diagonal2, "cm")
  
    console.log("Jadi luas belah ketupat : ",luas, "dan kelilingnya : ",kel);
    
  }
  
  //pemanggilan fungsi
  TentukanLuasDanKelilingBelahKetupat(5, 8, 7);