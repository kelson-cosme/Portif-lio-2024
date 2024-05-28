import "./Card.css"

function Card(){
    return(
        <section className={styles.card}>
            <h3>Titulo</h3>
            <p>Texto descritivo do projeto</p>

            <div className={styles.card_footer}>
                teste
            </div>

        </section>
    )
}

export default Card