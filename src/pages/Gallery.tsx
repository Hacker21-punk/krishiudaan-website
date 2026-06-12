import { useState } from 'react';

const galleryImages = [
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/WhatsApp%20Image%202024-05-18%20at%2009.40.59_KyKVB65cnm.jpeg?updatedAt=1718448115896',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/WhatsApp%20Image%202024-05-18%20at%2011.12.17_V-G7rejyP.jpeg?updatedAt=1718448115891',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/WhatsApp%20Image%202024-06-10%20at%2009.52.54_Of0HpHvvqA.jpeg?updatedAt=1718448115777',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/WhatsApp%20Image%202024-06-05%20at%2013.50.35_ze2e21IQs.jpeg?updatedAt=1718448115704',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0036_NCZWUNJZFi.jpg?updatedAt=1718452077512',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0035_oWx0tLDi9z.jpg?updatedAt=1718452077410',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0034_LUDMXXNQK.jpg?updatedAt=1718452077073',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0033_XjdjjAJzC7.jpg?updatedAt=1718452075331',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0032_XbhDnEPylE.jpg?updatedAt=1718452075138',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240528_134410_yQTBmcLUD6.jpg?updatedAt=1718452074678',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240529_135449_9mgJU5-plK.jpg?updatedAt=1718452074666',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240522_101145_QtCPcjNRiW.jpg?updatedAt=1718452074660',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240523_082837_Rdk3CrtqdY.jpg?updatedAt=1718452074434',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240607_135827_DIZ1_utabk.jpg?updatedAt=1718452074419',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0028_f2Ov4Gdvsm.jpg?updatedAt=1718452074172',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0029_JdRLACdWhn.jpg?updatedAt=1718452074177',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240524_100726_Q6rEzti03.jpg?updatedAt=1718452073611',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240521_162750_xtlRbnvrT.jpg?updatedAt=1718452072416',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0037_jmAe8jysj.jpg?updatedAt=1718452072167',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0033__66GSS_U2w.jpg?updatedAt=1718449296567',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0028_EjVS-TgXLH.jpg?updatedAt=1718449296480',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0032_UwGPmklJ6q.jpg?updatedAt=1718449296211',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0037_JV3f3RtIvx.jpg?updatedAt=1718449296216',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0036_rnrmT85R5r.jpg?updatedAt=1718449296132',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0035_kkpoIiiFYT.jpg?updatedAt=1718449296186',
];

export default function Gallery() {
  const [sel, setSel] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)' }}>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Gallery</h1>
          <p className="text-lg text-white/60 max-w-xl">Our Work in Action — Drone Spraying Operations Across India</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSel(i)}
                style={{ aspectRatio: '1' }}
              >
                <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {sel !== null && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setSel(null)}>
            <button className="absolute top-6 right-6 text-white/70 hover:text-white w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-white/20" onClick={() => setSel(null)}>
              <i className="fas fa-times text-xl"></i>
            </button>
            <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white w-14 h-14 bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-white/20" onClick={(e) => { e.stopPropagation(); setSel(sel === 0 ? galleryImages.length - 1 : sel - 1); }}>
              <i className="fas fa-chevron-left text-2xl"></i>
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white w-14 h-14 bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-white/20" onClick={(e) => { e.stopPropagation(); setSel((sel + 1) % galleryImages.length); }}>
              <i className="fas fa-chevron-right text-2xl"></i>
            </button>
            <div className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <img src={galleryImages[sel]} alt="" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
              <div className="text-center mt-4 text-white/50 text-sm font-medium">{sel + 1} / {galleryImages.length}</div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
