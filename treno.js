const btn= document.getElementById("btn");

btn.addEventListener('click', function(){
  let dist = document.getElementById("dist").value;
  let age = document.getElementById("age").value;
  let nomcog = document.getElementById("nomcog").value;

  let price = dist * 0.21;

  if (age <= 0) {
      alert("Noooneeeeee");
      location.reload();
    }
    else if (age < 18) {
      price = price - ((price / 100) * 20);
    }
    else if (age >= 65 && age < 140) {
      price = price - ((price / 100) * 40);
    }
    else if (age > 140) {
      alert("Seh vabbè");
      alert("Ripartiamo da 0");
      location.reload();
    }
    price = price.toFixed(2);
    document.getElementById("prezzo-biglietto").innerHTML = price;
    document.getElementById("nomino").innerHTML = nomcog;
    console.log("Il prezzo del tuo biglietto è:", price)
});