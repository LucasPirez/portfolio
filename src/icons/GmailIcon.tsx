import * as React from 'react';

const GmailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    {...props}
  >
    <path
      fill="#f55376"
      d="M12 22.854V10.445l12 9 12-9v12.409l-12 9-12-9z"
    />
    <path
      fill="#6c19ff"
      d="m12 22.854-9-6.75v21.032A2.863 2.863 0 0 0 5.864 40H12V22.854z"
    />
    <path
      fill="#eb0000"
      d="M12 10.445 9.873 8.85C7.038 6.726 3 8.745 3 12.286v3.818l9 6.75V10.445z"
    />
    <path
      fill="#3ddab4"
      d="M36 22.854V40h6.136A2.863 2.863 0 0 0 45 37.136V16.105l-9 6.749z"
    />
    <path
      fill="#f5bc00"
      d="M38.127 8.85 36 10.445v12.409l9-6.75v-3.818c0-3.541-4.042-5.56-6.873-3.436z"
    />
  </svg>
);

export default GmailIcon;
