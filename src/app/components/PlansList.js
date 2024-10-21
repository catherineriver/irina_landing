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
                            <p>
                                <strong>Цена: </strong>
                                {tariff.price} € <span
                                style={{textDecoration: "line-through"}}>{tariff.originalPrice} €</span>
                            </p>
                            <h3>Что входит:</h3>
                            <ul>
                                {tariff.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {tariff.recommendedFor && (
                                <>
                                    <h3>Рекомендуется для:</h3>
                                    <ul>
                                        {tariff.recommendedFor.map((recItem, idx) => (
                                            <li key={idx}>{recItem}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {tariff.note && <p><strong>Примечание: </strong>{tariff.note}</p>}
                        </div>
                    ))}
                </div>
                <h2>Повышение цены 3 ноября! Успей забрать курс по самой выгодной стоимости!</h2>

                <div className={styles.buttonWrapper}>
                    <a href="#join" className={styles.button}>Присоединиться</a>
                </div>

            </section>

        </>
    );
};

export default PlansList;
