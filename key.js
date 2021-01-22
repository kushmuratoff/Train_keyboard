var canvas = document.getElementById("canvas");
var polya = canvas.getContext("2d");
var suz_u = 1;
var suzlar = [];
var sonlar = [];
var suzlar1 = [];
var ind = 0;
var n=0;
var kk = canvas.width;
var t_b=0;
var n_b=0;
var belgilanganlari = 0;
var tugash = 0;
var natija = 0;
document.getElementById("uzunlik").style.color = "red";
document.addEventListener("keydown", keylar);
function game()
{

   // document.getElementById("box1").style.styleFloat = "left";
    //document.getElementById("box").style.marginLeft = "90%";
    //document.getElementById("box1").style.marginTop = "-5px";

  //  $("#not").css({lef })
    //$("#not").animate({ left: "-=460" }, 2200);
    //$("#not1").animate({ left: "+=150" }, 1800);
    //natija = 1;
    //document.getElementById("not").innerHTML = n_b + "  ta";
    //document.getElementById("not1").innerHTML = "Noto'g'ri bosilganlar soni:";
    natija = 0;
    tugash = 0;
    t_b = 0; n_b = 0;
    boshlash();
}
function keylar(keyy)
{
    if (keyy.keyCode == 109) {
        mn();
    }
    if (keyy.keyCode == 107) {
        pl();
    }
   // alert(keyy.keyCode);
    if (keyy.keyCode == 113)
    {
        game();
       
    }
    else if(canvas.width - kk > n * 40){
     if (keyy.keyCode == sonlar[ind]) {
       
        t_b++;
            belgilanganlari += 1;

            suzlar1.push(suzlar[0]);
            var vaq = [], len = 0;
            len = suzlar.length;
            vaq = new Array(len - 1);
            for (i = 0; i < len - 1; i++) {
                vaq[i] = suzlar[i + 1];
            }
            len -= 1;
            suzlar = new Array(len);
            for (i = 0; i < len; i++) {
                suzlar[i] = vaq[i];
            }            
            ind++;
      }
      else {
          n_b++;
     }
    }
    }

function pl()
{
    suz_u += 1;
    document.getElementById("uzunlik").innerHTML = suz_u;
}
function mn() {
    
    if (suz_u > 1)
    {
        suz_u -= 1;
        document.getElementById("uzunlik").innerHTML = suz_u;
    }
    else {
        document.getElementById("uzunlik").innerHTML = 1;
    }
}
function boshlash()
{
    belgilanganlari = 0;
     n = Math.floor(Math.random() * suz_u) + 1;
     suzlar = Array(n);
     sonlar = Array(n);
     suzlar1 = Array(0);
     ind = 0;
   // alert(String.fromCharCode(90));
    for(var i=0;i<n;i++)
    {
        
        var raq = (Math.floor(Math.random() * 26) + 65);
        suzlar[i] = (String.fromCharCode(raq));
        sonlar[i] = raq;

    }
    kk = canvas.width;
   // alert(sonlar);
    
}
function yuza()
{
   
    polya.beginPath();
    polya.rect(0, 0, canvas.width, canvas.height);
    polya.fillStyle = "pink";
    polya.fill();
    polya.closePath();
    polya.beginPath();
    polya.font = "50px Elaphant";
    //polya.fillText("salom", 300, 300);
    
    polya.fill();
    polya.fillStyle = "red";

    var aa = 0;
    if (kk +40*belgilanganlari< 0) {
        if (n >ind && n!=0)
        {
           // polya.fillText("GAME OVER", 400, canvas.height / 2);
            tugash = 1;
            
        }
        if (n != 0)
        { boshlash(); }
        
    }
    for (var i = 0; i < suzlar1.length; i++) {
        polya.fillText(suzlar1[i], kk + aa, canvas.height / 2);
        aa += 40;
    }
    polya.fillStyle = "green";

    for (var i = 0; i < suzlar.length; i++) {
        polya.fillText(suzlar[i],kk+aa, canvas.height/2);
        aa += 40;
    }
    kk -= 4;
    
    ////if (n > 1)
    //{ kk -= 28; }
    polya.closePath();
    if(n==ind && n!=0)
    {
        boshlash();
        //alert("tugadi");
    }
}

function vaqt_ish()
{
    if (tugash == 0)
    { yuza(); }
    else
    {
        polya.beginPath();
        polya.rect(0, 0, canvas.width, canvas.height);
        polya.fillStyle = "pink";
        polya.fill();       
        polya.font = "80px Elaphant";
        polya.fill();
        polya.fillStyle = "red";
        polya.fillText("GAME OVER", 400, canvas.height / 2);
        polya.closePath();
        if (natija == 0)
        {
            $("#box").animate({ left: "-=500" }, 1900);
            $("#box1").animate({ left: "+=200" }, 2000);
            natija = 1;
            document.getElementById("box").innerHTML = t_b+"  ta";
            document.getElementById("box1").innerHTML = "To'g'ri bosilganlar soni:";
            $("#not").animate({ left: "-=460" }, 2200);
            $("#not1").animate({ left: "+=150" }, 1800);
            natija = 1;
            document.getElementById("not").innerHTML = n_b + "  ta";
            document.getElementById("not1").innerHTML = "Noto'g'ri bosilganlar soni:";

           // alert(t_b);
        }
    }
    
}


setInterval(vaqt_ish, 50);




