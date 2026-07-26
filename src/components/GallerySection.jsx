const photos = ['gal1', 'gal2', 'gal3', 'gal4', 'gal5', 'gal6'];

export default function GallerySection() {
  return (
    <section className="section gallery-section" id="galeri">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow orange">Galeri</div>
          <h2>Momen yang Terekam, Kenangan yang Terjaga</h2>
          <p>Setiap foto adalah cerita kebersamaan yang terus dikenang</p>
        </div>
        <div className="gallery-grid">
          {photos.map((seed) => (
            <img
              key={seed}
              src={`https://picsum.photos/seed/${seed}/500/500`}
              alt="Galeri alumni"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
