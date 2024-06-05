'use client'

import { PlusOutlined } from '@ant-design/icons'
import { Upload } from 'antd'
import aws from 'aws-sdk'

const props = {
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
    aws.config.update({
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
      region: 'ap-northeast-2',
      signatureVersion: 'v4'
    })

    const S3 = new aws.S3()
    console.log('DEBUG filename', file.name)
    console.log('DEBUG file type', file.type)

    const objParams = {
      Bucket: 'bucket_name',
      Key: `email@gmail.com/${file.name}`,
      Body: file,
      ContentType: file.type // TODO: You should set content-type because AWS SDK will not automatically set file MIME
    }

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
          onError()
          console.log('Something went wrong')
          console.log(err.code)
          console.log(err.message)
        } else {
          onSuccess(data.response, file)
          console.log('SEND FINISHED')
        }
      })
  }
}

export default function UploadButton() {
  return (
    <Upload {...props}>
      <button style={{ border: 0, background: 'none' }} type='button'>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>파일 업로드</div>
      </button>
    </Upload>
  )
}
