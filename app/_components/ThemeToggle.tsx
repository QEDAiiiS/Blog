"use client";
import { Button } from '@/components/ui/button'
import React from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from 'react-icons/fa'

// * =======================  THEME TOGGLE COMPONENT ======================= 
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button variant={'outline'} size={'icon'} className=' w-18 ml-3 rounded-4xl'
    onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>
        <FaMoon className=' absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0'/>
        <FaSun className=' absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100'/>
    </Button>
  );
}
