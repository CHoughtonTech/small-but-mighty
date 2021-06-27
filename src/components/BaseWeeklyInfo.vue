<template>
    <router-link :to="{ name: 'weekly-updates', params: { id: week.id } }">
        <div class="info-container">
            <div class="card custom-card-border">
                <div class="card-image">
                    <figure class="image is-3by4">
                        <img :src="imageURL" alt="Week Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="@/assets/calendarDate.png" alt="Calendar Icon">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">Week {{weekNumber}}</p>
                            <p class="subtitle is-6">{{weekRange}}</p>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="@/assets/obesity.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">Weight</p>
                            <p class="subtitle is-6">{{weight}}</p>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="@/assets/ruler.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">Length</p>
                            <p class="subtitle is-6">{{length}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props: {
        week: Object
    },
    computed: {
        weekRange() {
            let weekUpdates = this.$store.getters.getUpdatesByWeek(this.week.id);
            if (weekUpdates && weekUpdates.length > 0) {
                let dateStart = new Date(weekUpdates[0].date);
                let dateEnd = new Date();
                dateEnd.setDate(dateStart.getDate() + 6);
                let firstDate = `${dateStart.getMonth() + 1}/${dateStart.getDate()}`;
                let lastDate = `${dateEnd.getMonth() + 1}/${dateEnd.getDate()}`;

                return `${firstDate} - ${lastDate}`;
            }
            return null;
        }
    },
    created() {
        this.imageURL = this.week.weeklyPicture;
        this.weekNumber = this.week.weekNum;
        this.length = this.convertLength(this.week.length);
        this.weight = this.convertWeight(this.week.weight);
    },
    data() {
        return {
            imageURL: null,
            weekNumber: 0,
            weight: null,
            length: null
        }
    },
    methods: {
        convertWeight(grams) {
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
        convertLength(cm) {
            const inchPerCM = 0.393701;
            let inches = Math.round(cm * inchPerCM);
            if (!isNaN(inches)) {
                return `${inches} inches`
            } else {
                return null;
            }
        }
    }
}
</script>
<style>
.info-container {
    max-width: 350px;
    margin: 5px;
    display: inline-flex;
}
.custom-card {
    border-radius: 25px;
}
</style>