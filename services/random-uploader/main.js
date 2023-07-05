// Import AWS SDK
const AWS = require('aws-sdk');

// Set AWS config
AWS.config.update({
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_KEY',
    region: 'YOUR_REGION'
});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Generate a random string
let randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

// Convert the string to a Buffer
let fileContent = Buffer.from(randomString, 'utf-8');

// Define the current date and time
let date = new Date();
let dateTime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

// Define the upload parameters
let uploadParams = {
    Bucket: 'YOUR_BUCKET_NAME',
    Key: `file_entropy_${dateTime}.txt`,
    Body: fileContent
};

// Call S3 to retrieve upload file to specified bucket
s3.upload(uploadParams, function(err, data) {
    if (err) {
        console.log("Error", err);
    }
    if (data) {
        console.log("Upload Success", data.Location);
    }
});
