class Study {
    static printArray<T>(params: T[]): void {
        console.log(params);
    };
}

Study.printArray<number>([1, 2, 3]);
Study.printArray<string>(["hai", "d", "ef"]);
Study.printArray<any>([1, 2, 3, "ef", true]);
