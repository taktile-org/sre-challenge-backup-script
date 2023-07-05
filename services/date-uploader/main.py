import boto3
from datetime import datetime
from io import BytesIO

# Create a session using your AWS credentials
s3 = boto3.client('s3',
    aws_access_key_id='YOUR_ACCESS_KEY',
    aws_secret_access_key='YOUR_SECRET_KEY',
    region_name='YOUR_REGION'
)

# Define the bucket and content of the file to be created
bucket_name = 'your-bucket'

# Get the current date and time
date_time = datetime.now().strftime("%Y-%m-%d-%H-%M-%S")

# Set the file content to the current date and time, encoded as bytes
file_content = date_time.encode()

# Set the file name to include the current date and time
file_name = f"file_{date_time}.txt"

# Create a file-like object in memory
file_object = BytesIO(file_content)

# Upload the file
s3.upload_fileobj(file_object, bucket_name, file_name)
print(f'Created and uploaded {file_name} to {bucket_name}')
