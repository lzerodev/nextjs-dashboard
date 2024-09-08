import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin']})

export const roboto = Roboto({
    subsets: ['latin'], 
    weight: ['100', '300', '500', '700', '900']})

export const lusitana = Lusitana({ 
  subsets: ['latin'], 
  weight: ['400', '700']})
