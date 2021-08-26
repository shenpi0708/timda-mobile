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
  serviceType : 'std_srvs/Empty'
});






function pub_goods(id){
  // str=document.getElementById("Item").value;
  // var pub = new ROSLIB.Message({data : id});
  // console.log(pub)
  // goods.publish(pub);

  var request = new ROSLIB.ServiceRequest({
    str : id
  });
  
  addTwoIntsClient.callService(request, function(result) {
    console.log('Result for service call on '
      + addTwoIntsClient.name
      + ': '
      + result.is_listen);
  });

}





