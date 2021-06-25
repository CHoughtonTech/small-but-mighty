<template>
    <div class="info-container">
        <div class="card custom-card-border">
            <div class="card-image">
                <figure class="image is-3by4">
                    <img :src="imageURL" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="@/assets/calendarDate.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">Date</p>
                        <p class="subtitle is-6">{{updateDate}}</p>
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
                            <img src="@/assets/calendar.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">Age</p>
                        <p class="subtitle is-6">{{daysOld}} Days Old</p>
                    </div>
                </div>
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="@/assets/note.png" alt="Notes">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">Updates</p>
                        <p class="subtitle is-6">{{details}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        update: Object
    },
    data() {
        return {
            daysOld: 0,
            weight: null,
            details: null,
            updateDate: null,
            imageURL: null
        }
    },
    created() {
        this.updateDate = this.update.date;
        this.details = this.update.details; 
        this.daysOld = new Date(this.update.date).getDate() - new Date("6/19/2021").getDate() + 1;
        this.weight =  this.convertWeight(this.update.weight);
        this.imageURL = this.update.dailyPicture;
    },
    methods: {
        convertWeight(grams) {
        const ouncePerGram = 0.035274;
        let totalOunces = grams * ouncePerGram;
        let pounds = Math.floor(totalOunces / 16);
        let ounces = Math.round(totalOunces - (pounds * 16));
        if (!isNaN(pounds) && !isNaN(ounces)) {
            return `${pounds} lbs ${ounces} oz`;
        } else if (!isNaN(pounds)) {
            return `${pounds} lbs`
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