import type { CSSProperties } from 'react';
import { messages } from '@/data/messages';


export default function TextCycle() {
  const n = messages.length;
  const itemDurationSeconds = 3.5;
  const totalDuration = `${n * itemDurationSeconds}s`;

  return (
    <div className="flex justify-center items-center h-full text-center">
      <div
        className="w-full text-cycle"
        style={{ ['--n']: String(n), ['--total']: totalDuration, ['--text-cycle-height']: '3.5rem' } as CSSProperties}
      >
        <div
          className="text-cycle__stack"
          style={{ animationDuration: totalDuration } as CSSProperties}
        >
          {messages.map(m => (
            <span key={m} className='text-base sm:text-lg md:text-xl subpixel-antialiased p-4 block'>
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
