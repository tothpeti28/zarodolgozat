termeklista()
lomtar()

function fileSend() {
  const myFiles = document.getElementById('myFiles').files

    if(myFiles.length > 0) {
      const sendFiles = async () => {
      const formData = new FormData()

      Object.keys(myFiles).forEach(key => {
          formData.append(myFiles.item(key).name, myFiles.item(key))
      })
  
      console.log(formData);
      const response = await fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: formData,
      })
  
      const json = await response.json()
      console.log(json)

      document.getElementById('myFiles').value=""
      }

      sendFiles()
    }
}


function apoloszerek() {
fetch('http://localhost:3000/apoloszerek')
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(adatok){
    console.log(adatok);
    let sz=`<h3 class="mt-3">Ápolószerek</h3>`
    for(var elem of adatok)
    {
        /*sz += '<div class="col-sm-4">'
        sz += `<img src="http://localhost/${elem.kep}">`
        sz += '</div>'
        */
        sz += `
        <div class="container card mt-3 ml-3 col-lg-4" style="width:400px">
          <img class="card-img-top" src="http://localhost:3000/${elem.kep}" alt="Card image">
          <div class="card-body">
           <h4 class="card-title">${elem.nev}</h4>
           <p class="card-text">Leírás: ${elem.leiras}</p>
            <p class="card-text">Ár: ${elem.ar}Ft/liter</p>
            <p class="card-text">Kiszerelés: ${elem.kiszereles}</p>
          </div>
        </div>`
     }
     document.getElementById("apoloszerek").innerHTML=sz;

     
 
 }
}

function ablaktisztitok() {
    fetch('http://localhost:3000/ablaktisztitok')
    .then(x => x.json())
    .then(y => megjelenit(y));
    
    function megjelenit(adatok){
        console.log(adatok);
        let sz=`<h3 class="mt-3">Ablaktisztítók</h3>`
        for(var elem of adatok)
        {
            /*sz += '<div class="col-sm-4">'
            sz += `<img src="http://localhost/${elem.kep}">`
            sz += '</div>'
            */
            sz += `
            <div class="container card mt-3 ml-3 col-lg-4" style="width:400px">
              <img class="card-img-top" src="http://localhost:3000/${elem.kep}" alt="Card image">
              <div class="card-body">
               <h4 class="card-title">${elem.nev}</h4>
               <p class="card-text">Leírás: ${elem.leiras}</p>
                <p class="card-text">Ár: ${elem.ar}Ft/liter</p>
                <p class="card-text">Kiszerelés: ${elem.kiszereles}</p>
              </div>
            </div>`
         }
         document.getElementById("ablaktisztitok").innerHTML=sz;
     }
    }

    function felnitisztitok() {
fetch('http://localhost:3000/felnitisztitok')
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(adatok){
    console.log(adatok);
    let sz=`<h3 class="mt-3">Felntitisztítók</h3>`
    for(var elem of adatok)
    {
        /*sz += '<div class="col-sm-4">'
        sz += `<img src="http://localhost/${elem.kep}">`
        sz += '</div>'
        */
        sz += `
        <div class="container card mt-3 ml-3 col-lg-4" style="width:400px">
          <img class="card-img-top" src="http://localhost:3000/${elem.kep}" alt="Card image">
          <div class="card-body">
           <h4 class="card-title">${elem.nev}</h4>
           <p class="card-text">Leírás: ${elem.leiras}</p>
            <p class="card-text">Ár: ${elem.ar}Ft/liter</p>
            <p class="card-text">Kiszerelés: ${elem.kiszereles}</p>
          </div>
        </div>`
     }
     document.getElementById("felnitisztitok").innerHTML=sz;

     
 
 }
}
function samponok() {
    fetch('http://localhost:3000/samponok')
    .then(x => x.json())
    .then(y => megjelenit(y));
    
    function megjelenit(adatok){
        console.log(adatok);
        let sz=`<h3 class="mt-3">Samponok</h3>`
        for(var elem of adatok)
        {
            /*sz += '<div class="col-sm-4">'
            sz += `<img src="http://localhost/${elem.kep}">`
            sz += '</div>'
            */
            sz += `
            <div class="container card mt-3 ml-3 col-lg-4" style="width:400px">
              <img class="card-img-top" src="http://localhost:3000/${elem.kep}" alt="Card image">
              <div class="card-body">
               <h4 class="card-title">${elem.nev}</h4>
               <p class="card-text">Leírás: ${elem.leiras}</p>
                <p class="card-text">Ár: ${elem.ar}Ft/liter vagy kilogramm</p>
                <p class="card-text">Kiszerelés: ${elem.kiszereles}</p>
              </div>
            </div>`
         }
         document.getElementById("samponok").innerHTML=sz;
    
         
     
     }
    }
    function tisztitoszerek() {
        fetch('http://localhost:3000/tisztitoszerek')
        .then(x => x.json())
        .then(y => megjelenit(y));
        
        function megjelenit(adatok){
            console.log(adatok);
            let sz=`<h3 class="mt-3">Tisztítószerek</h3>`
            for(var elem of adatok)
            {
                /*sz += '<div class="col-sm-4">'
                sz += `<img src="http://localhost/${elem.kep}">`
                sz += '</div>'
                */
                sz += `
                <div class="container card mt-3 ml-3 col-lg-4" style="width:400px">
                  <img class="card-img-top" src="http://localhost:3000/${elem.kep}" alt="Card image">
                  <div class="card-body">
                   <h4 class="card-title">${elem.nev}</h4>
                   <p class="card-text">Leírás: ${elem.leiras}</p>
                    <p class="card-text">Ár: ${elem.ar}Ft/liter</p>
                    <p class="card-text">Kiszerelés: ${elem.kiszereles}</p>
                  </div>
                </div>`
             }
             document.getElementById("tisztitoszerek").innerHTML=sz;
        
             
         
         }
        }
        function viaszok() {
            fetch('http://localhost:3000/viaszok')
            .then(x => x.json())
            .then(y => megjelenit(y));
            
            function megjelenit(adatok){
                console.log(adatok);
                let sz=`<h3 class="mt-3">Viaszok</h3>`
                for(var elem of adatok)
                {
                    /*sz += '<div class="col-sm-4">'
                    sz += `<img src="http://localhost/${elem.kep}">`
                    sz += '</div>'
                    */
                    sz += `
                    <div class="container card mt-3 ml-3 col-lg-4" style="width:400px">
                      <img class="card-img-top" src="http://localhost:3000/${elem.kep}" alt="Card image">
                      <div class="card-body">
                       <h4 class="card-title">${elem.nev}</h4>
                       <p class="card-text">Leírás: ${elem.leiras}</p>
                        <p class="card-text">Ár: ${elem.ar} Ft/liter</p>
                        <p class="card-text">Kiszerelés: ${elem.kiszereles}</p>
                      </div>
                    </div>`
                 }
                 document.getElementById("viaszok").innerHTML=sz;
            
                 
             
             }
            }


function termeklista() {
  fetch('http://localhost:3000/termeklista')
  .then(x => x.json())
  .then(y => {
  
  
      var sz=""
      y.forEach(elem => {        
      
          sz+=`<tr>
              <td style="visibility:hidden;">${elem.id}</td>
              <td>${elem.nev}</td>
              <td>${elem.tipus}</td>
              <td>${elem.leiras}</td>
              <td>${elem.ar}</td>
              <td>${elem.kiszereles}</td>
              <td><button type="button" class="btn btn-danger" onclick="lomtarba(this)">Termék törlése</button></td>
              </tr>`
       });
       document.getElementById("termeklista").innerHTML=sz;
  
       
   
   });
  }     
  function lomtar() {
    fetch('http://localhost:3000/lomtar')
    .then(x => x.json())
    .then(y => {
    
    
        var sz=""
        y.forEach(elem => {        
        
            sz+=`<tr>
                <td style="visibility:hidden;">${elem.id}</td>
                <td>${elem.nev}</td>
                <td>${elem.tipus}</td>
                <td>${elem.leiras}</td>
                <td>${elem.ar}</td>
                <td>${elem.kiszereles}</td>
                <td><button type="button" class="btn btn-success" onclick="lomtarbol(this)">Termék visszahívása</button></td>
                </tr>`
         });
         document.getElementById("lomtar").innerHTML=sz;
    
         
     
     });
    }     
  
  function lomtarba(btn){
    var tr=btn.parentElement.parentElement
    var id=tr.querySelector('td:first-child').innerHTML

    let url="http://localhost:3000/lomtarba"

    let bemenet={
      id: id,
    }

    let fetchOptions={
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: { "Content-type": "application/json; charset=UTF-8",
                  "Access-Control-Allow-Origin" : "*" }
    }

    fetch(url, fetchOptions)
      .then(x=>x.text())
      .then(y=>{
        alert(y)
        fetch("http://localhost:3000/lomtarba_t", fetchOptions)
          .then(x=>x.json())
          .then(y=>{
            window.location.reload()
          })
      })
  }

  function lomtarbol(btn){
    var tr=btn.parentElement.parentElement
    var id=tr.querySelector('td:first-child').innerHTML

    let url="http://localhost:3000/lomtarbol"

    let bemenet={
      id: id,
    }

    let fetchOptions={
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: { "Content-type": "application/json; charset=UTF-8",
                  "Access-Control-Allow-Origin" : "*" }
    }

    fetch(url, fetchOptions)
      .then(x=>x.text())
      .then(y=>{
        alert(y)
        fetch("http://localhost:3000/lomtarbol_t", fetchOptions)
          .then(x=>x.json())
          .then(y=>{
            window.location.reload()
          })
      })
  }