import FileSaver from "file-saver";

export async function downloadFile(id, photo) {
  FileSaver.saveAs(photo, `download-${id}.jpg`);
} 
