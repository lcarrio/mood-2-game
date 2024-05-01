import { MongoClient } from 'mongodb'; 
  
export default async function handler(req, res) { 
  if (req.method === 'POST') { 
    const { data } = req.body; 
  
    const client = new MongoClient(process.env.MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    }); 
  
    try { 
      await client.connect(); 
      const database = client.db('mood2game'); 
      const collection = database.collection('steam'); 
  
      await collection.insertOne({ data }); 
  
      res.status(201).json({ message: 'Data saved successfully!' }); 
    } catch (error) { 
      res.status(500).json({ message: 'Something went wrong!' }); 
    } finally { 
      await client.close(); 
    } 
  } else { 
    res.status(405).json({ message: 'Method not allowed!' }); 
  } 
}