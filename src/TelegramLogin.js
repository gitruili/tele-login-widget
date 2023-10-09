// src/components/TelegramLogin.js

import React, { useEffect } from 'react';

const TelegramLogin = () => {

    function onTelegramAuth(user) {
        alert(user.id);
    };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "ruili81bot"); // replace with your bot's username (without @)
    script.setAttribute("data-size", "large");
    // script.setAttribute("data-radius", "10");
    script.setAttribute("data-onauth", "onTelegramAuth(user)"); // replace with your server's auth URL
    script.setAttribute("data-request-access", "write");
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div id="telegram-login"></div>
  );
};

export default TelegramLogin;
