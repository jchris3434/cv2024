import React from 'react';

interface ButtonCvDownloadProps {
  url: string;
  filename: string;
  className?: string;
}

const ButtonCvDownload: React.FC<ButtonCvDownloadProps> = ({ url, filename, className }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className={className || 'button-cv'}>
      Télécharger mon CV
    </button>
  );
};

export default ButtonCvDownload;
