import os
import boto3


BUCKET_NAME = 'alexhaight-design'
LOCAL_DIRECTORY = '/Users/alex/Documents/Design'

client = boto3.client('s3')

# enumerate local files recursively
for root, dirs, files in os.walk(LOCAL_DIRECTORY):

  for filename in files:

    # construct the full local path
    local_path = os.path.join(root, filename)

    # construct the full Dropbox path
    path = os.path.relpath(local_path, LOCAL_DIRECTORY)

    print('Searching ', path,' in ', BUCKET_NAME)
    if '.png' not in path:
       print('Skipping non-png ', path)
       break
    try:
        client.head_object(Bucket=BUCKET_NAME, Key=path)
        print('Path found on S3! Skipping ', path)

        # try:
            # client.delete_object(Bucket=bucket, Key=s3_path)
        # except:
            # print "Unable to delete %s..." % s3_path
    except:
        print('Uploading ', path)
        client.upload_file(local_path, BUCKET_NAME, path)
