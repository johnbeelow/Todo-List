//---------------------------------------------------------------------Todo List----------------------------------------------------------------------------
//Обьявляем обьект с ключами внутри
//Большими буквами наглядней, код писать быстрей (автозаполнение) читабельность кода лучше
//Есть такое правило, неизменные "const" где содержимое не будет меняться - принято писать большими буквами
const STATUS = {
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
    TO_DO: 'To Do',
}
//Хранилищем будет объект, а имена задач - ключами.
const list = {
    "create a new practice task": STATUS.IN_PROGRESS,
    "make a bed": STATUS.DONE,
    "write a post": STATUS.TO_DO,
}
// Функция changeStatus - будет менять статус задачи 
//name - это ключ. status - это статус задачи
function changeStatus(name, status) {
    list[name] = status;
}
// Функция addTask - добавляет новую задачу
function addTask(name) {
    list[name];
}
// Функция deleteTask - удаляет задачу
function deleteTask(name) {
    delete list[name];
}

// Функция showList будет выводить весь список дел в виде
// Обьект = груповая функция с стутсом
function showList() {
    let toDo = getTasksGroup(STATUS.TO_DO);
    let inProgress = getTasksGroup(STATUS.IN_PROGRESS);
    let done = getTasksGroup(STATUS.DONE);
    //Возвращаем переменные прибовлия их друг за другом
    return (toDo + inProgress + done);

}
//Функция группы
function getTasksGroup(status) {
    //Создаем переменную группы, к переменной присваимваем выражение status + двоеточие и пробел
    let group = status + ":\n";
    //Для перебора всех свойств обектов запускаем цикл key in list,
    for (let key in list) {
        // if вычесляет услвовие в скобках и запускает код
        if (list[key] === status) {
            //Код, присваеваем группе следующее выражение: группа + пробел + ключ + ';' новая строка
            //Итого к каждому ключу в обьекте будет применяться этот цикл
            group = group + "  " + key + ";\n";
        }
    }
    //Выводим группу с готовым кодом
    return group;
}

//Меняем значения задач
changeStatus('create a new practice task', STATUS.TO_DO);
changeStatus('make a bed', STATUS.TO_DO);
changeStatus('write a post', STATUS.IN_PROGRESS);
addTask('-');
changeStatus('-', STATUS.DONE);
addTask('have a walk');
deleteTask('have a walk');


console.log(showList());


