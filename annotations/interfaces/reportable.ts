interface Reportable {
    summary(): string
}

const newCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}, Year: ${this.year}, Broken? ${this.broken}`;
    } 
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printSummary(newCivic);
