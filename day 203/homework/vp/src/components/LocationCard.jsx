import { useGeoLocation } from "../hooks/useGeoLocation";

export default function LocationCard() {
  const { position, error, loading } = useGeoLocation();

  if (loading) return <p>Loading location...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Current Position</h2>
      <p>Latitude: {position?.lat}</p>
      <p>Longitude: {position?.lng}</p>
    </div>
  );
}
