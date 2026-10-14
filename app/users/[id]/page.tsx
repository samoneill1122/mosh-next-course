import { notFound } from 'next/navigation';
import React from 'react'
import { use } from 'react';

interface Props {
    params: Promise<{id: number}>
}

const UserDetailPage = ({params}: Props) => {
    const {id} = use(params);
    if (id > 10) notFound();
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage