const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3")
const aws = require('aws-sdk');

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.get('/listObjects', function(req, res) {
  
  new aws.SSM().getParameters({
    Names: ["ACCESS_KEY_ID", "SECRET_ACCESS_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  }).promise().then((parameters) => {

    const client = new S3Client({
      useArnRegion: true,
      region: "us-east-1",
      credentials: {
        accessKeyId: parameters.Parameters.at(0).Value,
        secretAccessKey: parameters.Parameters.at(1).Value,
      }
    })

    client.send(new ListObjectsV2Command({
      Bucket: "arn:aws:s3:us-east-1:587813431606:accesspoint/website",
    })).then((objectsResponse) => {
      res.send(objectsResponse)
    })

  })
});

module.exports = app
