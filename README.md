# koop-serverless-example

This example project shows how to deploy [KoopJS](https://koopjs.github.io/) application to AWS Lambda using the [serverless](https://serverless.com/) framework.

requires Node.js 8+

## Prerequisite

AWS access key with privileges to:

- read/write S3
- manage Lambda
- manage API Gateway

The serverless framework uses the key to deploy and manage Lambda functions on AWS. To know how to setup the credential for serverless, take a look at this [guide](https://serverless.com/framework/docs/providers/aws/guide/credentials/).

## Code

## Koop app

This example uses the [serverless-http](https://github.com/dougmoscrop/serverless-http) library to wrap an existing Koop app into AWS Lambda.

You should be able to develop your Koop app much like the usual way. But instead of running directly, the app needs to be exported for serverless:

```javascript
// src/index.js

const Koop = require("koop");
const serverless = require("serverless-http");

// initiate a Koop app
const koop = new Koop();

// configure the Koop app

// wrap the Koop server with the serverless framework
module.exports.handler = serverless(koop.server);
```

Since the Koop app is going to run as a Lambda function, you may need to reconsider the caching and data persistence strategies.

## serverless.yml

The Lambda function is configured with the file `servless.yml`. The configuration shows how to configure a lambda function for API Gateway events.

```yaml
service: koop-serverless-example

provider:
  name: aws
  runtime: nodejs10.x

functions:
  # Each API should have one corresponding function
  get-data:
    handler: src/index.handler
    events:
      # The "http" event defines an API at the API Gateway
      - http:
          path: /pg-provider/{host}/FeatureServer/0
          method: get
          request:
            # Each parameter and query string need to be explicitly specified
            parameters:
              paths:
                host: true
```

For more details and options, check the [Serverless AWS Guide](https://serverless.com/framework/docs/providers/aws/).

## Development

### Test

This example uses the [serverless-offline](https://github.com/dherault/serverless-offline) to run the local dev server. Simply runs

```
npm run start
```

### Deploy

Deploy Lambda functions and APIs with one command:

```
npm run deploy
```

### Remove

Remove all deployed Lambda functions and APIs:

```
npm run remove
```

## Lincese

MIT
