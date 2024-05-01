import { getGames } from "@/lib/mongo/games";

    const handler = async (req, res) => {
        if(req.method === "GET"){
        try {
            const {games_csv_data, error} = await getGames()
            if(error) throw new Error(error)

            return res.status(200).json({games_csv_data})
        }catch (error){
            return res.status(500).json({error : error.message})
        }
    }

    res.setHeader("Allow", ["GET"])
    res.status(425).end('Method ${req.method} is not allowed')
}

export default handler;