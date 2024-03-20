function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stairs = '#'.repeat(i);
        console.log(spaces + stairs);
    }
}