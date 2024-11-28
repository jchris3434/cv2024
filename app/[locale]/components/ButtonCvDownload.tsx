import React from 'react';
import { useI18n } from "@/locales/client";

interface ButtonCvDownloadProps {
  readonly url: string;
  readonly filename: string;
  readonly className?: string;
}

const ButtonCvDownload: React.FC<ButtonCvDownloadProps> = ({ url, filename, className }) => {
  const t = useI18n();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className={className ?? 'button-cv'}>
      {t('buttonCV.downloadResume')} 
    </button>
  );
};

export default ButtonCvDownload;
