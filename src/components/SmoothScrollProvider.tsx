'use client';

import { useSmoothScroll } from '@/utils/smoothScroll';

export function SmoothScrollProvider({ children }) {
  useSmoothScroll();
  return <>{children}</>;
}
