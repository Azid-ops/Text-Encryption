class Algorithim {
    secureKey(id) {
        return new Promise((resolve, reject) => {
            const { scrypt, randomFill, createCipheriv } = require('crypto');

            const algorithm = 'aes-192-cbc';
            const password = id;

            scrypt(password, 'salt', 24, (err, key) => {
                if (err) reject(err);
                randomFill(new Uint8Array(16), (err, iv) => {
                if (err) reject(err);

                const cipher = createCipheriv(algorithm, key, iv);
                let encrypted = '';
                cipher.setEncoding('hex');

                cipher.on('data', (chunk) => {
                    encrypted += chunk;
                });

                cipher.once('end', () => {
                    resolve(encrypted); // Resolve the promise with the encrypted value
                });

                cipher.write('Key Encrypted');
                cipher.end();
                });
            });
        });
    }
}
  
module.exports = Algorithim;
  