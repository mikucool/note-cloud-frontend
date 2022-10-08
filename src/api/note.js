import request from '@/utils/request'

// 上传
export function uploadNote(noteFile) {
    return request(({
        url: `/note-cloud/note/upload`,
        method: 'post',
        data: noteFile,
        headers: {
          "Content-Type":"multipart/form-data"
        }
      }))

}