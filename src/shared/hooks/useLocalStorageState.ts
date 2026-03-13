import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function readValue<T>(key: string, initialValue: T) {
  if (typeof window === 'undefined') {
    return initialValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : initialValue;
  } catch {
    return initialValue;
  }
}

export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => readValue(key, initialValue));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== key) return;
      setValue(event.newValue ? (JSON.parse(event.newValue) as T) : initialValue);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [initialValue, key]);

  return [value, setValue] as [T, Dispatch<SetStateAction<T>>];
}