export const conversionsMixin = {
    methods: {
        convertGramsToPounds(grams) {
            const ouncePerGram = 0.035274;
            let totalOunces = grams * ouncePerGram;
            let pounds = Math.floor(totalOunces / 16);
            let ounces = Math.floor((totalOunces - (pounds * 16)) * 2) / 2;
            if (!isNaN(pounds) && !isNaN(ounces)) {
                return `${pounds} lbs ${ounces} oz`;
            } else if (!isNaN(pounds)) {
                return `${pounds} lbs`
            } else {
                return null;
            }
        },
        convertCMToIN(cm) {
            const inchPerCM = 0.393701;
            let inches = Math.floor(cm * inchPerCM * 2) / 2;
            if (!isNaN(inches)) {
                return `${inches} inches`
            } else {
                return null;
            }
        }
    }
}