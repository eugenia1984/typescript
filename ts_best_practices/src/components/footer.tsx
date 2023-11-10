import type { FC } from 'react'

export const Footer: FC = () => (
  <footer className="text-center">
    &copy; {new Date().getFullYear()} - Practice of María Eugenia Costa
  </footer>
);
