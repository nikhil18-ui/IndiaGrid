import ChromaGrid from './component/ChromaGrid.jsx';
import './App.css'

const DEFAULT_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1659126574791-13313aa424bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    title: 'KARNATKA',
    subtitle: 'Mysore Palace',
    accent: '#ff8a4c'
  },
  {
    image: 'https://www.namasteindiatrip.com/assets/images/gallery/ornamental-temple-mansion-architecture.webp?v=1785486434',
    title: 'JHARKHAND',
    subtitle: 'Deoghar Temple',
    accent: '#ff5a36'
  },
  {
    image: 'https://images.unsplash.com/photo-1645805666586-79e9b8ed0bbb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    title: 'MAHARASHTRA',
    subtitle: 'Taj Hotel',
    accent: '#a98bff'
  },
  {
    image: 'https://images.unsplash.com/photo-1595433306946-233f47e4af3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    title: 'Tamil Nadu',
    subtitle: 'Scene',
    accent: '#ffb27a'
  },
  {
    image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    title: 'Rajsthan',
    subtitle: 'Hawa Mehal',
    accent: '#ff7eb6'
  },
  {
    image: 'https://images.unsplash.com/photo-1662376107358-21296a9234f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    title: 'Uttar Pradesh',
    subtitle: 'Virndavan',
    accent: '#7cc4ff'
  }
];

function App() {
  

  return (
    <>
    
<ChromaGrid items={DEFAULT_ITEMS } columns={3} radius={260}
    reveal="spotlight"
    
    minCardWidth={180}
    gap={12}

    aspectRatio="3 / 2"
    cardRadius={22}
    showInfo
    frame={false}
    softness={0.6}
    damping={0.45}
    fadeOut={0.6}
    grayscale={1}
    dim={0.12}
    glow={0.5}
    borderGlow={1}
/>
    </>
  )
}

export default App
