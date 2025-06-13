// component/FilePreview.js
import { useEffect, useState } from "react";

export default function FilePreview({ file }) {
  const [fileInfo, setFileInfo] = useState(null);

  useEffect(() => {
    if (file) {
      setFileInfo({
        name: file.name,
        size: (file.size / 1024).toFixed(2) + " KB",
        type: file.type,
      });
    }
  }, [file]);

  if (!fileInfo) return null;

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <p><strong>File Name:</strong> {fileInfo.name}</p>
      <p><strong>Size:</strong> {fileInfo.size}</p>
      <p><strong>Type:</strong> {fileInfo.type}</p>
    </div>
  );
}
