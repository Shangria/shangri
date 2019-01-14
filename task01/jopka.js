function tiJopka(message) {
    message = message || 'ты жопка?';
    if (confirm(message)) {
        return;
    } else {
        tiJopka('нет подтверди, что ты жопка');
    }
}