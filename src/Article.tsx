import React, { useState } from 'react';
import type { ArticleProps } from './types';

const Article: React.FC<ArticleProps> = ({
                                           data,
                                           fontConfig,
                                           mediaConfig,
                                           layoutConfig,
                                         }) => {
  // Початкові значення беруться з props або за замовчуванням
  const [fontFamily, setFontFamily] = useState<string>(
    fontConfig?.fontFamily || 'sans-serif'
  )

  const [color, setColor] = useState<string>(fontConfig?.color || '#222222')

  const [fontSize, setFontSize] = useState<number>(
    typeof fontConfig?.fontSize === 'number'
      ? fontConfig.fontSize
      : parseInt(String(fontConfig?.fontSize || 16), 10)
  )

  const [bgColor, setBgColor] = useState<string>(
    mediaConfig?.backgroundColor || '#ffffff'
  )

  const [imageUrl, setImageUrl] = useState<string>(
    mediaConfig?.imageUrl || 'https://picsum.photos/400/300'
  )

  const [titleAlign, setTitleAlign] = useState<'left' | 'center' | 'right'>(
    layoutConfig?.titleAlign || 'left'
  )

  const [imagePosition, setImagePosition] = useState<'left' | 'right'>(
    layoutConfig?.imagePosition || 'left'
  )

  const formattedDate =
    data.publicationDate instanceof Date
      ? data.publicationDate.toLocaleDateString('uk-UA')
      : data.publicationDate

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
      <div
        style={{
          padding: '16px',
          background: '#f0f0f0',
          marginBottom: '20px',
          borderRadius: '8px',
          color: '#333',
          fontSize: '14px',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Панель керування виглядом</h3>

        <label>Шрифт: </label>
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="sans-serif">Sans-Serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
          <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
            Segoe UI
          </option>
          <option value="Georgia, serif">Georgia</option>
        </select>

        <label style={{ marginLeft: '12px' }}>Розмір ({fontSize}px): </label>
        <input
          type="range"
          min="12"
          max="24"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />

        <label style={{ marginLeft: '12px' }}>Колір тексту: </label>
        <input
          type="color"
          value={color.length === 7 ? color : '#222222'}
          onChange={(e) => setColor(e.target.value)}
        />

        <br />
        <br />

        <label>Колір фону: </label>
        <input
          type="color"
          value={bgColor.length === 7 ? bgColor : '#ffffff'}
          onChange={(e) => setBgColor(e.target.value)}
        />

        <label style={{ marginLeft: '12px' }}>URL картинки: </label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Залиште порожнім, щоб прибрати"
        />

        <br />
        <br />

        <label>Заголовок: </label>
        <button onClick={() => setTitleAlign('left')}>Зліва</button>
        <button onClick={() => setTitleAlign('center')}>По центру</button>
        <button onClick={() => setTitleAlign('right')}>Праворуч</button>

        <label style={{ marginLeft: '12px' }}>Картинка: </label>
        <button onClick={() => setImagePosition('left')}>Зліва</button>
        <button onClick={() => setImagePosition('right')}>Праворуч</button>
      </div>

      <article
        style={{
          fontFamily,
          color,
          fontSize: `${fontSize}px`,
          backgroundColor: bgColor,
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #ddd',
        }}
      >
        <h1 style={{ textAlign: titleAlign, marginTop: 0 }}>{data.title}</h1>
        <p>
          <small>
            {data.author} | {formattedDate}
          </small>
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: imagePosition === 'right' ? 'row-reverse' : 'row',
            gap: '20px',
            alignItems: 'flex-start',
          }}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              alt={mediaConfig?.imageAlt || 'Стаття'}
              style={{ width: '40%', borderRadius: '6px' }}
            />
          )}
          <div style={{ flex: 1 }}>{data.content}</div>
        </div>
      </article>
    </div>
  )
}

export default Article