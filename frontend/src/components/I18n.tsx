import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLanguages, setLanguage } from '../store/i18nSlice';

const I18n = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.i18n.languages);
  const currentLanguage = useSelector((state) => state.i18n.currentLanguage);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  useEffect(() => {
    dispatch(fetchLanguages());
  }, [dispatch]);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div>
      <h2>Language Management</h2>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default I18n;
