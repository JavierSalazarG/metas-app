
function Principal({ children }) {
    return (
        <>
            <sidenav>
                <a href="/listar">Listar</a>
                <a href="/crear">Crear</a>
            </sidenav>
            <main>
                {children}
            </main>
        </>
    );
}

export default Principal;
