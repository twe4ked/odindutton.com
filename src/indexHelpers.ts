export const getPostDate = (path?: string): Date => {
  const date = path?.match(/(\d{4}-\d{2}-\d{2})/);
  if (!date) {
    throw new Error("Post date not found in file path");
  }
  const d = new Date(date[0]);
  return d;
};
