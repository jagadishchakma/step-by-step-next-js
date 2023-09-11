export default function DashLayout({children}){
    return (
        <section>
            <div>
                <div>
                    <ul>
                        <li>Dashboard Layout item 1</li>
                        <li>Dashboard Layout item 2</li>
                        <li>Dashboard Layout item 3</li>
                    </ul>
                </div>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}