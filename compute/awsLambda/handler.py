# import json

# def viewCounter(event, context):
#     body = {
#         "message": "Go Serverless v4.0! Your function executed successfully!",
#     }

#     response = {"statusCode": 200, "body": json.dumps(body)}

#     return response

import json
import boto3
from viewCounter import increment

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('viewcount')

def viewCounter(event, context):
    try:
        response = table.get_item(Key={
            'ID': '1'
        })
        views = response['Item']['views'] if 'views' in response['Item'] else None
    except:
        views = None

    views = increment(views)
    
    response = table.put_item(Item={
        'ID': '1',
        'views': views
    })
    
    return views