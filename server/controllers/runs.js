const RunMeta = require('../models/RunMeta')
const RunData = require('../models/RunData')

const MAX_RUNS_SHOWN = 10

const getRun = async (req, res) => {
    RunData.findById(req.params.id)
        .then(run => 
            res.status(200).send({
                route: run.route,
                 waypoints: run.waypoints
        }))
        .catch(err => res.status(400).send(err))
}

const searchRuns = async (req, res) => {
    const runs = await RunMeta.find({})
    const query = req.query
    
    if (query.minDistance && query.maxDistance && query.tags) {
        let ratings = []
        // calculate ratings for each run
        for (let i = 0; i < runs.length; ++i) {
            run = runs[i]
            let rating = {score: 0, id: i}
            
            let intersection = query.tags.filter(x => run.tags.includes(x))
            rating.score += intersection.length
            //rating.score += 2 / Math.abs(run.distance - query.distance)

            //doesn't push if route is out of range indicated in query
            if ((query.minDistance <= run.distance) && (query.maxDistance >= run.distance)){
                ratings.push(rating);
            }

            //2^number of matching tags
            //distance is range -- limit to distance slider
    
         
        }

        ratings.sort((a,b) => {
            return b.score - a.score
        })

        result = []
        // packaging best rated runs into response result 
        for (let i = 0; i < MAX_RUNS_SHOWN && i < ratings.length; ++i){
            let rating = ratings[i]
            result.push(runs[rating.id])
        }

        res.status(200).send(result)
    } else {
        res.status(400).json({message: 'Search query incomplete'})
    }

}

const makeRun = async (req, res) => {
    
   
    let runMeta = req.body.meta
    let runData = req.body.data
    
    // create run components
    if (runMeta && runData) {

        const result = await RunData.create(runData)
        runMeta.data_id = result.id
        RunMeta.create(runMeta)
            .then(res.status(200).send())
            .catch(err => res.status(400).send('Cannot create run meta record'))
    } else {
        console.log("rejected");
        res.status(400).json({message: 'Submitted run not complete'})

    }
}

module.exports = {
    getRun,
    searchRuns,
    makeRun
}
  