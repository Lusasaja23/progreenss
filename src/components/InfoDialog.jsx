import { useRef, useEffect } from "react"

export default function InfoDialog({toggleInfoDialog, showInfoDialog}) {
    const infoDialogRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        if (showInfoDialog && infoDialogRef.current) {
            infoDialogRef.current.showModal();
        } else if (!showInfoDialog && infoDialogRef.current) {
            infoDialogRef.current.close();
        }
    }, [showInfoDialog]);

    return (
        <dialog className="infoDialog" ref={infoDialogRef}>
            <h1>INFORMACIÓN</h1>
            <article className="description">
                <h2 className="separator"><a tabIndex={0} className="reset" href="">Acerca de</a></h2>
                <section className="about">
                    <p><strong>Progreenss</strong> es la <em>barra de progreso interactiva</em> que puedes <em>modificar</em> y <em>probar</em> a tu gusto. Puedes convertirla en una serpiente, un pez, una zebra e incluso en un monstruo.</p>
                </section>
                <h2 className="separator">Tutorial</h2>
                <section className="tutorial">
                    <div className="section">
                        <h3 className="title">Sumando y Restando</h3>
                        <p>Puedes <em>interactuar</em> con <strong>Progreenss</strong> bajando y subiendo su pocentaje de carga mediante los <em>botones de atajo</em> azules en la interfaz. ¿Cómo bajar? Intenta dar <em>click derecho</em>.</p>
                    </div>
                    <div className="section">
                        <h3 className="title">Monto Inmediato</h3>
                        <p>Además, puedes <em>ingresar directamente el monto</em> que necesites mostrar en el <em>input del centro</em>, eso subira o bajara instantaneamete la barra de progreso hasta el valor que hayas indicado. Usa los <em>botones de - y +</em> para bajar el valor uno a uno, o incluso, <em>manten presionado</em> para una mayor rapidez.</p>
                    </div>
                    <div className="section">
                        <h3 className="title">Atajos</h3>
                        <p>¿No te bastaron los atajos? Pues entonces prueba los <em>ultra archi mega atajos</em> que <strong>Progreenss</strong> te ofrece, con un click podras desplazarte hasta el <em>final</em>, el <em>inicio</em> o, si quisieras, a la <em>mitad</em>.</p>
                    </div>
                    <div className="section">
                        <h3 className="title">Sonidos</h3>
                        <p>¿Notaste los sonidos? <strong>Progreenss</strong> es por defecto una serpiente, así que te molestara con su amenazante siseo, puedes <em>callarlo</em> con el <em>boton de mute</em>, arriba a la derecha. Pero tal vez querras escuchar el grandioso <em>sonido de celebración</em> cuando el progreso llegue a 100, o el <em>sonido de daño</em> al llegar a 0.</p>
                    </div>
                    {/* <div className="section">
                        <h3 className="title">Modo Personalizado</h3>
                        <p>¿Te cansaste de <strong>Progreenss</strong>? No te culpo, también me pasaría en unas horas. Para eso se añaden <em>funciones extras</em> que te permitiran <em>personalizar</em> la barra de progreso a tu gusto, incluso <em>crear una propia</em>. Pero sobre estas opciones te hablo en el <a href="" target="_blank" rel="noopener noreferrer"><strong>repositorio</strong></a> más a fondo.</p>
                        <button className="more">Aprender más</button>
                    </div> */}
                </section>
            </article>
            <button className="close" onClick={() => toggleInfoDialog(false)}>Cerrar</button>
        </dialog>
    )
}