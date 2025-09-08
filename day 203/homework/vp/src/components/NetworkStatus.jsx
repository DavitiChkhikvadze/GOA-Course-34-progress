import { useEffect, useState } from "react";

export default function NetworkStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="p-4 border rounded shadow mt-4">
      {online ? (
        <p className="text-green-600">You are online ✅</p>
      ) : (
        <p className="text-red-600">You are offline ❌</p>
      )}
    </div>
  );
}
