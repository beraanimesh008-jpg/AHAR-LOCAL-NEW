import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { app } from './server/app';

const currentDir =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));
const rootDir =
  path.basename(currentDir) === 'dist-server'
    ? path.resolve(currentDir, '..')
    : currentDir;
const rawPort = process.env.PORT;
const PORT: number | string = rawPort
  ? (/^\d+$/.test(rawPort) ? Number(rawPort) : rawPort)
  : 3000;

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(rootDir, 'dist');
    const distIndex = path.join(distPath, 'index.html');

    let isBuildingFrontend = false;
    if (!fs.existsSync(distIndex)) {
      isBuildingFrontend = true;
      console.warn('[Server] dist/index.html missing in production; building Vite frontend in background...');
      import('vite')
        .then(({ build }) => build())
        .then(() => {
          console.log('[Server] Background Vite frontend build completed.');
        })
        .catch((err) => {
          console.error('[Server] Background Vite build failed:', err);
        })
        .finally(() => {
          isBuildingFrontend = false;
        });
    }

    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      if (fs.existsSync(distIndex)) {
        return res.sendFile(distIndex);
      }
      if (isBuildingFrontend) {
        return res
          .status(200)
          .set('Content-Type', 'text/html; charset=utf-8')
          .send(
            '<!doctype html><html><head><meta http-equiv="refresh" content="3"><title>AharLocal Starting...</title></head><body style="font-family:sans-serif;text-align:center;padding:48px;"><h2>AharLocal is finishing initial setup...</h2><p>Page will reload automatically in a few seconds.</p></body></html>'
          );
      }
      return res.status(500).send('Frontend build not found. Run "npm run build" in Hostinger Build Command.');
    });
  }

  const onListening = () => {
    console.log(`🚀 AharLocal Server running on port ${PORT}`);
  };

  if (typeof PORT === 'number') {
    app.listen(PORT, '0.0.0.0', onListening);
  } else {
    app.listen(PORT, onListening);
  }
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
