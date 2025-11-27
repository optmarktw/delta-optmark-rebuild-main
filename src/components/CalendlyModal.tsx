import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Global state to prevent duplicate script loading
let calendlyScriptLoaded = false;
let calendlyScriptLoading = false;
const scriptLoadCallbacks: (() => void)[] = [];

const loadCalendlyScript = (): Promise<void> => {
  return new Promise((resolve) => {
    if (calendlyScriptLoaded) {
      resolve();
      return;
    }
    
    if (calendlyScriptLoading) {
      scriptLoadCallbacks.push(resolve);
      return;
    }
    
    calendlyScriptLoading = true;
    
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      calendlyScriptLoaded = true;
      calendlyScriptLoading = false;
      resolve();
      scriptLoadCallbacks.forEach(cb => cb());
      scriptLoadCallbacks.length = 0;
    };
    
    document.body.appendChild(script);
  });
};

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(calendlyScriptLoaded);

  useEffect(() => {
    if (open && !calendlyScriptLoaded) {
      loadCalendlyScript().then(() => {
        setIsScriptLoaded(true);
      });
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[900px] w-[95vw] h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-bold">Book Your Free Consultation</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6 h-[calc(85vh-80px)] overflow-auto">
          {!isScriptLoaded ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse text-muted-foreground">Loading calendar...</div>
            </div>
          ) : (
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/abubakarhussein"
              style={{ minWidth: '320px', height: '700px' }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
