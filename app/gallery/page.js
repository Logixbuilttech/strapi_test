'use client';

import { useState, useMemo } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ALL_IMAGES = [
  { id: '1', src: 'https://picsum.photos/300/200', category: 'Tech' },
  { id: '2', src: 'https://picsum.photos/200/300', category: 'Tech' },
  { id: '3', src: 'https://picsum.photos/400/300', category: 'Agriculture' },
  { id: '4', src: 'https://picsum.photos/300/400', category: 'Tourism' },
  { id: '5', src: 'https://picsum.photos/350/250', category: 'Tourism' },
  { id: '6', src: 'https://picsum.photos/250/350', category: 'Energy' },
  { id: '7', src: 'https://picsum.photos/450/300', category: 'Other' },
  // Add more varied-aspect images...
];

const CATEGORIES = ['All', 'Tech', 'Agriculture', 'Tourism', 'Energy', 'Other'];

export default function GalleryPage() {
  const [active, setActive] = useState('All');

  const images = useMemo(
    () =>
      ALL_IMAGES.filter((i) => active === 'All' || i.category === active),
    [active]
  );

  return (
    <section>
      <nav className="flex space-x-2 overflow-x-auto mb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 whitespace-nowrap rounded-full border ${
              active === cat
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="max-w-6xl mx-auto">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3, 1200: 4 }}
        >
          <Masonry gutter="16px">
            {images.map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.category}
                className="w-full rounded-lg shadow-sm hover:shadow-lg transition"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
// 'use client';

// import { useState, useMemo } from 'react';

// const ALL_IMAGES = [
//   { id: '1', src: 'https://picsum.photos/600/400', category: 'Tech' },
//   { id: '2', src: 'https://picsum.photos/400/600', category: 'Tech' },
//   { id: '3', src: 'https://picsum.photos/600/400', category: 'Agriculture' },
//   { id: '4', src: 'https://picsum.photos/400/600', category: 'Tourism' },
//   { id: '5', src: 'https://picsum.photos/600/400', category: 'Tourism' },
//   { id: '6', src: 'https://picsum.photos/400/600', category: 'Energy' },
//   { id: '7', src: 'https://picsum.photos/600/600', category: 'Other' },
//   { id: '8', src: 'https://picsum.photos/600/300', category: 'Other' },
//   { id: '9', src: 'https://picsum.photos/300/600', category: 'Other' },
//   { id: '10', src: 'https://picsum.photos/600/400', category: 'Other' },
// ];

// const CATEGORIES = ['All', 'Tech', 'Agriculture', 'Tourism', 'Energy', 'Other'];

// // Layout mapping: define grid-row and grid-column for each image by index (1-based)
// const GRID_POSITIONS = {
//   1: 'col-span-2 row-span-2',
//   2: 'col-span-1 row-span-2',
//   3: 'col-span-2 row-span-1',
//   4: 'col-span-1 row-span-1',
//   5: 'col-span-1 row-span-1',
//   6: 'col-span-1 row-span-2',
//   7: 'col-span-2 row-span-2',
//   8: 'col-span-1 row-span-1',
//   9: 'col-span-1 row-span-2',
//   10: 'col-span-1 row-span-1',
// };

// export default function GalleryPage() {
//   const [active, setActive] = useState('All');
//   const filtered = useMemo(
//     () => ALL_IMAGES.filter(img => active === 'All' || img.category === active),
//     [active]
//   );

//   return (
//     <section>
//       <nav className="flex space-x-2 mb-4 overflow-x-auto">
//         {CATEGORIES.map(cat => (
//           <button
//             key={cat}
//             onClick={() => setActive(cat)}
//             className={`px-4 py-2 rounded-full border ${
//               active === cat
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-white text-gray-700 hover:bg-blue-50'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </nav>

//       <div className="max-w-5xl mx-auto grid grid-cols-4 auto-rows-min gap-4">
//         {filtered.map((img, idx) => {
//           const pos = GRID_POSITIONS[idx + 1] || 'col-span-1 row-span-1';
//           return (
//             <div key={img.id} className={`relative overflow-hidden ${pos}`}>
//               <img
//                 src={img.src}
//                 alt={img.category}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
