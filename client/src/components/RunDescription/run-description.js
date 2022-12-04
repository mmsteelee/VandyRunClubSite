
import React, { useEffect, useState } from "react"
import MapComponent from "../Map/MapComponent"
import {getRun} from "../../api/runs"
import LoadingAnimation from "../loading-animation/loading-animation"
import './run-description.css'

const RunDescription = ({description}) => {
    const [mapData, setMapData] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasData, setHasData] = useState(description)

    let tags = hasData ? description.tags : ['None'];
    let tagsToString = tags.join(',           ');


    const loadRun = () => {
        getRun(description.data_id)
                .then(res => {
                    let data = {
                        route: res.data.route.map(
                            nums => [parseFloat(nums[0]), parseFloat(nums[1])]
                        ),
                        waypoints: res.data.waypoints.map(
                            nums => [parseFloat(nums[0]), parseFloat(nums[1])] 
                        ),
                        distance: description.distance
                    }
                    setMapData(data)
                    setLoading(false)
                    setHasData(true)
                })  
    }

    useEffect(() => {
        if (description) {
            loadRun()
        }
    }, [description]) 

    useEffect(() => {
        if (description) {
            loadRun()
        }
    }, []) 

    return(
        <div className="run-returns"> 
            { !hasData ? 
                <h1>Search</h1>
            :
            <div>
                <div className="description">
                    <h1>{description.name}</h1>
                    <p>Distance: {description.distance}</p>
                    <div className="array">
                    
                        {/* <p>Tags: {tags}</p> */}
                        {/* <p>Tags: {description.tags}</p> */}
                        <p>Tags: {tagsToString}</p>
                    </div>
                </div>
                <div className="map-picture">
                    { loading ?
                    <LoadingAnimation /> :
                    <MapComponent
                        mapData={mapData}
                        editable={false}
                    />
                    }
                </div> 
            </div>
            }
        </div>
    )
}

export default RunDescription