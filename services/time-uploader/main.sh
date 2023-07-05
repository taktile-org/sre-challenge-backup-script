#!/bin/bash

# Set your AWS credentials and bucket name
export AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"
export AWS_SECRET_ACCESS_KEY="YOUR_SECRET_KEY"
export AWS_DEFAULT_REGION="YOUR_REGION"
bucket_name="your-bucket"

# Get the current date and time
date_time=$(date "+%Y-%m-%d-%H-%M-%S")

# Set the file name to include the current date and time
file_name="file_${date_time}.txt"

# Create a file with the current date and time as the content
echo "${date_time}" > $file_name

# Upload the file to the S3 bucket
aws s3 cp $file_name s3://$bucket_name/$file_name

# Remove the local file
rm $file_name

echo "Created and uploaded ${file_name} to ${bucket_name}"
