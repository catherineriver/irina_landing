import styles from "@/app/page.module.css";

const tariffs = {
    "tariffs": [
        {
            "name": "Самостоятельный",
            "price": 65,
            "original_price": 110,
            "description": [
                "Уроки",
                "Презентации",
                "Эфир",
                "Возможность участвовать в лотерее",
                "Чат поддержки"
            ]
        },
        {
            "name": "С коучем",
            "price": 180,
            "original_price": 240,
            "description": [
                "Уроки",
                "Презентации",
                "Эфир",
                "Возможность участвовать в лотерее",
                "Чат поддержки",
                "Работа в личном чате с коучем",
                "Персональные рекомендации от Ирины",
                "Разбор домашних заданий"
            ],
            "recommended_for": [
                "Те, кто в выгорании или выгорал когда-то",
                "Руководители команд или бизнеса",
                "Те, кто работает с людьми",
                "Те, кто хочет получить максимальный результат"
            ],
            "note": "Обратная связь всегда объемней, чем просто разбор заданий."
        }
    ]
}

const PlansList = () => {
    return (
        <>
            <section className={styles.container}>
                <h2 className={styles.centered}>Тарифы</h2>
                <div className={styles.plans}>
                    {tariffs.tariffs.map((tariff, index) => (
                        <div key={index} className={styles.plan}>
                            <h2>{tariff.name}</h2>
                            <p style={{fontWeight: "bold", fontSize: "26px", color: "green", textAlign: "center"}}>
                                {tariff.price} € <span
                                style={{textDecoration: "line-through", color: "gray"}}>{tariff.original_price} €</span>
                            </p>
                            <ul>
                                {tariff.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {tariff.recommended_for && (
                                <>
                                    <h3>Рекомендуется для:</h3>
                                    <ul>
                                        {tariff.recommended_for.map((recItem, idx) => (
                                            <li key={idx}>{recItem}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {tariff.note && <p><strong>Примечание: </strong>{tariff.note}</p>}

                            <div className={styles.buttonWrapper}>
                                <a href="#join" className={styles.button}>Выбираю </a>
                            </div>
                        </div>
                    ))}

                </div>
                <h2 style={{textAlign: "center"}}>Повышение цены 3 ноября! Успей забрать курс по самой выгодной
                    стоимости!</h2>

            </section>

        </>
    );
};

export default PlansList;
