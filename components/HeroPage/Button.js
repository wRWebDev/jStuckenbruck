import Link from 'next/link'

const Button = ({ link, text }) => {
    return (
        <div data-aos="fade-up">
            <Link href={link}>
                <button>
                    {text}
                </button>
            </Link>
        </div>
    )
}

export default Button

