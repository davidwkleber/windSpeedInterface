
module.exports = serialListener;

var SerialPort = require("serialport").SerialPort

<<<<<<< HEAD
 //   serialPortBlink = new SerialPort('COM3', {
 //       baudrate: 9600, 

 //   });
    
    //    serialPortADC = new SerialPort('COM6', {
    //    baudrate: 9600, 

   // });
   
   PAserialPort = new SerialPort('COM6', {
		baudrate: 9600,
	});
	  
   _serialPort = new SerialPort('COM3', {
		baudrate: 9600,
	});
=======
   serialPortBlink = new SerialPort('COM3', {
        baudrate: 9600, 

    });
    
        serialPortADC = new SerialPort('COM6', {
        baudrate: 9600, 

    });
>>>>>>> origin/master

function sleep(time, callback) {
// serialListener.prototype.sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
};

<<<<<<< HEAD
var _comPort = '';


function serialListener(ComPort)
=======


function serialListener()
>>>>>>> origin/master
{	//
	//
	//http://www.barryvandam.com/node-js-communicating-with-arduino/ 
	//copied from the server.js file
	var receivedData = "";
    var sendData = "";
<<<<<<< HEAD
	var delimiter = "\n";
	var comPort = ComPort;
	_comPort = comPort;
	
 console.log('serialListenerInit called with comPort:'+comPort);
 
 
    _serialPort.on("open", function () {
		console.log('serialListener.serialPortBlink.on Open ' + comPort);
=======
	
	var delimiter = 'x';
 
 
 
 
    serialPortBlink.on("open", function () {
		console.log('serialListener.serialPortBlink.on Open');
>>>>>>> origin/master
		//
		//
		//My guess is, that the function sends to fast after the port opening. The uController is still in the reset stage
	
        sleep(2000, function() {
    // executes after two second, and blocks the thread, should be avoided. maybe we find another solution
    });
<<<<<<< HEAD
	});

	
    PAserialPort.on("open", function () {
		console.log('serialListener.serialPortBlink.on Open ' + comPort);
		//
		//
		//My guess is, that the function sends to fast after the port opening. The uController is still in the reset stage

        sleep(2000, function() {
    // executes after two second, and blocks the thread, should be avoided. maybe we find another solution
    });
=======

    /* 
	serialPortBlink.write('r2x', function(err, results) {
        console.log('Blink_err ' + err);
        console.log('Blink_results ' + results);
    });
	*/

    
 
    //
    //
    //you need some kind of delay between the different write commands; 200 seems to be the minimum delay.
    
      sleep(200, function() {
    // executes after two second, and blocks the thread, should be avoided. maybe we find another solution
    });      
       /* 
    serialPortBlink.write('r10x', function(err, results) {
    console.log('Blink_err ' + err);
    console.log('Blink_results ' + results);
    });
    */


>>>>>>> origin/master
  }); 
 
 
 
 
<<<<<<< HEAD
=======
    serialPortADC.on("open", function () {
		
		
		
		// My guess is, that the function sends to fast after the port opening. The uController is still in the reset stage
	
		sleep(2000, function() {
		// executes after two second, and blocks the thread, should be avoided. maybe we find another solution
		});
/*
		serialPortADC.write('S', function(err, results) {
		console.log('ADC_err ' + err);
		console.log('ADC_results ' + results);        
        });
*/  
		// console.log('ADClog_open');
        
>>>>>>> origin/master
    //######Version one to receive data
        // serialPortADC.on('data', function(data) {
		// console.log('ADC_data received: ' + data);
        // });
        
    //######Version two to receive data with "x" as a delimiter 
<<<<<<< HEAD
    _serialPort.on('data', function(data) {
		console.log('serialPort on data called');
         receivedData += data.toString();
   //   if (receivedData .indexOf('x') >= 0) {
   //    sendData = receivedData .substring(receivedData .indexOf('x') + 1) ;
    //   receivedData = '';
    // }
     // // send the incoming data to browser with websockets.
   // socketServer.emit('update', sendData);
   
   console.log(comPort+' data received: ' + receivedData + '\n');
  }); 
      PAserialPort.on('data', function(data) {
		console.log('serialPort on data called');
         receivedData += data.toString();
   console.log(comPort+' data received: ' + receivedData + '\n');
  }); 
   
=======
    serialPortADC.on('data', function(data) {
         receivedData += data.toString();
      if (receivedData .indexOf('x') >= 0) {
       sendData = receivedData .substring(receivedData .indexOf('x') + 1) ;
       receivedData = '';
     }
     // // send the incoming data to browser with websockets.
   // socketServer.emit('update', sendData);
   
   console.log('ADC_data received: ' + sendData);
  }); 
    });  
    
    

>>>>>>> origin/master
};


serialListener.doSomething = function() {
	console.log('serialListener.doSomething here');
<<<<<<< HEAD
};

serialListener.write = function( id, value ) {
	console.log('serialListener.write COM: ');

     sleep(200, function() {
    }); 
	
	console.log('serialListener.write COM: ');
	console.log('serialListener write value: '+value);
	if( id === 'w' ) {
		_serialPort.write(value, function(err, results) {
			console.log('Blink_err ' + err);
			console.log('Blink_results from windSpeed ' + results);
		});
	} else if (id === 'PA') {
		console.log('PSserialListener.write '+value);

		PAserialPort.write(value, function(err, results) {
			console.log('Blink_err ' + err);
			console.log('Blink_results ' + results);
		});
	} else {
		console.log('bad id '+id);
	};
	
=======
	//	serialPortBlink.write('r2x', function(err, results) {
    //    console.log('Blink_err ' + err);
    //    console.log('Blink_results ' + results);
    // });
};

serialListener.write = function( id, value ) {
	console.log('serialListener.doSomething here');
		serialPortBlink.write(id+value+'x', function(err, results) {
        console.log('Blink_err ' + err);
        console.log('Blink_results ' + results);
    });
>>>>>>> origin/master
};

