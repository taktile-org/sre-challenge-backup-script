# Date Uploader

This is a production micro service that uploads sensitive date information to our production S3 Bucket

##Prerequisites

* Python 3.7 or later
* Boto3 Python library: To install, use pip:
  Copy code
  ```
  pip install -r requirements.txt
  ```


### Setup
Replace `YOUR_ACCESS_KEY`, `YOUR_SECRET_KEY`, `YOUR_REGION`, `your-bucket`, in the script with your actual AWS access key, secret key, preferred region, and the name of your S3 bucket.

### Run

Execute the script in your terminal as follows:

```
python main.py
```
