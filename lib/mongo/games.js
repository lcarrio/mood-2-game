import clientPromise from ".";

let client
let games_csv_data
let db

async function init() {
    if(db) return
    try {
        client = await clientPromise
        db = await client.db()
        games_csv_data = await db.collection("games_csv_data")
    } catch(error){
        throw new Error("Failed to establish connection to database")
    }
}

;(async () => {
    await init()
})()

export async function getGames() {
    try{
        if(!games_csv_data) await init()
        const result = await games_csv_data
            .find({})
            .limit(20)
            .map(user =>({...user, _id: user._id.toString()}))
            .toArray()
    return {games_csv_data: result}
    }catch(error){
        return {error:"Failed to fetch games"}
    }
}