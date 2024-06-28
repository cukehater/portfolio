import { useState } from 'react'

import { PlusOutlined } from '@ant-design/icons'
import { GetProp, Image, Upload, UploadFile } from 'antd'
import { UploadProps } from 'antd/lib'
import aws from 'aws-sdk'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

const uploadButton = (
  <button style={{ border: 0, background: 'none' }} type='button'>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </button>
)

export default function FileUpload() {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
    /* {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error'
    } */
  ])

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList)

  const handleCustomRequest = ({
    file,
    onError,
    onProgress,
    onSuccess
  }: any) => {
    console.log('file', file)

    // AWS SDK 설정
    aws.config.update({
      accessKeyId: process.env.NEXT_S3_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_S3_SECRET_KEY,
      region: 'ap-northeast-2',
      signatureVersion: 'v4'
    })

    const S3 = new aws.S3()

    // 디버그 로그 추가
    console.log('DEBUG filename', file.name)
    console.log('DEBUG file type', file.type)

    const objParams = {
      Bucket: process.env.NEXT_S3_BUCKET_NAME!,
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

  return (
    <>
      <Upload
        fileList={fileList}
        listType='picture-card'
        onPreview={handlePreview}
        onChange={handleChange}
        customRequest={handleCustomRequest}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: visible => setPreviewOpen(visible),
            afterOpenChange: visible => !visible && setPreviewImage('')
          }}
          src={previewImage}
          alt={previewImage}
        />
      )}
    </>
  )
}
