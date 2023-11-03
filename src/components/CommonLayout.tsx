

import Header from './Header'
import Footer from './Footer'

export default function CommonLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

