import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const PrintCookies = () => {
  useEffect(() => {
    // Get all cookies as an object
    const allCookies = Cookies.get();
    console.log("All Cookies: ", allCookies);

    // Get a specific cookie by name
    const specificCookie = Cookies.get('cookieName'); // Replace 'cookieName' with the actual cookie name
    console.log("Specific Cookie: ", specificCookie);
  }, []);

  return (
    <div>
      <h1>Check the console for cookies</h1>
    </div>
  );
};

export default PrintCookies;