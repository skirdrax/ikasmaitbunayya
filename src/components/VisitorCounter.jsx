import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [views, setViews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // PAKAI API INI PASTI JALAN
        const response = await fetch(
          'https://api.countapi.xyz/hit/ikasmaitbunayya/visitors',
        );
        const data = await response.json();

        console.log('✅ Data dari API:', data); // Cek di console
        setViews(data.value);
      } catch (error) {
        console.error('❌ Error:', error);
        // Fallback
        const saved = localStorage.getItem('ika_bunayya_views');
        setViews(saved ? parseInt(saved) : 0);
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, []);

  if (loading) {
    return <div className="visitor-counter">Loading...</div>;
  }

  return (
    <div className="visitor-counter">
      <div className="visitor-header">
        <span className="visitor-title">Visitor Counter</span>
      </div>
      <div className="visitor-item">
        <span className="visitor-label">Total Visitors</span>
        <span className="visitor-value">{views?.toLocaleString() || 0}</span>
      </div>
    </div>
  );
}
