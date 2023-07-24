import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';


function MyComponent () {

  const { t, i18n } = useTranslation();

  const clickHandle = async lang => {
    await i18n.changeLanguage(lang);
  }


  return  (
    <div>
        aktif dil: {i18n.language} <br/>
        <nav>
            <button onClick={() => clickHandle('tr')}>Türkçe</button>
            <button onClick={() => clickHandle('en')}>English</button>
        </nav>
        <h1>{t('Welcome to React')}</h1>
    </div> 
  );
}

export default MyComponent;