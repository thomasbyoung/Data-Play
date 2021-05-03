fetch("data.json")
  .then(response => response.json())
  .then(json => inDaFunk(json));

  var goodArray = [];
  var badArray = [];

  function inDaFunk(json){
      console.log(json.length)
    for (let i = 0; i < json.length; i++ ){
        if(i < 10011){
        var time = json[i].SnapShotDateTime;
        var time2 = json[i+1].SnapShotDateTime;
        var count = json[i].LicenseCount;
        var count2 = json[i+1].LicenseCount;

        //console.log(i)
        if(time === time2){
            if(count > count2){
                goodArray.push(json[i]);
            } else {
                goodArray.push(json[i+1]);
            }
            // if(count != count2){
            //     if(count > 0){
            //         goodArray.push(json[i]);
            //     } 
            //     if(count2 > 0){
            //         goodArray.push(json[i+1])
            //     }
            // } 
            // else {
            //     if(count === count2){
            //         goodArray.push(json[i])
            //     }
            //     else {
            //         badArray.push(json[1])
            //     }
            // }
        } 
    }
    }
    buildOutput()
}

function buildOutput(){
    for(let i=0;i<goodArray.length;i++){

        var row = document.createElement("tr");

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
   // $('#example').DataTable();
}


//   $(document).ready(function() {
//     $('#example').DataTable();
// } );

