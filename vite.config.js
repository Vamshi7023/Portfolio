import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resumeUploadPlugin() {
  return {
    name: 'resume-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-resume', (req, res, next) => {
        if (req.method === 'POST') {
          const chunks = [];
          req.on('data', (chunk) => chunks.push(chunk));
          req.on('end', () => {
            try {
              const buffer = Buffer.concat(chunks);
              const targetDir = path.resolve(__dirname, 'public');
              if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
              }
              const targetFile = path.resolve(targetDir, 'resume.pdf');
              fs.writeFileSync(targetFile, buffer);

              res.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              });
              res.end(
                JSON.stringify({
                  success: true,
                  message: 'Resume updated directly on disk in public/resume.pdf!',
                  size: buffer.length,
                  timestamp: new Date().toISOString()
                })
              );
            } catch (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), resumeUploadPlugin()],
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
