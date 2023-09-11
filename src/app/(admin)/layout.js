export default function AdminLayout({children}){
    return(
        <section>
            <div>
                <ul>
                    <li>Admin Layout tem 1</li>
                    <li>Admin Layout item 2</li>
                    <li>Admin Layout item 3</li>
                </ul>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}