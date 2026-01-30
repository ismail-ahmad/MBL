'use client'


import React, { useState, useRef, ChangeEvent } from 'react';

// Helper: Format file size
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

interface HomeFormProps {
  styles?: React.CSSProperties;
}

export default function HomeForm({ styles }: HomeFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
  };

  const handleAttachClick = () => {
    // Trigger file input click
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <form
      style={styles}
      method="POST"
      action="submit.php"
      className="homeContactUsForm"
    >
      <input type="text" name="Name" placeholder="Name" autoComplete="true" />
      <input
        type="email"
        name="Email"
        id="emailInput"
        placeholder="Email*"
        autoComplete="true"
        required
      />
      <input
        type="tel"
        name="Phone Number"
        id="phoneNumberInput"
        placeholder="Phone Number*"
        autoComplete="true"
        required
      />
      <textarea name="Message" placeholder="Message"></textarea>

      {/* File Upload Section */}
      <div className="fileUploadContainer">
        {/* Custom "Attach Files" button */}
        <button
          type="button"
          onClick={handleAttachClick}
          className="fileTrigger"
          style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'black',
            fontWeight: 500,
            fontSize: '16px',
            padding: 0,
          }}
          aria-label="Attach files"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
            data-ux="Icon"
            data-aid="paperclip"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6 11.6L17 13l-5.9 5.9c-1.3 1.3-2.9 1.9-4.6 1.9-1.7 0-3.2-.7-4.5-2-2.5-2.5-2.5-6.6 0-9.2l7.1-7.1.1-.1c1.9-2 5.1-2 7.1 0l.1.1c2 2 2 5.1 0 7.1l-6.9 6.6c-.7.7-1.6 1.1-2.5 1.2h-.3c-.9 0-1.7-.3-2.2-.9-.7-.7-1-1.6-.9-2.6.1-.9.5-1.8 1.2-2.5l5.5-5.8L11.7 7l-5.5 5.9c-.4.4-.6.8-.6 1.3 0 .2 0 .7.3 1 .3.3.7.3 1 .3.4 0 .9-.3 1.3-.6L15 8.2C16.2 7 16.2 5.1 15 4l-.1-.1c-1.2-1.2-3.1-1.2-4.3 0l-.7.7-6.5 6.5c-1.8 1.8-1.8 4.6 0 6.3 1.8 1.7 4.6 1.8 6.3 0l5.9-5.8z"
            ></path>
          </svg>
          <span>Attach Files</span>
        </button>

        {/* Hidden file input */}
        <input
          type="file"
          name="Attachments"
          ref={fileInputRef}
          style={{ display: 'none' }}
          id="formAttachments"
          multiple
          accept=".jpg,.jpeg,.jpe,.png,.gif,.mp4,.m4a,.vid,.qt,.mov,.mpeg,.mpga,.mp2,.mp2a,.mp3,.m2a,.m3a,.msvideo,.ogg,.3gpp,.webm,.webp,.flac,.wav,.tiff,.mkv,.mk3d,.mks,.doc,.docx,.dot,.xls,.xlsx,.ppt,.pptx,.odp,.odt,.potx,.ppsx,.pdf,.txt,.text,.conf,.def,.list,.log,.in,.ini,.zip,.otf,.woff,.woff2,.csv,.rtf"
          onChange={handleFileChange}
        />

        {/* File count */}
        <div style={{ fontSize: '12px', color: 'rgb(81, 87, 89)' }}>
          Attachments ({files.length})
        </div>
      </div>

      {/* File list */}
      <ul className="file-list" style={{ listStyle: 'none', padding: 0, marginTop: '8px', paddingBottom: '24px'}}>
        {files.map((file, index) => (
          <li
            key={`${file.name}-${index}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #eee',
              padding: '16px 24px',
              margin: '0 0 8px',
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              fontFamily: 'var(--font-source-sans-3)',
              color: '#181819',
              fontWeight: 300
            }}
          >
            <span>{file.name}</span>
            <span>{formatFileSize(file.size)}</span>
          </li>
        ))}
      </ul>

      <button
        id="contactUsFormSubmitButton"
        className="contactUsFormSubmitButton"
        type="submit"
        style={{marginBottom: '24px', letterSpacing: '1.2', fontWeight: 600}}
      >
        SEND MESSAGE
      </button>
      <p style={{color: 'black', fontSize: '12px', fontFamily: 'var(--font-source-sans-3)', textAlign: 'center', padding: '8px 0 16px'}}>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" style={{color: 'black', fontWeight: 400}}>Privacy Policy</a> and <a href="https://policies.google.com/terms" style={{color: 'black', fontWeight: 400}}>Terms of Service</a> apply.</p>
    </form>
  );
}