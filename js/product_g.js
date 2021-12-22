



var product = {
    "Gundam" : 
    {   type : "gundam",
        data : [
      {
        "name" : "RG MS-06S-ZAKU II",
        "image" : "assets/Ms-06s-rg-box.jpg",
        "desc" : "Bandai 2010 Skala Real Grade Mobile Suit Gundam",
        "harga" : 450000
      },
      {
        "name" : "RG CROSSBONE GUNDAM",
        "image" : "assets/RG_Crossbone_Gundam_X-1.jpg",
        "desc" : "Bandai 2019 Skala Real Grade Mobile Suit Gundam",
        "harga" : 650000
      },
      {
        "name" : "RG UNICORN GUNDAM",
        "image" : "assets/RG-UnicornGundam02BansheeNorn.jpg",
        "desc" : "Bandai 2015 Skala Real Grade Mobile Suit Gundam",
        "harga" : 1200000
      },
      {
        "name" : "RG RX-78-2 GUNDAM",
        "image" : "assets/RX782_Gundam_-_RG_Boxart.jpg",
        "desc" : "Bandai 2010 Skala : Real Grade Mobile Suit Gundam",
        "harga" : 356000
      }, ]
},


"MINI4WD" : 
{   type : "mini4wd",
    data : [
        {
            "name" : "Hotwheels 20 Packs",
            "image" : "assets/hotwheels1.jpg",
            "desc" : "Hot Wheels 20-Car Gift Packs deliver ten of the coolest 1:64 scale die-cast vehicles with unifying themes in one package. Each pack is an instant collection!",
            "harga" : 800000
        },
        {
            "name" : "Hotwheels 10 Packs",
            "image" : "assets/hotwheels2.jpg",
            "desc" : "Hot Wheels 10-Car Gift Packs deliver ten of the coolest 1:64 scale die-cast vehicles with unifying themes in one package. Each pack is an instant collection!",
            "harga" : 650000
        },
        {
            "name" : "Tamiya Blazing Max",
            "image" : "assets/Tamiya1.jpg",
            "desc" : "Aero Mini 4WD car released by Tamiya, first released as a timed event-exclusive in January 1999 at the Super Dome Grand Prix in Japan and later released as regular car in February 1999. It was the first Mini 4WD car to be equipped with the VS Chassis",
            "harga" : 250000
        },
        {
            "name" : "Tamiya Beat-Magnum",
            "image" : "assets/Tamiya2.jpg",
            "desc" : "The Beat-Magnum is a straight-attributed body parts, with 35 points in speed, 1 point in acceleration, 6 points in corner stability, 40 points in endurance and 16g in weight",
            "harga" : 356000
        },
    ]
    }
}
for(var a in product){
//console.log(key)
const data = product[a].data;
 for(var i = 0; i < data.length; i++){
    let namaProduk = data[i].name,
        imageProduk = data[i].image,
        hargaProduk = data[i].harga,
        descProduk = data[i].desc;
 

const gundamCard =`
<div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src="${imageProduk}" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${namaProduk}</h5>
            <p class="fw-bolder">${descProduk}</p>
            <h5 class="fw-bolder">Harga Rp. ${hargaProduk}</h5>
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="Buy('${namaProduk}', '${descProduk}', '${hargaProduk}'">Buy Now</a></div>
    </div>
</div>`

const mini4wdCard =`
<div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src="${imageProduk}" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${namaProduk}</h5>
            <p class="fw-bolder">${descProduk}</p>
            <h5 class="fw-bolder">Harga Rp. ${hargaProduk}</h5>
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="Buy('${namaProduk}', '${descProduk}', '${hargaProduk}')">Buy Now</a></div>
    </div>
</div>`

let card = document.createElement("div");
card.className = "col mb-5";
card.innerHTML = product[a].type == "Gundam" ? gundamCard : mini4wdCard
document.getElementById(a).appendChild(card);
console.log(a);

    }
}    

function Buy(namaProduk, descProduk, hargaProduk) {
    var noHp = "+6285156953268";
    window.open(`https://wa.me/${noHp}?&text=Product%20Name:%20${namaProduk}%0ADesc Product:%20${descProduk}%0APrice:%20${hargaProduk}%0A%0AThanks%20BRO!`);
}

// function chatToAdmin(nama,desc,harga) {
//     var noHp = "+6285721013636";
//     window.open(`https://web.whatsapp.com/send?phone=${noHp}?&text=${nama},${desc},${harga}`)
// }
