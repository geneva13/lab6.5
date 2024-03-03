function randomNameGenerator() {
    return {
        randomName: '',

        generateName() {
            const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'William', 'Sophia'];
            const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Davis', 'Miller'];

            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

            this.randomName = `${firstName} ${lastName}`;
        }
    };
}
