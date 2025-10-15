'use client';

import React, { useEffect, useState } from 'react';

export default function IframeProjectCard({ project }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only run this on the client
    setIsClient(true);
  }, []);

  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg border"
      style={{
        aspectRatio: '16/9',
        maxWidth: 1027,
        margin: '0 auto',
      }}
    >
      {isClient ? (
        <iframe
          src={project.liveUrl ?? ''}
          title={project.title}
          loading="lazy"
          className="w-full h-full border-0"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-sm text-gray-500">
          Loading preview...
        </div>
      )}
    </div>
  );
}
