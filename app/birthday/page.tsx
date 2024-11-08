"use client";
import Link from 'next/link';

export default function Birthday() {
  return (
    <div className="text-center flex align-middle justify-center items-center font-[family-name:var(--font-geist-mono)]">
      <div className="flex-col m-4">
        <p className="text-3xl font-bold mt-2 mb-5">❤️Happy Birthday❤️</p>
        <p className="text-2xl font-bold mt-2 mb-5">❤️To my baby❤️</p>
        <p className="mb-3">You are the most brilliant and hardworking person I know, and your kindness makes the world a better place.</p>
        <p className="mb-3">Every day, you inspire me with your intelligence and determination. I’m so lucky to have someone as thoughtful and caring as you by my side.</p>
        <p className="mb-3">You light up my life with your kindness and dedication, and I am constantly amazed by how effortlessly you make everything around you beautiful.</p>
        <p className="mb-3">You are not only incredibly smart and driven, but your warmth and compassion touch everyone you meet.</p>
        <p className="mb-12">You balance strength with such grace, and your heart is as beautiful as your mind is sharp. I'm so grateful for you.</p>
        <p>
        <Link className='bg-red-400 text-red text-3xl px-14' href="/loveyou.html">❤️Click Me❤️</Link>
      </p>
      </div>

    </div>
  );
}
