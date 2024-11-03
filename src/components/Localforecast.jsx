import { useState, useEffect } from 'react';

const Localforecast = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    setError("Location access denied.");
                    console.error(error);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);
    return (
        <>
            <h2>Local Forecast</h2>
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
        </>
    );
};

export default Localforecast;