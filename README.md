# ama-eng

# ПРАВИЛА ПЕРЕДАЧИ studyStage в играх, где слова запрашиваются со внешнего словаря (через getWords):
В методике английского языка есть 4 этапа обучения (1, 2, 3 и 4). На каждом этапе обучения есть свой набор слов.

Во многих играх на игровой платформе есть специальная настройка "Этап обучения", в ней есть значения 1,2,3 и 4. Она сделана для того, чтобы ученик мог выбрать себе набор слов, соответствующий его уровню владения языком.

Но когда ребенок находится на любом этапе обучения, кроме первого, то будут работать определенные правила для игр, которые связаны с админкой (то есть эти игры получают оттуда слова) и в которых есть настройка "этап обучения:
если Этап 2: в игру приходят слова с текущего этапа обучения и с 1 этапа
если Этап 3: в игру приходят слова с текущего этапа обучения и со 2 этапа
если Этап 4: в игру приходят слова с текущего этапа обучения и с 3 этапа

Это нужно для того, чтобы ребенок на каждом этапе обучения тренировал АКТУАЛЬНЫЕ его уровню слова и чтобы не было ситуаций, когда ребенок на последнем 4 этапе обучения тренировал слова с 1 этапа типа "хомяк", "кошка", "мама", "папа" и так далее.

В итоге в метод getWords пропросом studyStage передаем такое значение course - 1 ? [course - 1, course] : [course]

