import path from 'path';
import { v4 as uuid } from 'uuid';
import multer, { StorageEngine } from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfig {
  driver: 's3' | 'disk';

  tmpFolder: string;

  uploadsFolder: string;

  multer: {
    storage: StorageEngine;
  };

  config: {
    disk: Record<string, never>;
    s3: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = uuid();
        const fileName = `${fileHash}-${file.originalname.replace(/\s+/g, '')}`;

        return callback(null, fileName);
      },
    }),
  },

  config: {
    disk: {},
    s3: {
      bucket: process.env.AWS_BUCKET_NAME,
    },
  },
} as IUploadConfig;
