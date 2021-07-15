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
                        <div class="media-content no-overflow">
                            <p class="title is-4">Week {{weekNumber}}</p>
                            <p class="subtitle is-6">{{weekRange}}</p>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="@/assets/obesity.png" alt="Weight Icon">
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
                                <img src="@/assets/ruler.png" alt="Length Icon">
                            </figure>
                        </div>
                        <div class="media-content no-overflow">
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
import {conversionsMixin} from "../mixins/conversionsMixin";
export default {
    mixins:[conversionsMixin],
    props: {
        week: Object
    },
    computed: {
        weekRange() {
            let weekUpdates = this.$store.getters.getUpdatesByWeek(this.week.id);
            if (weekUpdates && weekUpdates.length > 0) {
                let dateStart = new Date(weekUpdates[0].date);
                let dateEnd = new Date(dateStart);
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
        this.length = this.convertCMToIN(this.week.length);
        this.weight = this.convertGramsToPounds(this.week.weight);
    },
    data() {
        return {
            imageURL: null,
            weekNumber: 0,
            weight: null,
            length: null
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
}
.no-overflow {
    overflow: hidden;
}
</style>