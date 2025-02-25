import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-2xl text-center w-[400px]">
        <h1 className="text-2xl font-bold mb-4">📤 上傳檔案</h1>
        <input
          type="file"
          className="mb-4 border p-2 rounded w-full"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <p className="text-gray-600">已選擇檔案：{selectedFile.name}</p>
        )}
        <div className="mt-6 flex space-x-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            onClick={() => navigate("/home")}
          >
            🔙 返回首頁
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            🚀 上傳檔案（未連接後端）
          </button>
        </div>
      </div>
    </div>
  );
}
