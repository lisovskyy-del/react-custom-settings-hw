import React from 'react';
import Article from './Article';
import type {ArticleData} from './types';

const sampleArticle: ArticleData = {
  title: 'Як будувати адаптивні компоненти в React',
  author: 'Олексій Петренко',
  publicationDate: '2026-10-13',
  content:
    'React разом із TypeScript дозволяє створювати надійні та гнучкі інтерфейси. Використання типів запобігає помилкам під час передачі даних, а CSS Flexbox робить адаптивність простою для реалізації.',
};

const App: React.FC = () => {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2>Приклад 1: Зображення справа, заголовок по центру, світлий фон</h2>

      <Article
        data={sampleArticle}
        fontConfig={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#1a1a1a",
          fontSize: "17px",
        }}
        mediaConfig={{
          backgroundColor: "#f4f6f8",
          imageUrl: "https://picsum.photos/600/400",
          imageAlt: "React & TypeScript",
        }}
        layoutConfig={{
          titleAlign: "center",
          imagePosition: "right",
        }}
      />

      <h2>Приклад 2: Зображення зліва, темна тема</h2>
      <Article
        data={{
          ...sampleArticle,
          title: "ТЕМНА ТЕМА ТА КАРТИНКА ЗЛІВА",
        }}
        fontConfig={{
          fontFamily: "Georgia, serif",
          color: "#e0e0e0",
          fontSize: "16px",
        }}
        mediaConfig={{
          backgroundColor: "#1e1e1e",
          imageUrl: "https://picsum.photos/600/401",
          imageAlt: "Темна тема",
        }}
        layoutConfig={{
          titleAlign: "left",
          imagePosition: "left",
        }}
      />
    </main>
  )
}

export default App