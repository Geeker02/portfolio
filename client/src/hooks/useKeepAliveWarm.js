import { useState, useEffect } from 'react';

/**
 * FREE-02 Cold-Start Mitigation Hook
 * Issues an asynchronous non-blocking GET /api/v1/health request upon initial mount
 * to awaken the free-tier backend container (e.g., Render) while the visitor reads the Hero/About sections.
 */
export const useKeepAliveWarm = () => {
  const [backendStatus, setBackendStatus] = useState('checking'); // 'checking' | 'online' | 'cold-starting' | 'error'
  const [responseTime, setResponseTime] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const startTime = performance.now();

    const warmBackend = async () => {
      try {
        setBackendStatus('checking');

        // Set a timeout controller in case the container is waking from sleep (can take up to 45s on Render free tier)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          if (isMounted) setBackendStatus('cold-starting');
        }, 3000);

        const response = await fetch('/api/v1/health', {
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const duration = Math.round(performance.now() - startTime);
          if (isMounted) {
            setResponseTime(duration);
            setBackendStatus('online');
          }
        } else {
          if (isMounted) setBackendStatus('error');
        }
      } catch (err) {
        if (isMounted) {
          // In local dev without server running or network drop
          setBackendStatus('offline');
        }
      }
    };

    warmBackend();

    return () => {
      isMounted = false;
    };
  }, []);

  return { backendStatus, responseTime };
};
