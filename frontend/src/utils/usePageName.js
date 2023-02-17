import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';

export default function usePageName(name) {
  const { changePageName } = useAppContext();
  useEffect(() => {
    changePageName(name);

    return () => {
      changePageName('');
    };
  }, []);
}
