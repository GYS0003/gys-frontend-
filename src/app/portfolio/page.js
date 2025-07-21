import React from 'react'
import PageWrapper from '@/components/wrappers/PageWrapper';
import Portfolio from '@/components/sections/portfolio/Portfolio';

const page = () => {
  return (
     <div className="font-[family-name:var(--font-geist-sans)]">
      <PageWrapper>
        <Portfolio/>
      </PageWrapper>
    </div>
  )
}

export default page
