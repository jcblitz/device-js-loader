var DynamicScript = new function () {
  var loadJs = function(file) {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src=file;
    head.appendChild(script);  
  };

  var phone = function() {    
    loadJs('phone.js');
  };

  var tablet = function() {
    loadJs('tablet.js');
  };

  var desktop = function() {
    loadJs('desktop.js');
  };

  this.forDevice = function(device) {
    if (device == "phone") {
      phone();
    } else if (device == "tablet") {
      tablet();
    } else {
      desktop();
    }
  }  
};

var DeviceDetect = new function() {
    devices = ['phone', 'desktop', 'tablet'];
    this.whatIsIt = function() {
      return devices[Math.floor(Math.random()*devices.length)];
    };
};

