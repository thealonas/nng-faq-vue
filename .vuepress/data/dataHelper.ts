export function getPriorityHintByInt(priority: number) {
  switch (priority) {
    case 0:
      return 'Необходимо добавить приоритет (старые записи за 2018 год). Могут запросить разблокировку';
    case 1:
      return 'Взаимодействие со стеной/историями или публикация рекламы в статусе';
    case 2:
      return 'Спам на страницах/группах или оскорбления/травля';
    case 3:
      return 'Взаимодействие с обложкой или с фото группы';
    case 4:
      return 'Взаимодействие с чёрным списком/списком участников или создание сайта из сообщества';
    default:
      return 'Неизвестный';
  }
}

export function getPriorityNameByInt(priority: number) {
  switch (priority) {
    case 0:
      return 'Белый';
    case 1:
      return 'Зелёный';
    case 2:
      return 'Бирюзовый';
    case 3:
      return 'Оранжевый';
    case 4:
      return 'Красный';
    default:
      return 'Неизвестный';
  }
}

export function getPriorityColorByInt(priority: number) {
  switch (priority) {
    case 0:
      return 'white';
    case 1:
      return 'green';
    case 2:
      return 'teal';
    case 3:
      return 'orange';
    case 4:
      return 'red';
    default:
      return 'white';
  }
}
