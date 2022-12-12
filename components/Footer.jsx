

export default function Footer() {
    return(
        <div className="bg-white pt-14 px-14 pb-8 mt-44 static bottom-0">
            <div className="container mx-auto">
                <div className="flex-row md:grid md:grid-cols-3">
                    <ul>
                        <li className="font-bold text-lg">ЛИЦА.Кандидаты</li>
                        <li>Найти кандидата</li>
                        <li>Попасть в базу</li>
                        <li>О сервисе</li>
                    </ul>
                    <ul>
                        <li className="font-bold text-lg">ЛИЦА.Работа</li>
                        <li>Рекрутинг</li>
                        <li>Конструктор подбора</li>
                        <li>Аналитика подбора</li>
                    </ul>
                    <ul>
                        <li className="font-bold text-lg">О портале</li>
                        <li>Поддержка</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div>
                    
                </div>
            </div>

            <div className="mt-12 border-t-2 border-[#E5E7EB]  flex justify-between">
                <p>ООО «ЛИЦА» </p>
                <p>Реквизиты | Правовая информация</p>
            </div>
        </div>
    )
}