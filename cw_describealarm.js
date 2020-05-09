// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'ap-southeast-2'});
// Create CloudWatch service object
var cw = new AWS.CloudWatch({apiVersion: '2010-08-01'});
cw.describeAlarms({StateValue: 'INSUFFICIENT_DATA'}, function(err, data) {
 if (err) {
 console.log("Error", err);
 } else {
    for (i = 0; i < data.MetricAlarms.length; i++) {
        console.log(data.MetricAlarms[i].AlarmName)
    }
 // List the names of all current alarms in the console


//  data.MetricAlarms.forEach(function (it, index, array) {
//  console.log(it.AlarmName, it.AlarmArn);
//  });
 }
});

