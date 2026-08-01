import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [views, setViews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(
          'https://api.countapi.xyz/hit/ikasmaitbunayya2026/visitors',
        );
        const data = await response.json();
        setViews(data.value);
      } catch (error) {
        console.error('Gagal ambil data:', error);
        // Fallback ke localStorage
        const saved = localStorage.getItem('ika_bunayya_views');
        setViews(saved ? parseInt(saved) : 0);
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, []);

  const formatNumber = (num) => {
    if (num === null || num === undefined) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  if (loading) {
    return (
      <div className="visitor-counter">
        <div className="visitor-loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="visitor-counter">
      <div className="visitor-header">
        <span className="visitor-title">Visitor Counter</span>
      </div>
      <div className="visitor-stats">
        <div className="visitor-item">
          <span className="visitor-label">Total Visitors</span>
          <span className="visitor-value">{formatNumber(views)}</span>
        </div>
      </div>
    </div>
  );
}
