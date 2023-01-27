import Link from '@/components/Link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-secondary-500 hover:text-secondary-400 dark:text-secondary-400 dark:hover:text-secondary-500">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
