import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // Ganti 'ikasmaitbunayya' jadi nama unik kamu
        const response = await fetch(
          'https://api.countapi.xyz/hit/ikasmaitbunayya/visitors',
        );
        const data = await response.json();

        if (data && data.value) {
          setViews(data.value);
        }
      } catch (error) {
        console.log('API error:', error);
        // Kalo error, tetap pake data terakhir dari localStorage
        const saved = localStorage.getItem('ika_bunayya_views');
        if (saved) {
          setViews(parseInt(saved));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, []);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  if (loading) {
    return <div className="visitor-counter">Loading...</div>;
  }

  return (
    <div className="visitor-counter">
      <div className="visitor-header">Visitor Counter</div>
      <div className="visitor-value">{formatNumber(views)}</div>
    </div>
  );
}
