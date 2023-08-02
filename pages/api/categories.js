const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = `mongodb+srv://nextUser:rH0q4amXxEV2Ds3m@cluster0.ka5da.mongodb.net/pc-builder?retryWrites=true&w=majority`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function connectDb(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()

    const processorCollection = client.db('pc-builder').collection('processor')

    if (req.method === 'GET') {
      const processor = await processorCollection.find({}).toArray()
      res.send({
        message: 'Successfully retrieved',
        status: 200,
        data: processor,
      })
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default connectDb

// const handler = (req, res) => {
//   res.send({ message: 'successful' })
// }

// export default handler
