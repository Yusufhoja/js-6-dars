
var foydalanuvchiTanlash = parseInt(prompt("1:qogoz, 2:qaychi, 3:quduq raqamidan birini tanlang:"));

var foydalanuvchiHarakati = "";

var kompyuterRaqami = Math.floor(Math.random() * 3) + 1;

if (foydalanuvchiTanlash === 1) {
    foydalanuvchiHarakati = "qog'oz";
} else if (foydalanuvchiTanlash === 2) {
    foydalanuvchiHarakati = "qaychi";
} else if (foydalanuvchiTanlash === 3) {
    foydalanuvchiHarakati = "quduq";
}

var kompyuterHarakati = "";
if (kompyuterRaqami === 1) {
    kompyuterHarakati = "qog'oz";
} else if (kompyuterRaqami === 2) {
    kompyuterHarakati = "qaychi";
} else if (kompyuterRaqami === 3) {
    kompyuterHarakati = "quduq";
}


alert("Siz " + foydalanuvchiHarakati + " tanladingiz. \nKompyuter " + kompyuterHarakati + " tanladi.");


if (foydalanuvchiTanlash === kompyuterRaqami) {
    alert("Durrang!");
} else if ((foydalanuvchiTanlash === 1 && kompyuterRaqami === 2) || 
           (foydalanuvchiTanlash === 2 && kompyuterRaqami === 3) || 
           (foydalanuvchiTanlash === 3 && kompyuterRaqami === 1)) {
    alert("Kompyuter yutdi!");
} else {
    alert("Siz yutdingiz!");
}
