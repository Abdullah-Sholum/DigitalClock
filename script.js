setInterval(showTime, 1000);    //panggil fungsi dengan interval 1000ms

function showTime() {  //buat fungsi showTime
    let time = new Date();      //inisiasi time dengan fungsi js untuk menampilkan waktu
    let hour = time.getHours(); //ambil jam dari time
    let min = time.getMinutes();    //ambil menit dari time
    let sec = time.getSeconds();    //ambil detik dari time
    am_pm = "AM";

    if (hour >= 12) {   //buat kondisi ketika jam lebih dari sama dengan 12
        if (hour > 12) hour -= 12;  //jika hour > 12, kurangi hour dengan 12 
        am_pm = "PM";       //atur am_pm dengan string PM
    } else if (hour == 0) {         //sebaliknya, jika hour samadengan 0
        hr = 12;                    //inisiasi hr dengan 12
        am_pm = "AM"                //inisiasi am_pm dengan string 'AM'
    }
    hour =    //inisiasi dengan
    /*dibawah merupakan operator ternary / opsional merupakan cara singkat menulis kondisi if else
    dengan penulisan 
    kondisi ? ekspresi1 : ekspresi2 */
        hour < 10 ? "0" + hour : hour;   //jika hour kurang dari 10 maka tambahkan string 0 didepan, jika false maka hour tetap hour
    min = min < 10 ? "0" + min : min;    //min kurang dari 10, maka tambah string 0 didepannya, jika kondisi tidak terpenuhi tetap pakai min
    sec = sec < 10 ? "0" + sec : sec;    //sec sec kurang dari 10, maka tambah string 0 didepannya, jika kondisi tidak terpenuhi tetap pakai sec
    
    let currentTime =   //deklarasikan penulisan currentTime dengan format hour : min : sec : am_pm
        hour +  
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    document.getElementById("clock").innerHTML = currentTime;       //ambil elemen dengan id clock, kemudian merubah konten html dengan id clock dengan currentTime
}

showTime();

