fetch("data.json")
  .then(response => response.json())
  .then(json => inDaFunk(json));

  var goodArray = [];
  var badArray = [];

  function inDaFunk(json){
    for (let i = 0; i < json.length; i++ ){
        if(i < 10011){
        console.log(i)
        var time = json[i].SnapShotDateTime;
        var time2 = json[i+1].SnapShotDateTime;
        var count = json[i].LicenseCount;
        var count2 = json[i+1].LicenseCount;

        
        if(time === time2){
            if(count != count2){
                if(count > 0){
                    goodArray.push(json[i]);
                } 
                if(count2 > 0){
                    goodArray.push(json[i+1])
                }
            } 
            else {
                if(count === count2){
                    goodArray.push(json[i])
                }
                else {
                    badArray.push(json[1])
                }
            }
        } 
    }
    }
    console.log(goodArray[0]);
    console.log(badArray);
    buildOutput()
}

function buildOutput(){
    for(let i=0;i<goodArray.length;i++){

        var row = document.createElement("tr");
       // para.appendChild(node);

        var para = document.createElement("td");
        var node = document.createTextNode(goodArray[i].SnapShotDateTime);
        para.appendChild(node);

        var para2 = document.createElement("td");
        var node2 = document.createTextNode(goodArray[i].LicenseCount);
        para2.appendChild(node2);
        
        var element = document.getElementById("demo");
        element.appendChild(row);
        row.appendChild(para);
        row.appendChild(para2);
    }
}


  document.getElementById("demo").innerHTML = goodArray[0];