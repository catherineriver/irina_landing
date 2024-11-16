import styles from "@/app/page.module.css";

const tariffs = {
    "tariffs": [
        {
            "name": "Самостоятельный",
            "price": 80,
            "original_price": 110,
            "description": [
                "Уроки",
                "Презентации",
                "Эфир",
                "Возможность участвовать в лотерее",
                "Чат поддержки"
            ],
            "closed": [
                "Работа в личном чате с коучем",
                "Персональные рекомендации от Ирины",
                "Разбор домашних заданий"
            ],
            "recommended_for": [
                "Тем, кто чувствует усталость и нехватку энергии",
                "Тем, кто не знает, как себя зажигать и мотивировать",
                "Тем, кто переживает выгорание или уже сталкивался с ним раньше",
                "Тем, кто обладает сильной эмпатией и кому сложно отделить свои эмоции от чужих",
                "Тем, чья работа связана с постоянным взаимодействием с людьми",
                "Тем, кому достаточно общих обсуждений заданий и поддержки в чате"
            ],
            "link": "https://buy.stripe.com/4gwaHg6ZCeds5gIdQU"
        },
        {
            "name": "С коучем (10 мест)",
            "price": 200,
            "original_price": 240,
            "description": [
                "Уроки",
                "Презентации",
                "Эфир",
                "Возможность участвовать в лотерее",
                "Чат поддержки",
                "Работа в личном чате с коучем",
                "Персональные рекомендации от Ирины",
                "Индивидуальный разбор домашних заданий"
            ],
            "recommended_for": [
                "Тем, кто сейчас находится в состоянии выгорания или уже переживал его",
                "Руководителям команд или владельцам бизнеса",
                "Тем, чья работа связана с постоянным взаимодействием с людьми",
                "Тем, кто стремится достичь максимальных результатов"
            ],
            "note": "Обратная связь всегда объемней, чем просто разбор заданий.",
            "link": "https://buy.stripe.com/4gw02C97K0mC4cE3ch"
        }
    ]
}

const PlansList = () => {
    return (
        <>
            <section className={styles.container} id="join">
                <h2 className={styles.centered}>Тарифы</h2>
                <div className={styles.plans}>
                    {tariffs.tariffs.map((tariff, index) => (
                        <div key={index} className={styles.plan}>
                            <h2>{tariff.name}</h2>
                            <p style={{fontWeight: "bold", fontSize: "26px", color: "green", textAlign: "center"}}>
                                {tariff.original_price} €
                            </p>
                            <ul style={{ flexGrow: 0 }}>
                                {tariff.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                                {tariff.closed && tariff.closed.map((item, idx) => (
                                    <li className={styles.closed} style={{ color: "gray", textDecorationLine: "line-through"}} key={idx}>{item}</li>
                                ))}
                            </ul>
                            {tariff.recommended_for && (
                                <>

                                    <ul style={{flexGrow: 1}}>
                                        <h3>Рекомендуется:</h3>
                                        {tariff.recommended_for.map((recItem, idx) => (
                                            <li className={styles.recommendation} key={idx}>{recItem}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {tariff.note && <p><strong>Примечание: </strong>{tariff.note}</p>}
                            {tariff.link &&
                                        <div className={styles.buttonWrapper}>
                                            <a href={tariff.link} className={styles.button}>Выбираю </a>
                                        </div>}
                        </div>
                    ))}

                </div>
            </section>

        </>
    );
};

export default PlansList;
