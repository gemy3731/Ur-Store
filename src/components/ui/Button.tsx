
interface Props {
    children: React.ReactNode
    disabled?: boolean
}
const Button = ({ children, disabled }: Props) => {
    return (
        <button disabled={disabled} className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none! disabled:opacity-50!  bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full'>{children}</button>
    )
}

export default Button