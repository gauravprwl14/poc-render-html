import React from "react";

interface PDFProps {
  content: string;
}

const PDF: React.FC<PDFProps> = ({ content }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <p className="text-lg text-gray-800">{content}</p>
    </div>
  );
};

export default PDF;
