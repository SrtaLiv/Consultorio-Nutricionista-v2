import Link from 'next/link';

const Copyright = () => {
    return (
        <div className="w-full flex items-center justify-center bg-pink-300">
            <div className="bg-pink-300 p-2 ">
                <p className="text-center text-pink-800 text-sm">
                    Copyright © {new Date().getFullYear()} - Hecho por{' '}
                    <Link
                        href="https://www.instagram.com/oliviatodesco/"
                        target="_blank"
                        rel="noopener"
                        className="hover:underline text-pink-00"
                    >
                        Ana Olivia Todesco
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Copyright;
