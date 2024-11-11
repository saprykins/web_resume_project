# Basic HTML Website Hosted on S3 with Database Connectivity via Lambda API

## Overview
This project aims to deploy a basic HTML website hosted on an S3 bucket, demonstrating interaction with a database via an AWS Lambda function. The site tracks views using a DynamoDB table.


## Functional Architecture

```
+-------------------------+        +-------------------------+        +-------------------------+
|        S3 Bucket        |  <-->  |      Lambda Function    |  <-->  |     DynamoDB Table      |
|-------------------------|        |-------------------------|        |-------------------------|
| - Hosts HTML & JS files |        | - Handles API requests  |        | - Stores view counts    |
+-------------------------+        | - Connects to DynamoDB  |        | - Table: web-resume-db  |
                                   +-------------------------+        +-------------------------+
```

## Project Components
1. **Static Website Hosting**: 
   - The website consists of HTML and JavaScript files hosted on an S3 bucket.
   - Public access to the S3 bucket is allowed (without CloudFront).
   - The S3 bucket URL is specified in GitHub Actions and GitHub workflows for deployment.

2. **DynamoDB Table**:
   - A DynamoDB table named `web-resume-db-table` is used to store `id` (set to 0) and `number of views`.
   - Both `id` and `views` are stored as numeric values.

3. **AWS Lambda API**:
   - An AWS Lambda function is used as an intermediary service to interact with DynamoDB.

## CI/CD Workflows
### Frontend CI/CD
- **GitHub Actions** deploy the latest HTML and JavaScript files to the S3 bucket.

### Backend CI/CD
- **Terraform** is used to deploy the Lambda function and its associated roles. However, this setup currently requires further review and testing, as it does not deploy consistently.

## Manual Steps for Deployment
### 1. S3 Configuration
- Host the website using S3 by uploading the HTML and JS files.
- Ensure public access is allowed for the S3 bucket (without CloudFront).
- Specify the S3 bucket URL in the GitHub Actions workflow.

### 2. Lambda Function Configuration
1. Update the Lambda code with the DynamoDB table name (`web-resume-db-table`).
2. Create a new Lambda function with:
   - New role creation
   - Function URL generation (authentication: none)
   - CORS settings configured to allow requests from the S3 bucket URL
3. Post-deployment:
   - Add the necessary role to enable Lambda access to DynamoDB.
   - Update the JS code in the S3 bucket with the Lambda function URL.

## Debugging and Troubleshooting
### Verification Steps
1. **Lambda Function**: 
   - Check the AWS console to ensure the Lambda function URL returns the expected view count.
2. **Frontend (Browser)**:
   - Use Chrome Developer Tools (Network -> Headers) to verify if the view count is correctly retrieved.

### Troubleshooting Issues
- Compare roles created manually and via Terraform to identify discrepancies.
- Verify CORS settings, including allowed sources, headers, and actions.
- Review the deployment of the Lambda function URL, as errors may arise due to new functionality.

## Next Steps
1. **CloudFront Integration**: Implement CloudFront using Infrastructure as Code (IaC) for improved performance and security.
2. **Domain Configuration**: Explore domain options using Azure or AWS services (Note: Free domain names are not provided; consider services such as [Namecheap](https://www.namecheap.com/)).
3. **Store ARN in GitHub**: Explore the possibility of storing the Lambda URL in GitHub.
4. **Full Deployment via IaC**: Explore the possibility of deploying the S3 bucket and DynamoDB tables via Infrastructure as Code (IaC).
---