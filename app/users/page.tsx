import React, { Suspense, use } from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props {
  searchParams: Promise<{sortOrder: string}>
}

const UsersPage = ({searchParams}: Props) => {
  const {sortOrder} = use(searchParams);

  return (
    <>
    <h1>Users</h1>
    <Link href="/users/new" className="btn">New User</Link>
    <Suspense fallback={<p>Loading...</p>}>
      <UserTable sortOrder={sortOrder} />
    </Suspense>
    </>
  )
}

export default UsersPage