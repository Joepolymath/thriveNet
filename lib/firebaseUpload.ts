import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase';

export const uploadImage = async (
  file: Blob | Uint8Array | ArrayBuffer,
  path: string
): Promise<string> => {
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytes(storageRef, file);

  return new Promise<string>((resolve, reject) => {
    uploadTask
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((downloadURL) => {
            console.log('File uploaded successfully:', downloadURL);
            resolve(downloadURL);
          })
          .catch((error) => {
            console.error('Error getting download URL:', error);
            reject(error);
          });
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        reject(error);
      });
  });
};
