import * as React from 'react';

const RunkitExample = () => {
  React.useEffect(() => {
    const el = document.createElement('script');
    el.src = 'https://embed.runkit.com/';
    el.setAttribute('data-element-id', 'code');
    document.head.appendChild(el);
    return () => {
      document.head.removeChild(el);
    };
  }, []);
  return (
    <>
      <div id="code" style={{ height: '100%', width: '100%' }}>
        {`const crypto = require('crypto');
        // Create password hash using Password based key derivative function 2
        function hashPassword(password) {
            const salt = crypto.randomBytes(16).toString('hex');
            const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
            return [salt, hash].join('$');
        }

      // Checking the password hash
      function verifyHash(password, original) {
      const originalHash = original.split('$')[1];
        const salt = original.split('$')[0];

            const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');

            if (hash === originalHash)
                return true;
            else
                return false;

      }

      let hash = hashPassword('test');
      console.log('HASH = '+hash);
      console.log(verifyHash('test',hash));
      console.log(verifyHash('test1',hash));
      `}
      </div>
    </>
  );
};

export default RunkitExample;
