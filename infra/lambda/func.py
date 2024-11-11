import boto3
import json

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('web-resume-db-table')

def lambda_handler(event, context):
    try:
        # Retrieve item from DynamoDB table
        response = table.get_item(Key={
            'id': 0
        })
        views = response['Item']['views']
        views += 1
        print(f"Current views count: {views}")

        # Update item in the DynamoDB table
        table.put_item(Item={
            'id': 0,
            'views': views
        })

        # Return the updated views count with CORS headers
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "https://web-resume-s3.s3.eu-north-1.amazonaws.com",  # Adjust based on your needs
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            "body": json.dumps({"views": views})
        }

    except Exception as e:
        # Handle potential exceptions and return an error response with CORS headers
        return {
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "https://web-resume-s3.s3.eu-north-1.amazonaws.com",  # Adjust as needed
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            "body": json.dumps({"error": str(e)})
        }
