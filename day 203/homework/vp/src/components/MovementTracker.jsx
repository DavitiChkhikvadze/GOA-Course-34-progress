import { useState, useEffect } from "react";
import { useGeoLocation } from "../hooks/useGeoLocation";

function calcDistance(p1, p2) {
  if (!p1 || !p2) return 0;
  const R = 6371e3; // earth radius in m
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(p2.lat - p1.lat);
  const dLng = toRad(p2.lng - p1.lng);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(p1.lat)) *
      Math.cos(toRad(p2.lat)) *
      Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function MovementTracker() {
  const { position } = useGeoLocation({ watch: true });
  const [start, setStart] = useState(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!start && position) setStart(position);
    if (start && position) {
      setDistance(calcDistance(start, position));
    }
  }, [position, start]);

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Movement Tracker</h2>
      <p>Distance moved: {distance.toFixed(2)} meters</p>
      {distance > 100 && (
        <p className="text-red-500 font-bold">🚨 You moved more than 100m!</p>
      )}
    </div>
  );
}
