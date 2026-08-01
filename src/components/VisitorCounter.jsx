import { useEffect } from 'react';

export default function VisitorCounter() {
  useEffect(() => {
    // Script auth
    const script1 = document.createElement('script');
    script1.src =
      'https://www.freevisitorcounters.com/auth.php?id=6e36f5cfb3c336b6a85e11e2ff08c5ec9d236822';
    script1.async = true;

    // Script counter
    const script2 = document.createElement('script');
    script2.src =
      'https://www.freevisitorcounters.com/en/home/counter/1609836/t/0';
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <a
        href="https://www.counters-free.net/"
        target="_blank"
        rel="noopener noreferrer">
        Free Counters
      </a>
    </div>
  );
}
