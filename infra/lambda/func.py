# web-resume-api


import boto3
import json

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('web-resume-db-table')

def lambda_handler(event, context):
    response = table.get_item(Key={
        'id': 0
    })

    views = response['Item']['views']
    views = views + 1
    print(views)

    response = table.put_item(Item={
        'id': 0,
        'views': views
    })

    return views