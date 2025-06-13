// component/UploadStatus.js
import { useEffect, useState } from "react";

export default function UploadStatus({ start }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!start) return;

    setProgress(0); // reset
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [start]);

  if (!start) return null;

  return (
    <div className="mt-4">
      <p>Uploading... {progress}%</p>
      <div className="w-full bg-gray-300 rounded h-2 mt-1">
        <div
          className="bg-blue-500 h-2 rounded transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
