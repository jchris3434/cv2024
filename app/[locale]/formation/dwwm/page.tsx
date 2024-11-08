"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

function dwwm() {

  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section>
      <button onClick={handleBackClick}>Précédent</button>
      <div>dwwm</div>
    </section>    
  )
}

export default dwwm