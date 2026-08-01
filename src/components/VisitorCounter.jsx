import { useEffect, useRef } from 'react';

export default function VisitorCounter() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Kosongkan container
      containerRef.current.innerHTML = '';

      // SCRIPT API PERTAMA (ID: 1609833)
      const script1 = document.createElement('script');
      script1.src =
        'https://www.freevisitorcounters.com/auth.php?id=3d2a46c5f887c80ce0d58517e842a3f868ab831c';
      script1.async = true;

      // SCRIPT API KEDUA (ID: 1609833)
      const script2 = document.createElement('script');
      script2.src =
        'https://www.freevisitorcounters.com/en/home/counter/1609833/t/0';
      script2.async = true;

      containerRef.current.appendChild(script1);
      containerRef.current.appendChild(script2);
    }
  }, []);

  return <div ref={containerRef} className="visitor-counter" />;
}
