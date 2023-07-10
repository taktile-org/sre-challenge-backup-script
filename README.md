# Task: Scripting a Regular Backup

## Objective

Your task is to write a script that automates a regular backup of an AWS S3 bucket to another S3 bucket. The script should log any errors.

## Specifications

* The script should be written in a language you're comfortable with. You may want to use a language that can leverage the AWS SDK, such as Python (Boto3 library), Node.js (AWS SDK for JavaScript), etc.
* The script should copy all contents from a source S3 bucket to a destination S3 bucket. Assume that these buckets already exist.
* The backup should occur on a schedule, for example, every day at a certain time.
* If a backup fails, the script should log the error

## Pre-requisites

During the challenge you will get access to an AWS account with the buckets (the origin and backup bucket).
You can also take a look at `/services` where you will find multiple services that use the main S3 Bucket

## Deliverables

Your completed task should include the following:

* The script file.
* A README.md file that includes the following:
  * Instructions on how to run the script.
  * Any necessary setup instructions, such as environment variables or dependencies that need to be installed.
  * An explanation of how the script works.


## Evaluation

Your task will be evaluated on the following criteria:

* Correctness: Does the script perform a regular backup as specified?
* Error Handling: Does the script appropriately handle and log errors?
* Code Quality: Is the code well-organized, easy to read, and appropriately commented?
* Documentation: Is the README.md file clear and does it explain how to set up and run the script, and does it explain how the script works?
* Edge Cases: Are there any edge cases, or optimisations we should keep in mind when the volume of data increases?
* Please remember that this is not just about getting the script to work. We're interested in your problem-solving process and your approach to writing code and documentation.

Good luck!
