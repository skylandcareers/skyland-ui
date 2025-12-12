'use client';

import { useState } from 'react';
import axios from 'axios';
import { FaCloudUploadAlt, FaCheck, FaTimes, FaFileAlt } from 'react-icons/fa';

interface FileUploadProps {
    onUploadComplete: (url: string) => void;
    label?: string;
    accept?: string;
}

export default function FileUpload({ onUploadComplete, label = "Upload Document", accept = ".pdf,.doc,.docx" }: FileUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const [error, setError] = useState('');

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];

            // Basic validation
            if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
                setError('File is too large (max 5MB)');
                return;
            }

            setFile(selectedFile);
            setError('');
            await uploadFile(selectedFile);
        }
    };

    const uploadFile = async (currentFile: File) => {
        setUploading(true);
        setProgress(0);

        try {
            // 1. Get Presigned URL
            const { data: { uploadUrl, fileUrl } } = await axios.post('/api/upload', {
                filename: currentFile.name,
                filetype: currentFile.type
            });

            // 2. Upload to S3 directly
            await axios.put(uploadUrl, currentFile, {
                headers: { 'Content-Type': currentFile.type },
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.total) {
                        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        setProgress(percent);
                    }
                }
            });

            setUploadedUrl(fileUrl);
            onUploadComplete(fileUrl);
        } catch (err) {
            console.error(err);
            setError('Upload failed. Please try again.');
            setFile(null); // Reset on failure
        } finally {
            setUploading(false);
        }
    };

    const removeFile = () => {
        setFile(null);
        setUploadedUrl(null);
        onUploadComplete(''); // Clear in parent
        setProgress(0);
    };

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>

            {!file ? (
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors text-center cursor-pointer bg-gray-50 hover:bg-white group">
                    <input
                        type="file"
                        accept={accept}
                        onChange={handleFileSelect}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <FaCloudUploadAlt className="mx-auto text-3xl text-gray-400 group-hover:text-blue-500 mb-2 transition-colors" />
                    <p className="text-sm text-gray-500 group-hover:text-blue-600">Click to upload CV (PDF/DOC)</p>
                    <p className="text-xs text-gray-400 mt-1">Max 5MB</p>
                </div>
            ) : (
                <div className="bg-white border rounded-lg p-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded">
                            <FaFileAlt />
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-700 truncate">{file.name}</p>
                            <p className="text-xs text-gray-500">
                                {uploading
                                    ? `Uploading... ${progress}%`
                                    : (uploadedUrl ? 'Upload Complete' : 'Pending')}
                            </p>
                        </div>
                    </div>

                    {uploading ? (
                        <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <button
                            type="button"
                            onClick={removeFile}
                            className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded transition-colors"
                        >
                            <FaTimes />
                        </button>
                    )}
                </div>
            )}

            {/* Progress Bar (Visual only during upload) */}
            {uploading && (
                <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}

            {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
        </div>
    );
}
