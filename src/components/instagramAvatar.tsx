"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface InstagramAvatarProps {
  username: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function InstagramAvatar({ 
  username, 
  fallbackSrc = "/user_placeholder.svg", 
  width = 64, 
  height = 64, 
  className = "" 
}: InstagramAvatarProps) {
  const [avatarSrc, setAvatarSrc] = useState<string>(fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchInstagramAvatar = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        const instagramAvatarUrl = `https://www.instagram.com/${username}/?__a=1&__d=dis`;
        
        const cdnAvatarUrl = `https://instagram.com/${username}/media/?size=l`;
        
        const response = await fetch(`/api/instagram-avatar?username=${username}`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.avatarUrl) {
            setAvatarSrc(data.avatarUrl);
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error('Error fetching Instagram avatar:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchInstagramAvatar();
    }
  }, [username]);

  const handleImageError = () => {
    setHasError(true);
    setAvatarSrc(fallbackSrc);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div 
          className="animate-pulse bg-gray-600 rounded-full"
          style={{ width, height }}
        />
      )}
      <Image
        src={avatarSrc}
        alt={`${username} avatar`}
        width={width}
        height={height}
        draggable={false}
        className={`pointer-events-none rounded-full object-cover ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        onError={handleImageError}
        unoptimized
      />
    </div>
  );
}
