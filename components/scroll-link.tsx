'use client'

import { ReactNode } from 'react'

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}

export function ScrollLink({ href, children, className, target, rel }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a href={href} className={className} target={target} rel={rel} onClick={handleClick}>
      {children}
    </a>
  )
}
