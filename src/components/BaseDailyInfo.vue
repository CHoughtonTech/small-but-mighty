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
                    <div class="media-content no-overflow">
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
                    <div class="media-content no-overflow">
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
                    <div class="media-content no-overflow">
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
                    <div class="media-content no-overflow">
                        <p class="title is-4">Updates</p>
                        <p class="subtitle is-6">{{details}}</p>
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <button class="button is-primary" @click="showAdditionalDetails">Mom &amp; Dad Updates</button>
                </p>
            </footer>
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
            imageURL: null,
            additionalDetails: null
        }
    },
    created() {
        this.updateDate = this.update.date;
        this.details = this.update.details; 
        this.daysOld = this.daysDiff("6/19/2021", this.update.date);
        this.weight =  this.convertWeight(this.update.weight);
        this.imageURL = this.update.dailyPicture;
        this.additionalDetails = this.update.additionalDetails;
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
        daysDiff(sd, ed){
            let startDate = new Date(sd);
            let endDate = new Date(ed);
            return parseInt(endDate.getTime() - startDate.getTime())/(24*3600*1000) + 1;
        },
        showAdditionalDetails() {
            this.$emit('show-additional-details', this.additionalDetails);
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
.custom-card-border {
    border-radius: 25px;
    background-color:lightblue;
}
.no-overflow {
    overflow: hidden;
}
</style>