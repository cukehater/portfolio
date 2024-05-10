'use client'

import { FormEvent, useState } from 'react'
// import ImageUpload from '../../../components/ImageUpload'

export default function WritePage() {
  const [file, setFile] = useState<File | undefined>()
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  //   e.preventDefault()

  //   const { url: response } = await fetch(
  //     `/api/gallery/upload?file=${file?.name}`
  //   ).then(res => res.json())

  //   const formData = new FormData()
  //   Object.entries({ ...response.fields, file }).forEach(([key, value]) => {
  //     formData.append(key, value)
  //   })

  //   await fetch(response.url, {
  //     method: 'POST',
  //     body: formData
  //   })
  // }

  const handleFile = (file: File) => {
    setFile(file)
  }

  return (
    <>
      <h1>WRITE 페이지</h1>
      <form
      //onSubmit={handleSubmit}
      >
        <ul>
          <li>
            제목 : <input name='title' type='text' />
          </li>
          <li>
            카테고리 :{' '}
            <select name='category'>
              <option value='WEB'>WEB</option>
              <option value='SHOP'>SHOP</option>
              <option value='TOY'>TOY</option>
            </select>
          </li>
          <li>
            날짜 : <input name='startDate' type='date' /> ~ <input name='endDate' type='date' />
          </li>
          <li>
            기여도 : <input name='contribution' type='text' />
          </li>
          <li>
            링크 : <input name='linkUrl' type='text' />
          </li>
          <li>
            설명 : <textarea name='content' />
          </li>
          <li>{/* <ImageUpload onFile={handleFile} /> */}</li>
        </ul>

        <button>등록하기</button>
      </form>
    </>
  )
}
