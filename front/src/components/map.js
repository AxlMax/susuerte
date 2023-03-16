import { useState, useEffect } from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map(props) {
    
    const mapApi = 'AIzaSyCh_UN5jDzSI89hXTnrWoNcpQjnfbGZG8Q'

    const mapStyles = {        
        height: "50vh",
        width: "100%",
        borderRadius: "2em"
    };

    const [cord, sCord] = useState(null)

    useEffect(()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(({coords}) => sCord(coords))
        }   
    },[])
    
    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    if(cord != null){
        defaultCenter.lat = cord.latitude
        defaultCenter.lng = cord.longitude
    }

    return <>
        <LoadScript googleMapsApiKey={mapApi}>

            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={11}
            center={defaultCenter}
            />
           

        </LoadScript>
    </>;
}

export default Map;