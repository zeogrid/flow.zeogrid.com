"use client"
import { useState, useEffect } from 'react';
import { Button } from './ui/button'; 
import { X } from 'lucide-react';  
import Link from 'next/link';

const NotificationBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const hasSeenNotification = localStorage.getItem('hasSeenNotification');
    if (hasSeenNotification === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false); 
    localStorage.setItem('hasSeenNotification', 'true');  
  };

  if (!isVisible) return null;  

  return (
    <div className="py-1 border-b bg-primary flex items-center justify-center text-xs relative">
      <span>Contribute to the application. </span>
      <Link href={"/"}>
        <Button className="p-0 px-1 text-foreground text-xs" variant={"link"}>
          Click Here
        </Button>
      </Link>
      <Button
        size={"icon"}
        variant={"ghost"}
        className="absolute max-md:right-7 right-4 h-4 w-4 items-center justify-center"
        onClick={handleClose} 
      >
        <X className="h-full w-full" />
      </Button>
    </div>
  );
};

export default NotificationBar;
