import ExLink from './ExLink'
import classes from './ExLink.module.scss'

export default function ExLinkA ({
  href,
  children,
  className = '',
  style
}: {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties | undefined
}): JSX.Element {
  return (
    <ExLink
      href={href}
      className={`${className} ${classes['type-a']}`}
      style={style}
    >
      {children}
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className={classes['type-a-icon']}>
        <path d='M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z' />
      </svg>
    </ExLink>
  )
}
