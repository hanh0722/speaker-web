export const convertFileToUrl = (file: File) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        reject(err);
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const convertImageToTemplate = async (file: File) => {
  const base64Image = await convertFileToUrl(file);
  if (!base64Image) {
    return null;
  }
  return (
    `<div>
      <p>Loading...</p>
      <img src="${base64Image}" alt=""/>
    </div>`
  )
};

