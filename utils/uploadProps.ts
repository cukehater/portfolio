import aws from 'aws-sdk'

export const uploadProps = {
  multiple: false,
  onStart(file: any) {
    console.log('onStart', file, file.name)
  },
  onSuccess(ret: any, file: any) {
    console.log('onSuccess', ret, file.name)
  },
  onError(err: any) {
    console.log('onError', err)
  },
  onProgress({ percent }: any, file: any) {
    console.log('onProgress', `${percent}%`, file.name)
  },
  customRequest({
    action,
    data,
    file,
    filename,
    headers,
    onError,
    onProgress,
    onSuccess,
    withCredentials
  }: any) {
    // AWS SDK 설정
    aws.config.update({
      accessKeyId: process.env.S3_ACCESS_KEY!,
      secretAccessKey: process.env.S3_SECRET_KEY!,
      region: 'ap-northeast-2',
      signatureVersion: 'v4'
    })

    const S3 = new aws.S3()

    // 디버그 로그 추가
    console.log('DEBUG filename', file.name)
    console.log('DEBUG file type', file.type)

    const objParams = {
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: `email@gmail.com/${file.name}`,
      Body: file,
      ContentType: file.type // content-type 설정
    }

    // S3에 파일 업로드
    S3.putObject(objParams)
      .on('httpUploadProgress', function ({ loaded, total }: any) {
        onProgress(
          {
            percent: Math.round((loaded / total) * 100)
          },
          file
        )
      })
      .send(function (err: any, data: any) {
        if (err) {
          onError(err) // 에러 핸들링
          console.error('Something went wrong')
          console.error(err.code)
          console.error(err.message)
        } else {
          onSuccess(data, file) // 업로드 성공 시
          console.log('SEND FINISHED')
        }
      })
  }
}
