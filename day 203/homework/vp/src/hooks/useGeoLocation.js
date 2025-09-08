import { useState, useEffect } from "react";

export function useGeoLocation({ enableHighAccuracy = true, timeout = 10000, maximumAge = 0, watch = false } = {}) {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      setLoading(false);
      return;
    }

    const success = (pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
      setError(null);
      setLoading(false);
    };

    const fail = (err) => {
      setError(err.message);
      setLoading(false);
    };

    let watcherId;

    if (watch) {
      watcherId = navigator.geolocation.watchPosition(success, fail, {
        enableHighAccuracy,
        timeout,
        maximumAge,
      });
    } else {
      navigator.geolocation.getCurrentPosition(success, fail, {
        enableHighAccuracy,
        timeout,
        maximumAge,
      });
    }

    return () => {
      if (watcherId) navigator.geolocation.clearWatch(watcherId);
    };
  }, [enableHighAccuracy, timeout, maximumAge, watch]);

  return { position, error, loading };
}
