# Date Uploader

This is a production micro service that uploads sensitive entropy information to our production S3 Bucket

##Prerequisites

* Node.js (Version 14 or later)
* AWS SDK for JavaScript: To install, use npm:
  Copy code
  ```
  npm install aws-sdk
  ```


### Setup
Replace `YOUR_ACCESS_KEY`, `YOUR_SECRET_KEY`, `YOUR_REGION`, `your-bucket`, in the script with your actual AWS access key, secret key, preferred region, and the name of your S3 bucket.

### Run

Execute the script in your terminal as follows:

```
node main.js
```
