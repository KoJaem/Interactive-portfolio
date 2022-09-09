import { useRouter } from 'next/router'
import React from 'react'

export const DetailPage = () => {
  const router = useRouter();
  const {project} = router.query;
  return <div>{project}</div>;

}
