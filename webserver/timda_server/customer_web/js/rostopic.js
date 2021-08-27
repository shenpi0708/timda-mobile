if (location.hostname == "") {
  location.hostname = "localhost";
}

var ros = new ROSLIB.Ros({
  url: "ws://" + location.hostname + ":9090",
});

ros.on("connection", function () {
  console.log("Connected to websocket server.");
  // alert("Connected to websocket server.");
});

ros.on("error", function (error) {
  console.log("Error connecting to websocket server: ", error);
  // alert("Error connecting to websocket server: ", error);
});

ros.on("close", function () {
  console.log("Connection to websocket server closed.");
  alert("Connection to websocket server closed.");

});

// Show rosbridge connection info
// -----------------

document.oncontextmenu = function () {
  return false;
}; // 防右鍵選單


// var goods = new ROSLIB.Topic({
// 	ros: ros,
// 	name: "/goods",
// 	messageType: "std_msgs/String",
//   });
  
var addTwoIntsClient = new ROSLIB.Service({
  ros : ros,
  name : '/goods',
  serviceType : 'diagnostic_msgs/AddDiagnostics'
});





function pub_goods(id){
  // str=document.getElementById("Item").value;
  // var pub = new ROSLIB.Message({data : id});
  // console.log(pub)
  // goods.publish(pub);
  table_name=document.getElementById("tables").value
  var request = new ROSLIB.ServiceRequest({
    load_namespace:table_name+'-'+id
  });
  console.log(table_name)
  addTwoIntsClient.callService(request, function(result) {
    document.getElementById(id+'_print').style="visibility: visible;"
    document.getElementById(id+'_print').innerHTML=request.message;
    setTimeout(function myFunction(){
      document.getElementById(id+'_print').style="visibility: hidden;"
    }, 3000);


    console.log('Result for service call on '
      + addTwoIntsClient.name
      + ': '
      + result.success
      +request.message);
  });

}


