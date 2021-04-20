export class Helpers {
    public static toCurrency(value: number, currencyUnit: string, position: string = "left"): string {
        if (position == "left") {
            return currencyUnit + " " + value;
        } else if (position == "right") {
            return value + " " + currencyUnit;
        };
    };
};
